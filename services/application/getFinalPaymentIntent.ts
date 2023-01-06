import { useContext, useEffect, useState } from 'react';

import { UserContext } from '#auth/UserContext';
import type { IApplication } from '#models/IApplication';

export const useFinalPaymentIntent = async () => {
  const portalUser = useContext(UserContext);
  const [applications, setApplication] = useState<IApplication[] | undefined>(undefined);

  useEffect(() => {
    void (async () => {
      setApplication(await portalUser?.getApplications());
    })();
  }, [applications, portalUser]);

  return (applications?.length && !applications?.some(app => !app.finalPaymentIntent)) || false;
};
