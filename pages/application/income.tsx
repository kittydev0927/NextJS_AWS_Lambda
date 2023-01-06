import { getIncomeContent } from '#api/aem/application/getIncomeContent/getIncomeContent';
import { Income } from '#components/pages/Application/Income/Income';
import type { IncomeProps } from '#components/pages/Application/Income/Income.types';

const IncomePage: React.FC<IncomeProps> = ({ pageData }) => {
  return <Income pageData={pageData} applicants={[]} />;
};

export async function getStaticProps() {
  const pageData = await getIncomeContent();
  return { props: { pageData } };
}

export default IncomePage;
