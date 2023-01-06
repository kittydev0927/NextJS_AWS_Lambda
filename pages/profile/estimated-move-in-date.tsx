import { getUserAuthContent } from '#api/aem/getUserAuthContent/getUserAuthContent';
import type { ILoginLandingPageContent } from '#api/aem/loginLandingPageContentQuery/loginLandingPageContentQuery.types';
import { PBMoveInDate } from '#components/pages/ProfileBuilder/PBMoveInDate/PBMoveInDate';

const PBMoveInDatePage: React.FC<ILoginLandingPageContent> = ({ ...props }) => {
  return <PBMoveInDate {...props} />;
};

export async function getStaticProps() {
  const userAuthContent = await getUserAuthContent();

  return {
    props: {
      userAuthContent,
    },
  };
}

export default PBMoveInDatePage;
