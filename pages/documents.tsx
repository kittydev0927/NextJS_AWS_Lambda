import { getContent } from '#api/aem/applicationContentFragmentQuery/applicationContentFragmentQuery';
import type { ILoginPageContentQuery } from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';
import { PageLayout } from '#components/layouts/organisms/PageLayout/PageLayout';

const DocumentPage: React.FC<ILoginPageContentQuery> = ({ ...props }) => {
  return <PageLayout {...props} />;
};

export async function getServerSideProps() {
  const headerContent = await getContent('register-main');
  const tcContent = await getContent('register-privacychkbox');
  const consentContent = await getContent('register-consentchkbox');

  return {
    props: {
      headerTitle: headerContent.cfHeading.json[0].content[0].value,
      headerText: headerContent.cfContent.json[0].content[0].value,
      tcText: tcContent.cfContent.json[0].content[0].value,
      dataOptInConsent: consentContent.cfContent.json[0].content[0].value,
    },
  };
}

export default DocumentPage;
