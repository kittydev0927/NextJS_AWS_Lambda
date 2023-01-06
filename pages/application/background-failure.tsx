import { getUserAuthContent } from '#api/aem/getUserAuthContent/getUserAuthContent';
import type { ILoginPageContentQuery } from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';
import { ApplicationFailurePage } from '#components/pages/Application/ApplicationFailurePage/ApplicationFailurePage';

const ApplicationFailure: React.FC<ILoginPageContentQuery> = ({ ...props }) => {
  return <ApplicationFailurePage {...props} />;
};

export async function getStaticProps() {
  const userAuthContent = await getUserAuthContent();

  return {
    props: {
      userAuthContent,
    },
  };
}

export default ApplicationFailure;
