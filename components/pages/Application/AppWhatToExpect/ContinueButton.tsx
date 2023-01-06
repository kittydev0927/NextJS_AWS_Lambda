import router, { useRouter } from 'next/router';
import { useContext } from 'react';

import { UserContext } from '#auth/UserContext';
import type { IApplication } from '#models/IApplication';

import { StyledButton } from './AppWhatToExpect.styles';
import type { IAppWhatToExpect } from './AppWhatToExpect.types';

export const ContinueButton: React.FC<Partial<IAppWhatToExpect>> = ({ onClick, primaryApplicant = true }) => {
  const { query } = useRouter();
  const portalUser = useContext(UserContext);

  const handleContinueClick = async () => {
    if (onClick) {
      onClick();
    }

    const selectedProperty = query.propertyId;
    const applications = await portalUser?.getApplication();

    if (selectedProperty) {
      if (applications && Object.keys(applications)?.length > 0) {
        const currentApplication = applications.filter(
          (app: { propertyId: string | string[] | undefined; state: string }) =>
            app.propertyId === selectedProperty && app.state === 'draft',
        );
        void router.push(
          `/application${primaryApplicant ? '/background' : '/applicants'}?applicationId=${
            currentApplication[0].applicationId
          }`,
        );
      } else {
        const result = (await portalUser?.createApplication(selectedProperty.toString())) as unknown as IApplication;
        if (result) {
          void router.push(`/application/background?applicationId=${result.applicationId}`);
        }
      }
    }
  };

  return (
    <StyledButton onClick={() => void handleContinueClick()} variant="primary">
      Continue
    </StyledButton>
  );
};
