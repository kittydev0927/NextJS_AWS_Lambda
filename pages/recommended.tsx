import { getUserAuthContent } from '#api/aem/getUserAuthContent/getUserAuthContent';
import type { ILoginLandingPageContent } from '#api/aem/loginLandingPageContentQuery/loginLandingPageContentQuery.types';
import { SavedHomesPage } from '#components/pages/SavedHomesPage/SavedHomesPage';

const SavedHomes: React.FC<ILoginLandingPageContent> = ({ ...props }) => {
  return <SavedHomesPage {...props} />;
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
