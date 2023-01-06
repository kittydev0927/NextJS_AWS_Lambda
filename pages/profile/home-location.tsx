import { getUserAuthContent } from '#api/aem/getUserAuthContent/getUserAuthContent';
import type { ILoginLandingPageContent } from '#api/aem/loginLandingPageContentQuery/loginLandingPageContentQuery.types';
import { PBLocationsPageComponent } from '#components/pages/ProfileBuilder/PBLocationsPage/PBLocationsPage';

const PBLocationsPage: React.FC<ILoginLandingPageContent> = ({ ...props }) => {
  return <PBLocationsPageComponent {...props} />;
};

export async function getStaticProps() {
  const userAuthContent = await getUserAuthContent();

  return {
    props: {
      userAuthContent,
    },
  };
}

export default PBLocationsPage;
