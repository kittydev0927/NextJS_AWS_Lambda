import { getUserAuthContent } from '#api/aem/getUserAuthContent/getUserAuthContent';
import type { ILoginLandingPageContent } from '#api/aem/loginLandingPageContentQuery/loginLandingPageContentQuery.types';
import { PageLayout } from '#components/layouts/organisms/PageLayout/PageLayout';

const NotificationPage: React.FC<ILoginLandingPageContent> = ({ ...props }) => {
  return <PageLayout {...props} />;
};

export async function getStaticProps() {
  const userAuthContent = await getUserAuthContent();

  return {
    props: {
      userAuthContent,
    },
  };
}

export default NotificationPage;
