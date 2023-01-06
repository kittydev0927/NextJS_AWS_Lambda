import { getUserAuthContent } from '#api/aem/getUserAuthContent/getUserAuthContent';
import type { ILoginLandingPageContent } from '#api/aem/loginLandingPageContentQuery/loginLandingPageContentQuery.types';
import { SavedHomesMapPage } from '#components/pages/SavedHomesMapPage/SavedHomesMapPage';

const SavedHomes: React.FC<ILoginLandingPageContent> = ({ ...props }) => {
  return <SavedHomesMapPage {...props} mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN} />;
};

export async function getStaticProps() {
  const userAuthContent = await getUserAuthContent();

  return {
    props: {
      userAuthContent,
    },
  };
}

export default SavedHomes;
