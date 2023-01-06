import { getApplicantInfoContent } from '#api/aem/application/getApplicantInfoContent/getApplicantInfoContent';
import { ApplicantInfo } from '#components/pages/Application/ApplicantInfo/ApplicantInfo';
import type { ApplicantInfoProps } from '#components/pages/Application/ApplicantInfo/ApplicantInfo.types';

const ApplicantInfoPage: React.FC<ApplicantInfoProps> = ({ pageData }) => {
  return <ApplicantInfo pageData={pageData} />;
};

export async function getStaticProps() {
  const pageData = await getApplicantInfoContent();
  return { props: { pageData } };
}

export default ApplicantInfoPage;
