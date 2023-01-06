import { getUserAuthContent } from '#api/aem/getUserAuthContent/getUserAuthContent';
import type { ILoginLandingPageContent } from '#api/aem/loginLandingPageContentQuery/loginLandingPageContentQuery.types';
import { SettingsPage } from '#components/pages/Settings/Settings';

const Settings: React.FC<ILoginLandingPageContent> = ({ ...props }) => {
  return <SettingsPage {...props} />;
};

export async function getStaticProps() {
  const userAuthContent = await getUserAuthContent();

  return {
    props: {
      userAuthContent,
    },
  };
}

export default Settings;
