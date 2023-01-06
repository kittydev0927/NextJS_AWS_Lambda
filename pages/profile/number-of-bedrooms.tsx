import { getUserAuthContent } from '#api/aem/getUserAuthContent/getUserAuthContent';
import type { ILoginLandingPageContent } from '#api/aem/loginLandingPageContentQuery/loginLandingPageContentQuery.types';
import { PBNumberOfBedrooms } from '#components/pages/ProfileBuilder/PBNumberOfBedrooms/PBNumberOfBedrooms';

const PBNumberOfBedroomsPage: React.FC<ILoginLandingPageContent> = ({ ...props }) => {
  return <PBNumberOfBedrooms {...props} />;
};

export async function getStaticProps() {
  const userAuthContent = await getUserAuthContent();

  return {
    props: {
      userAuthContent,
    },
  };
}

export default PBNumberOfBedroomsPage;
