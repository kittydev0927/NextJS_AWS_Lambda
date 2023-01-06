import type { IApplicantsData } from '#api/aem/application/getApplicantsContent/getApplicantsContent.types';
import type IApplicant from '#auth/IApplicant';

export interface ApplicantProps {
  applicants: IApplicant[]; // placeholder prop until we can pull applicant type from backend
  primaryApplicant: boolean;
  pageData: IApplicantsData;
}
