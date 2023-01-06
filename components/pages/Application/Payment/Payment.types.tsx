import type { IPaymentData } from '#api/aem/application/getPaymentContent/getPaymentContent.types';

export interface PaymentProps {
  applicants?: number;
  total?: number;
  pageData: IPaymentData;
}
