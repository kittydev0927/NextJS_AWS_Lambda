import { IdxStatus, OktaAuth } from '@okta/okta-auth-js';
import Cookies from 'js-cookie';
import router from 'next/router';

import { BASE_URL } from '#constants/constants';
import { DefaultOktaWidgetConfig, OktaClientId, OktaDomain } from '#constants/oktaWidgetConfig';
import type { IApplication } from '#models/IApplication';

import type { IHomeDetail, IHomesDetail } from '../homedetail/IHomeDetail';
import { AuthEvent } from './AuthEvent';
import type { IAnalyticsCookies } from './IAnalyticsCookies';
import type { IIdentity } from './IIdentity';
import type { IInquiry } from './IInquiry';
import type { IPaymentIntentResponse } from './IPaymentIntentResponse';
import type { IProfile } from './IProfile';
import type { IProfileCreate } from './IProfileCreate';
import { PortalApi } from './PortalApi';

export class PortalUser {
  private createPaymentIntentPromise?: Promise<IPaymentIntentResponse>;
  private createPlaidTokenPromise?: Promise<string>;
  private getProfilePromise?: Promise<IProfile | undefined>;
  private getApplicationPromise?: Promise<IApplication[] | undefined>;
  private getSavedHomesPromise?: Promise<IHomesDetail | undefined>;
  private isAuthenticatedPromise: Promise<boolean>;
  private readonly getPropertyPromises = new Map<string, Promise<IHomeDetail | undefined>>();
  private readonly oktaAuth: OktaAuth;

  public constructor() {
    if (typeof window === 'undefined') {
      throw new Error('Cannot load PortalUser server-side.');
    }

    const postLogoutUri = Cookies.get('post-logout-uri');
    if (postLogoutUri) {
      Cookies.remove('post-logout-uri', { domain: window.location.hostname, path: '/' });
      void router.push(postLogoutUri);
    }

    if (!(OktaClientId && OktaDomain)) {
      throw new Error('Missing authentication endpoint information');
    }

    const location = window.location.toString();
    const redirectUri = new URL('/dashboard', location);

    const { scopes } = DefaultOktaWidgetConfig;

    const oktaAuth = new OktaAuth({
      clientId: OktaClientId,
      issuer: `https://${OktaDomain}/oauth2/default`,
      postLogoutRedirectUri: BASE_URL,
      redirectUri: redirectUri.toString(),
      scopes: scopes ? [...scopes] : undefined,
      tokenManager: { autoRenew: true },
    });

    oktaAuth.start();
    this.oktaAuth = oktaAuth;
    this.isAuthenticatedPromise = oktaAuth.isAuthenticated();
  }

  public async isAuthenticated(): Promise<boolean> {
    const { oktaAuth } = this;
    const authenticated = await this.isAuthenticatedPromise;
    const params = new URLSearchParams(window.location.search);
    const propertyId = params.get('propertyId');
    const q = params.get('q');

    const rememberLogoutUri = () => {
      const getOrigin = () => {
        const origin = params.get('origin');
        if (origin?.includes(BASE_URL)) {
          return origin;
        }
        return BASE_URL;
      };
      if (origin) {
        // Justification: makes cookie expiration value more readable.
        /* eslint-disable-next-line @typescript-eslint/no-magic-numbers */
        const expires = (1 / 24 / 60 / 60) * 10; // 10 seconds specified as fraction of 1 day
        Cookies.set('post-logout-uri', getOrigin(), {
          domain: window.location.hostname,
          expires,
          path: '/',
        });
      }
    };

    if (q === 'logout') {
      Cookies.remove('okta-token-storage');

      rememberLogoutUri();
      await this.signOut();

      return true;
    }

    if (authenticated) {
      if (propertyId) {
        await this.addSavedHomes(propertyId);
      }

      const tokens = await oktaAuth.tokenManager.getTokens();

      Cookies.set('okta-token-storage', JSON.stringify(tokens), {
        domain: 'rentprogress.com',
        expires: 0.02083333333,
        secure: true,
      });

      Cookies.set('_rp_login', Date.now().toString(), {
        domain: 'rentprogress.com',
      });

      return authenticated;
    }

    return false;
  }

  public async patchPersonaInquiry(inquiry: IInquiry): Promise<void> {
    const api = await this.getApi();
    await api.patchPersonaInquiry(inquiry);
  }

