import { getCurrentResidenceContent } from '#api/aem/application/getCurrentResidenceContent/getCurrentResidenceContent';
import { CurrentResidence } from '#components/pages/Application/CurrentResidence/CurrentResidence';
import type { CurrentResidenceProps } from '#components/pages/Application/CurrentResidence/CurrentResidence.types';

const CurrentResidencePage: React.FC<CurrentResidenceProps> = ({ pageData }) => {
  return <CurrentResidence pageData={pageData} />;
};
export async function getStaticProps() {
  const pageData = await getCurrentResidenceContent();
  return { props: { pageData } };
}

export default CurrentResidencePage;
