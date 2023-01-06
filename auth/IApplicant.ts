export default interface IApplicant {
  agent?: {
    readonly email?: string | null;
    readonly exists?: boolean | null;
    readonly name?: string | null;
  } | null;
  applicantId: string;
  applicationId: string;
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  inviteAccepted?: Date;
  inviteSent?: Date;
  occupant?: {
    dateOfBirth?: Date;
    firstName?: string;
    lastName?: string;
    middleName?: string;
  }[];
  phoneNumber?: string;
  portalId?: string;
  state: 'accepted' | 'complete' | 'in progress' | 'ineligible' | 'pending' | 'primary' | 'profile created';
  terms?: {
    acceptedOn?: Date;
    version: string;
  };
  type?: 'guarantor' | 'resident';
  vehicle?: {
    license?: string;
    make?: string;
    model?: string;
    region?: string;
    type?: string;
  }[];
  resendAttempts?: number;
}
