import { getUserAuthContent } from '#api/aem/getUserAuthContent/getUserAuthContent';
import type { ILoginLandingPageContent } from '#api/aem/loginLandingPageContentQuery/loginLandingPageContentQuery.types';
import { EditPersonalInformation } from '#components/pages/AccountSettings/EditPersonalInformation/EditPersonalInformation';

const EditPersonalInformationPage: React.FC<ILoginLandingPageContent> = ({ ...props }) => {
  return <EditPersonalInformation {...props} />;
};

export async function getStaticProps() {
  const userAuthContent = await getUserAuthContent();

  return {
    props: {
      userAuthContent,
    },
  };
}

export default EditPersonalInformationPage;
