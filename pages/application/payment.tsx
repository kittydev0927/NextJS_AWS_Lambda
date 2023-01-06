import { getPaymentContent } from '#api/aem/application/getPaymentContent/getPaymentContent';
import { Payment } from '#components/pages/Application/Payment/Payment';
import type { PaymentProps } from '#components/pages/Application/Payment/Payment.types';

const PaymentPage: React.FC<PaymentProps> = ({ pageData }) => {
  return <Payment pageData={pageData} />;
};

export async function getStaticProps() {
  const pageData = await getPaymentContent();
  return { props: { pageData } };
}

export default PaymentPage;
