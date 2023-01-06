import { getUserAuthContent } from '#api/aem/getUserAuthContent/getUserAuthContent';
import type { ILoginLandingPageContent } from '#api/aem/loginLandingPageContentQuery/loginLandingPageContentQuery.types';
import { LoginPageOptions } from '#components/pages/LoginPageOptions/LoginPageOptions';

const LoginOptions: React.FC<ILoginLandingPageContent> = ({ ...props }) => {
  return <LoginPageOptions {...props} />;
};

export async function getStaticProps() {
  const userAuthContent = await getUserAuthContent();

  return {
    props: {
      userAuthContent,
    },
  };
}

export default LoginOptions;
