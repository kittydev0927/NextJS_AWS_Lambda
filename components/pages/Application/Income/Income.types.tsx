import type { IIncomeData } from '#api/aem/application/getIncomeContent/getIncomeContent.types';
import type IApplicant from '#auth/IApplicant';

export interface IncomeProps {
  applicants: IApplicant[];
  pageData: IIncomeData;
}
