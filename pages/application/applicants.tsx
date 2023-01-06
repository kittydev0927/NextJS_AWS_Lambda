import { getApplicantsContent } from '#api/aem/application/getApplicantsContent/getApplicantsContent';
import type { IApplicantsPage } from '#api/aem/applicationContentFragmentQuery/applicationContentFragmentQuery.types';
import { Applicants } from '#components/pages/Application/Applicants/Applicants';

const ApplicantsPage: React.FC<IApplicantsPage> = ({ pageData }) => {
  return <Applicants pageData={pageData} applicants={[]} primaryApplicant />;
};

export async function getStaticProps() {
  const pageData = await getApplicantsContent();
  return {
    props: {
      pageData,
    },
  };
}

export default ApplicantsPage;
