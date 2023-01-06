import { getUserAuthContent } from '#api/aem/getUserAuthContent/getUserAuthContent';
import type { ILoginLandingPageContent } from '#api/aem/loginLandingPageContentQuery/loginLandingPageContentQuery.types';
import { PBCompletePageComponent } from '#components/pages/ProfileBuilder/PBCompletePage/PBCompletePage';

const PBCompletePage: React.FC<ILoginLandingPageContent> = ({ ...props }) => {
  return <PBCompletePageComponent {...props} />;
};

export async function getStaticProps() {
  const userAuthContent = await getUserAuthContent();

  return {
    props: {
      userAuthContent,
    },
  };
}

export default PBCompletePage;