  public async patchProfile(profile: IProfile): Promise<IProfile> {
    const patch = async () => {
      const api = await this.getApi();
      return api.patchProfile(profile);
    };

    const promise = patch();
    this.getProfilePromise = promise;
    const newProfile = await promise;
    window.dispatchEvent(new CustomEvent(AuthEvent.profileChanged, { detail: newProfile }));
    return newProfile;
  }

  public async postPersonaInquiry(inquiry: IInquiry): Promise<void> {
    const api = await this.getApi();
    await api.postPersonaInquiry(inquiry);
  }

  public async register(profile: IProfileCreate) {
    const { oktaAuth } = this;
    delete this.getProfilePromise;
    delete this.getApplicationPromise;
    delete this.getSavedHomesPromise;
    delete this.createPlaidTokenPromise;
    delete this.createPaymentIntentPromise;
    this.isAuthenticatedPromise = Promise.resolve(false);

    const utmCookies = Cookies.get('campaign-analytics') || '';
    const campaignAnalytics = decodeURIComponent(utmCookies);
    const analyticsCookies: IAnalyticsCookies = campaignAnalytics
      .split(';')
      .reduce(function (o: IAnalyticsCookies, pair) {
        const pairs = pair.split('=');
        o[pairs[0] as keyof IAnalyticsCookies] = pairs[1];
        return o;
      }, {});
    const payload = {
      ...profile,
      utmSource: analyticsCookies?.utmSource || '',
      utmMedium: analyticsCookies?.utmMedium || '',
      utmCampaign: analyticsCookies?.utmCampaign || '',
      utmTerm: analyticsCookies?.utmTerm || '',
      utmContent: analyticsCookies?.utmContent || '',
      adobeCid: analyticsCookies?.adobeCid || '',
      adobeEcid: analyticsCookies?.adobeEcid || '',
      adobeEmailHash: analyticsCookies?.adobeEmailHash || '',
    };
    await PortalApi.postProfile(payload);

    const transaction = await oktaAuth.signInWithCredentials({
      password: profile.password,
      username: profile.emailAddress,
    });

    if (transaction.status !== IdxStatus.SUCCESS) {
      // TODO: Handle other authentication states:
      //  - PENDING
      //  - FAILURE
      //  - TERMINAL
      //  - CANCELED (note incorrect spelling, it's like that in Okta)
      //
      // Do we have designs for what should be presented to the user at
      // this point?
      throw new Error(`Not Implemented: ${transaction.status}`);
    }

    const { scopes } = DefaultOktaWidgetConfig;

    const tokenResponse = await oktaAuth.token.getWithoutPrompt({
      responseType: ['id_token', 'token'],
      sessionToken: transaction.sessionToken,
      scopes: scopes ? [...scopes] : undefined,
    });

    Cookies.set('okta-token-storage', JSON.stringify(tokenResponse.tokens), {
      domain: 'rentprogress.com',
      expires: 0.02083333333,
      secure: true,
    });

    Cookies.set('_rp_registration', Date.now().toString(), {
      domain: 'rentprogress.com',
    });

    oktaAuth.tokenManager.setTokens(tokenResponse.tokens);
    this.isAuthenticatedPromise = Promise.resolve(true);
  }

  public async signOut() {
    const { oktaAuth } = this;
    await oktaAuth.revokeAccessToken();

    delete this.getProfilePromise;
    delete this.getApplicationPromise;
    delete this.getSavedHomesPromise;
    delete this.createPlaidTokenPromise;
    delete this.createPaymentIntentPromise;

    Cookies.remove('okta-token-storage');
    Cookies.remove('_rp_registration');
    Cookies.remove('_rp_login');

    this.isAuthenticatedPromise = Promise.resolve(false);

    // This redirects the user in most cases. The user does NOT get redirected
    // if they do not have a valid id token (i.e., they are signed into Okta
    // but not signed into the app).
    await oktaAuth.signOut();
  }

  public async getOrCreatePersonaAccount(): Promise<IIdentity> {
    const profile = await this.getProfile();
    if (!profile) {
      throw new Error('Must authenticate');
    }

    const { personaAccountId } = profile;
    if (personaAccountId) {
      return { personaAccountId };
    }

    const api = await this.getApi();
    const identity = await api.postPersonaAccount();
    const newProfile = { ...profile, ...identity };
    this.getProfilePromise = Promise.resolve(newProfile);
    window.dispatchEvent(new CustomEvent(AuthEvent.profileChanged, { detail: newProfile }));
    return identity;
  }

