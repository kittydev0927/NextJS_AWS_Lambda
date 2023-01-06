export interface IApplicant {
  readonly agent?: {
    readonly email?: string;
    readonly exists?: boolean;
    readonly name?: string;
  } | null;
  readonly applicantId: string;
  readonly applicationId: string;
  readonly displayName?: string;
  readonly emailAddress?: string;
  readonly inviteAccepted?: Date;
  readonly inviteSent?: Date;
  readonly occupant?: readonly {
    readonly dateOfBirth?: Date;
    readonly firstName?: string;
    readonly lastName?: string;
    readonly middleName?: string;
  }[];
  readonly pets?:
    | readonly {
        readonly petName: string;
        readonly petType: string;
      }[]
    | null;
  readonly phoneNumber?: string;
  readonly state: 'accepted' | 'complete' | 'in progress' | 'ineligible' | 'pending' | 'primary' | 'profile created';
  readonly terms?: {
    readonly acceptedOn?: Date;
    readonly version: string;
  };
  readonly type?: 'guarantor' | 'resident';
  readonly vehicle?: readonly {
    readonly license?: string;
    readonly make?: string;
    readonly model?: string;
    readonly region?: string;
    readonly type?: string;
  }[];
}
