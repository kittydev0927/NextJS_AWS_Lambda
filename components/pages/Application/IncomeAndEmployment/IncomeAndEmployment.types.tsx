import type { IIncomeAndEmploymentData } from '#api/aem/application/getIncomeAndEmploymentContent/getIncomeAndEmploymentContent.types';

export interface IncomeAndEmploymentPageProps {
  housingChoice?: boolean;
  pageData: IIncomeAndEmploymentData;
}
