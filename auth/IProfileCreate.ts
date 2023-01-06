import type { IProfile } from './IProfile';

export interface IProfileCreate extends Omit<IProfile, 'firstName' | 'lastName' | 'emailAddress'> {
  readonly firstName: string;
  readonly lastName: string;
  readonly emailAddress: string;
  readonly password: string;
  readonly utmSource?: string;
  readonly utmMedium?: string;
  readonly utmCampaign?: string;
  readonly utmTerm?: string;
  readonly utmContent?: string;
  readonly adobeCid?: string;
  readonly adobeEcid?: string;
  readonly adobeEmailHash?: string;
  readonly propertyId?: string;
}
