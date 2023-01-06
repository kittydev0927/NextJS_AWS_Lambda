import { getUserAuthContent } from '#api/aem/getUserAuthContent/getUserAuthContent';
import type { ILoginLandingPageContent } from '#api/aem/loginLandingPageContentQuery/loginLandingPageContentQuery.types';
import { LoginPage } from '#components/pages/LoginPage/LoginPage';

const Login: React.FC<ILoginLandingPageContent> = ({ ...props }) => {
  return <LoginPage {...props} />;
};

export async function getStaticProps() {
  const userAuthContent = await getUserAuthContent();

  return {
    props: {
      userAuthContent,
    },
  };
}

export default Login;
