import type { ILeaseDetailsData } from '#api/aem/application/getLeaseDetailsContent/getLeaseDetailsContent.types';

export interface LeaseDetailsProps {
  primaryApplicant?: boolean;
  pageData: ILeaseDetailsData;
}
