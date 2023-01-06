import { getIncomeAndEmploymentContent } from '#api/aem/application/getIncomeAndEmploymentContent/getIncomeAndEmploymentContent';
import { IncomeAndEmployment } from '#components/pages/Application/IncomeAndEmployment/IncomeAndEmployment';
import type { IncomeAndEmploymentPageProps } from '#components/pages/Application/IncomeAndEmployment/IncomeAndEmployment.types';

const IncomeAndEmploymentPage: React.FC<IncomeAndEmploymentPageProps> = ({ pageData }) => {
  return <IncomeAndEmployment pageData={pageData} />;
};

export async function getStaticProps() {
  const pageData = await getIncomeAndEmploymentContent();
  return { props: { pageData } };
}

export default IncomeAndEmploymentPage;
