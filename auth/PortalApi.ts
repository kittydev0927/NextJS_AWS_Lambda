import type { IHomeDetail, IHomesDetail } from 'homedetail/IHomeDetail';
import { StatusCodes } from 'http-status-codes';

import type { IApplication } from '#models/IApplication';

import type { IIdentity } from './IIdentity';
import type { IInquiry } from './IInquiry';
import type { IPaymentIntentResponse } from './IPaymentIntentResponse';
import type { IProfile } from './IProfile';
import type { IProfileCreate } from './IProfileCreate';
import { isOktaError } from './IsOktaError';
import { MapIdentityFromJson } from './MapIdentityFromJson';
import { MapProfileFromJson } from './MapProfileFromJson';
import { MapProfileToJson } from './MapProfileToJson';
import { OktaAuthError } from './OktaAuthError';

const apiUrl = process.env.NEXT_PUBLIC_PORTAL_API_URL || process.env.STORYBOOK_PORTAL_API_URL;

export class PortalApi {
  public constructor(private readonly _idToken: string) {}

  private get authentication() {
    return {
      headers: { Authorization: 'Bearer ' + this._idToken },
    };
  }

  public static async postProfile(profile: IProfileCreate): Promise<void> {
    const response = await fetch(new URL('/profile', apiUrl).toString(), {
      body: JSON.stringify(profile),
      method: 'POST',
    });

    const json = (await response.json()) as unknown;

    if (isOktaError(json)) {
      throw new OktaAuthError(json, response.status);
    }
  }

  public async deleteSavedHomes(propertyIdOrDeleteType: string | 'all' | 'unavailable') {
    const deleteTypes = ['all', 'unavailable'];
    const key = deleteTypes.includes(propertyIdOrDeleteType) ? 'deleteType' : 'propertyId';

    const url = new URL('/saved-home', apiUrl);
    url.searchParams.set(key, propertyIdOrDeleteType);

    const response = await fetch(url.toString(), { ...this.authentication, method: 'DELETE' });

    if (response.status !== StatusCodes.OK) {
      console.error(await response.text());
      throw new Error('Unexpected error');
    }

    const result = (await response.json()) as unknown;
    if (typeof result === 'number') {
      return result;
    }

    throw new Error('Could not parse result: ' + JSON.stringify(result));
  }

  public async getOrCreateProfile() {
    const existing = await fetch(new URL('/profile', apiUrl).toString(), {
      ...this.authentication,
      method: 'GET',
    });

    if (existing.status !== StatusCodes.NOT_FOUND) {
      return MapProfileFromJson(await existing.json());
    }

    const created = await fetch(new URL('/profile/from/okta', apiUrl).toString(), {
      ...this.authentication,
      method: 'POST',
    });

    if (created.status !== StatusCodes.OK) {
      console.error(created);
      throw new Error('Could not update existing profile from Okta');
    }

    return MapProfileFromJson(await created.json());
  }

  public async getApplication(): Promise<IApplication[]> {
    const response = await fetch(new URL('/applications', apiUrl).toString(), {
      ...this.authentication,
      method: 'GET',
    });

    const result = (await response.json()) as IApplication[];

    if (!result) {
      throw new Error('Could not find application');
    }

    return result;
  }

  public async getProperty(propertyId: string): Promise<IHomeDetail> {
    const response = await fetch(new URL(`/properties/${propertyId}`, apiUrl).toString(), {
      ...this.authentication,
      method: 'GET',
    });

    const result = (await response.json()).items[0] as IHomeDetail;

    if (!result) {
      throw new Error('Could not find property');
    }

    return result;
  }

  public async getSavedHomes(isMarketable = true): Promise<IHomesDetail> {
    const homes = await fetch(
      new URL(`/search-home?isSaved=true&isMarketable=${isMarketable.toString()}`, apiUrl).toString(),
      {
        ...this.authentication,
        method: 'GET',
      },
    );

    // TODO: Need runtime type checking for this.
    return homes.json();
  }

  public async patchPersonaInquiry({ inquiryId, ...rest }: IInquiry): Promise<void> {
    const url = new URL('/profile/persona/inquiry/' + encodeURIComponent(inquiryId), apiUrl);
    const body = JSON.stringify({ sessionToken: null, ...rest });
    const response = await fetch(url.toString(), { ...this.authentication, body, method: 'PATCH' });

    if (response.status !== StatusCodes.NO_CONTENT) {
      throw new Error('Could not update inquiry');
    }
  }

