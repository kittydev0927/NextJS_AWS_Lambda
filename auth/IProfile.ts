import type { IIdentity } from './IIdentity';

export interface IProfile extends Partial<IIdentity> {
  readonly bankruptcy?: Date | boolean | null;
  readonly currentAddress?: {
    readonly country?: string;
    readonly streetAddress?: string;
    readonly extendedAddress?: string;
    readonly locality?: string;
    readonly region?: string;
    readonly postalCode?: string;
  } | null;
  readonly currentProgressResident?: boolean | null;
  readonly dateOfBirth?: Date | null;
  readonly desiredBedrooms?: ReadonlySet<number> | null;
  readonly emailAddress?: string | null;
  readonly emergencyContacts?:
    | readonly {
        readonly name: string;
        readonly phone: string;
      }[]
    | null;
  readonly eviction?: Date | boolean | null;
  readonly felony?: Date | boolean | null;
  readonly firstName?: string | null;
  readonly housingChoice?: boolean | null;
  readonly housingChoiceVoucherUploaded?: boolean | null;
  readonly lastName?: string | null;
  readonly market?: string | null;
  readonly maxRent?: number | null;
  readonly minRent?: number | null;
  readonly moveInDate?: Date | null;
  readonly optInConsent?: string | null;
  // TODO: the pets property should be on the Applicant entity, not the profile
  // see https://fundamentalreo.atlassian.net/browse/CPP-1439?focusedCommentId=109655
  readonly pets?:
    | readonly {
        readonly petName: string;
        readonly petType: string;
      }[]
    | null;
  readonly phoneNumber?: string | null;
  readonly plaidUserToken?: string | null;
  readonly preferredLocations?: ReadonlySet<string> | null;
  readonly privacyConsent?: boolean | null;
}
