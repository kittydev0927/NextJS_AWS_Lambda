import { getLeaseDetailsContent } from '#api/aem/application/getLeaseDetailsContent/getLeaseDetailsContent';
import { LeaseDetails } from '#components/pages/Application/LeaseDetails/LeaseDetails';
import type { LeaseDetailsProps } from '#components/pages/Application/LeaseDetails/LeaseDetails.types';

const LeaseDetailsPage: React.FC<LeaseDetailsProps> = ({ pageData }) => {
  return <LeaseDetails pageData={pageData} />;
};

export async function getStaticProps() {
  const pageData = await getLeaseDetailsContent();
  return { props: { pageData } };
}

export default LeaseDetailsPage;