  public async patchProfile(patch: IProfile): Promise<IProfile> {
    const response = await fetch(new URL('/profile', apiUrl).toString(), {
      ...this.authentication,
      method: 'PATCH',
      body: JSON.stringify(MapProfileToJson(patch)),
    });

    const json = (await response.json()) as unknown;

    if (isOktaError(json)) {
      throw new OktaAuthError(json, response.status);
    }

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const mapped = MapProfileFromJson(await response.json());

    if (!mapped) {
      throw new Error('Could not map updated profile');
    }

    return mapped;
  }

  public async postApplication(propertyId: string): Promise<IApplication> {
    const url = new URL('/application', apiUrl);

    const response = await fetch(url.toString(), {
      ...this.authentication,
      body: JSON.stringify({ propertyId }),
      method: 'POST',
    });

    const statusCodes = [StatusCodes.OK, StatusCodes.CREATED];

    if (!statusCodes.includes(response.status)) {
      console.error(await response.text());
      throw new Error('Unable to create application');
    }

    const result = (await response.json()) as IApplication;

    return result;
  }

  public async deleteApplicant(applicationId: string, applicantId: string): Promise<void> {
    const url = new URL(`/applications/${applicationId}/applicants/${applicantId}`, apiUrl);

    const response = await fetch(url.toString(), {
      ...this.authentication,
      method: 'DELETE',
    });

    if (response.status !== StatusCodes.NO_CONTENT) {
      console.error(await response.text());
      throw new Error('Unexpected error');
    }
  }

  public async postPersonaAccount(): Promise<IIdentity> {
    const url = new URL('/profile/persona/account', apiUrl);
    const response = await fetch(url.toString(), { ...this.authentication, method: 'POST' });

    if (response.status !== StatusCodes.CREATED) {
      throw new Error('Could not create Persona account');
    }

    const identity = (await response.json()) as unknown;
    return MapIdentityFromJson(identity);
  }

  public async postPersonaInquiry(inquiry: IInquiry): Promise<void> {
    const url = new URL('/profile/persona/inquiry', apiUrl);
    const body = JSON.stringify(inquiry);
    const response = await fetch(url.toString(), { ...this.authentication, body, method: 'POST' });

    if (response.status !== StatusCodes.CREATED) {
      throw new Error('Could not create inquiry');
    }
  }

  public async postPaymentIntent(amount: number, paymentMethodTypes: string[]): Promise<IPaymentIntentResponse> {
    const url = new URL('/create-payment', apiUrl);
    url.searchParams.set('amount', amount.toString());
    url.searchParams.set('paymentMethodTypes', JSON.stringify(paymentMethodTypes));
    const response = await fetch(url.toString(), { ...this.authentication, method: 'POST' });
    const result = (await response.json()) as unknown;
    return result as IPaymentIntentResponse;
  }

  public async postPlaidLinkToken(): Promise<string> {
    const response = await fetch(new URL('/plaid/link-token', apiUrl).toString(), {
      ...this.authentication,
      method: 'POST',
    });

    if (response.status !== StatusCodes.OK) {
      throw new Error('Could not create plaid link token');
    }

    const result = (await response.json()) as unknown;
    if (typeof result !== 'string') {
      throw new Error('Unexpected response');
    }

    return result;
  }

  public async putPassword(currentPassword: string, newPassword: string): Promise<void> {
    const response = await fetch(new URL('/password', apiUrl).toString(), {
      ...this.authentication,
      body: JSON.stringify({ currentPassword, newPassword }),
      method: 'PUT',
    });

    if (response.status === StatusCodes.NO_CONTENT) {
      return;
    }

    const json = (await response.json()) as unknown;
    if (isOktaError(json)) {
      throw new OktaAuthError(json, response.status);
    }

    throw new Error('Unexpected error');
  }

  public async putSavedHome(propertyId: string): Promise<boolean> {
    const url = new URL('/saved-home', apiUrl);
    url.searchParams.set('propertyId', propertyId);

    const response = await fetch(url.toString(), { ...this.authentication, method: 'PUT' });

    if (response.status !== StatusCodes.OK) {
      console.error(await response.text());
      throw new Error('Unexpected error');
    }

    const result = (await response.json()) as unknown;
    if (typeof result === 'boolean') {
      return result;
    }

    throw new Error('Could not parse result: ' + JSON.stringify(result));
  }

  public async getApplications(): Promise<IApplication[]> {
    return fetch(new URL(`/applications`, apiUrl).toString(), { ...this.authentication, method: 'GET' })
      .then(async response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const result = (await response.json()) as IApplication[];
        return result;
      })
      .then(data => {
        return data;
      });
  }

  public async getApplicationById(applicationId: string): Promise<IApplication> {
    const response = await fetch(new URL(`/applications/${applicationId}`, apiUrl).toString(), {
      ...this.authentication,
      method: 'GET',
    });

    const result = (await response.json()) as IApplication;

    if (!result) {
      throw new Error('Could not find application');
    }

    return result;
  }
}
