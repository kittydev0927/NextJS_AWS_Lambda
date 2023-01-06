import { getContent } from '#api/aem/applicationContentFragmentQuery/applicationContentFragmentQuery';
import type { ILoginPageContentQuery } from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';
import { SavedHomesMapPage } from '#components/pages/SavedHomesMapPage/SavedHomesMapPage';

const SavedHomesMap: React.FC<ILoginPageContentQuery> = ({ ...props }) => {
  return <SavedHomesMapPage {...props} />;
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

export default SavedHomesMap;
