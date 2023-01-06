import { getUserAuthContent } from '#api/aem/getUserAuthContent/getUserAuthContent';
import type { ILoginLandingPageContent } from '#api/aem/loginLandingPageContentQuery/loginLandingPageContentQuery.types';
import { PBRentRange } from '#components/pages/ProfileBuilder/PBRentRange/PBRentRange';

const PBRentRangePage: React.FC<ILoginLandingPageContent> = ({ ...props }) => {
  return <PBRentRange {...props} />;
};

export async function getStaticProps() {
  const userAuthContent = await getUserAuthContent();

  return {
    props: {
      userAuthContent,
    },
  };
}

export default PBRentRangePage;
