import { useContext, useEffect, useState } from 'react';

import { UserContext } from '#auth/UserContext';
import type { IApplication } from '#models/IApplication';

export const useMoveInDateConfirmed = async (applicationId: string) => {
  const portalUser = useContext(UserContext);
  const [application, setApplication] = useState<IApplication | undefined>(undefined);

  useEffect(() => {
    void (async () => {
      setApplication(await portalUser?.getApplicationById(applicationId));
    })();
  }, [application, applicationId, portalUser]);
  return application?.startDate || false;
};
