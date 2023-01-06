import { getUserAuthContent } from '#api/aem/getUserAuthContent/getUserAuthContent';
import type { ILoginLandingPageContent } from '#api/aem/loginLandingPageContentQuery/loginLandingPageContentQuery.types';
import { EditPasswordPage } from '#components/pages/AccountSettings/EditPasswordPage/EditPasswordPage';

const EditPassword: React.FC<ILoginLandingPageContent> = ({ ...props }) => {
  return <EditPasswordPage {...props} />;
};

export async function getStaticProps() {
  const userAuthContent = await getUserAuthContent();

  return {
    props: {
      userAuthContent,
    },
  };
}

export default EditPassword;
