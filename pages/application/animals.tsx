import { getAnimalsContent } from '#api/aem/application/getAnimalsContent/getAnimalsContent';
import { Animals } from '#components/pages/Application/Animals/Animals';
import type { AnimalsProps } from '#components/pages/Application/Animals/Animals.types';

const AnimalsPage: React.FC<AnimalsProps> = ({ pageData }) => {
  return <Animals pageData={pageData} />;
};

export async function getStaticProps() {
  const pageData = await getAnimalsContent();
  return { props: { pageData } };
}

export default AnimalsPage;
