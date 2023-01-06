import { getBackgroundContent } from '#api/aem/application/getBackgroundContent/getBackgroundContent';
import { Background } from '#components/pages/Application/Background/Background';
import type { BackgroundProps } from '#components/pages/Application/Background/Background.types';

const BackgroundPage: React.FC<BackgroundProps> = ({ pageData }) => {
  return <Background pageData={pageData} />;
};

export async function getStaticProps() {
  const pageData = await getBackgroundContent();

  return { props: { pageData } };
}

export default BackgroundPage;