  public async getApplication() {
    const api = await this.getApi().then(async api => api?.getApplication());
    return api;
  }

  // TODO: We could reduce HTTP traffic by storing the profile in localstorage.
  // I am unsure if the profile data would qualify as PII. It looks like it
  // might. We should make a decision. If we decide not to leverage
  // localStorage, we should leave a comment here and in readme.md explaining
  // the reasons why.
  public async getProfile(): Promise<IProfile | undefined> {
    return (
      this.getProfilePromise ?? (this.getProfilePromise = this.tryGetApi().then(async api => api?.getOrCreateProfile()))
    );
  }

  public async getSavedHomes(isMarketable = true): Promise<IHomesDetail | undefined> {
    return (
      this.getSavedHomesPromise ??
      (this.getSavedHomesPromise = this.tryGetApi().then(async api => api?.getSavedHomes(isMarketable)))
    );
  }

  public async getProperty(propertyId: string) {
    const existing = this.getPropertyPromises.get(propertyId);
    if (existing) {
      return existing;
    }

    const created = this.tryGetApi().then(async api => api?.getProperty(propertyId));
    this.getPropertyPromises.set(propertyId, created);
    return created;
  }

  public async createPaymentIntent(amount: number, paymentMethodTypes: string[]): Promise<IPaymentIntentResponse> {
    return (this.createPaymentIntentPromise = this.getApi().then(async api =>
      api.postPaymentIntent(amount, paymentMethodTypes),
    ));
  }

  public async createPlaidToken(): Promise<string> {
    return (
      this.createPlaidTokenPromise ??
      (this.createPlaidTokenPromise = this.getApi().then(async api => api.postPlaidLinkToken()))
    );
  }

  public async changePassword(currentPassword: string, newPassword: string) {
    const api = await this.getApi();
    await api.putPassword(currentPassword, newPassword);
  }

  public async removeSavedHomes(propertyIdOrDeleteType: string | 'all' | 'unavailable') {
    const api = await this.getApi();
    await api.deleteSavedHomes(propertyIdOrDeleteType);

    if (this.getSavedHomesPromise) {
      this.getSavedHomesPromise = api.getSavedHomes();
      window.dispatchEvent(new CustomEvent(AuthEvent.savedHomesChanged));
    }
  }

  public async addSavedHomes(propertyId: string) {
    const api = await this.getApi();
    const added = await api.putSavedHome(propertyId);

    if (added && this.getSavedHomesPromise) {
      this.getSavedHomesPromise = api.getSavedHomes();
      window.dispatchEvent(new CustomEvent(AuthEvent.savedHomesChanged));
    }
  }

  public async createApplication(selectedPropertyId: string) {
    const api = await this.getApi().then(async api => api?.postApplication(selectedPropertyId));
    return api;
  }

  public async getApplications(): Promise<IApplication[]> {
    const api = await this.getApi();
    return api.getApplications();
  }

  public async getApplicationById(applicationId: string) {
    const api = await this.getApi().then(async api => api?.getApplicationById(applicationId));
    return api;
  }

  public async deleteApplicant(applicationId: string, applicantId: string) {
    const api = await this.getApi();
    await api.deleteApplicant(applicationId, applicantId);
  }

  private async getApi() {
    const api = await this.tryGetApi();

    if (!api) {
      throw new Error('Must authenticate');
    }

    return api;
  }

  private async tryGetApi() {
    const authenticated = await this.isAuthenticatedPromise;
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');

    if (!authenticated) {
      return;
    }

    const { accessToken, idToken } = await this.oktaAuth.tokenManager.getTokens();

    if (accessToken && idToken) {
      if (q === 'logout') {
        Cookies.remove('okta-token-storage');

        await this.signOut();
      } else {
        Cookies.set('okta-token-storage', JSON.stringify({ accessToken, idToken }), {
          domain: 'rentprogress.com',
          expires: 0.02083333333,
          secure: true,
        });
      }

      return new PortalApi(accessToken?.accessToken);
    }
  }
}
