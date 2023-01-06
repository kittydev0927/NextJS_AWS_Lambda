import { getAdditionalInformationContent } from '#api/aem/application/getAdditionalInformationContent/getAdditionalInformationContent';
import { AdditionalInformation } from '#components/pages/Application/AdditionalInformation/AdditionalInformation';
import type { IAdditionalInformation } from '#components/pages/Application/AdditionalInformation/AdditionalInformation.types';

const AdditionalInformationPage: React.FC<IAdditionalInformation> = ({ pageData }) => {
  return <AdditionalInformation pageData={pageData} />;
};

export async function getStaticProps() {
  const pageData = await getAdditionalInformationContent();
  return { props: { pageData } };
}

export default AdditionalInformationPage;
