import type { IApplicant } from './IApplicant';

export interface IApplication {
  readonly applicationId: string;
  readonly applicants: readonly IApplicant[];
  readonly applicantsInvited?: boolean;
  readonly created: Date;
  readonly finalPaymentIntent?: boolean;
  readonly primaryApplicantId: string;
  readonly propertyId: string;
  readonly securityPaymentIntent?: string;
  readonly startDate?: Date;
  readonly state: 'cancelled' | 'draft' | 'submitted';
  readonly stripePaymentIntent?: string;
  readonly term?: number;
}
