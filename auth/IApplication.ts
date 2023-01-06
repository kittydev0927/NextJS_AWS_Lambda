import type IApplicant from '#auth/IApplicant';

export interface IApplication {
  applicationId: string;
  applicants: IApplicant[];
  created: Date;
  finalPaymentIntent?: boolean;
  primaryApplicantId: string;
  propertyId: string;
  startDate?: Date | null;
  state: 'cancelled' | 'draft' | 'submitted';
  stripePaymentIntent?: string | null;
  term?: number | null;
}
