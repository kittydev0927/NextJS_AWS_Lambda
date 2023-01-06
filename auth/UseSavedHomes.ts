import { useCallback, useContext, useEffect, useState } from 'react';

import type { IHomesDetail } from '../homedetail/IHomeDetail';
import { AuthEvent } from './AuthEvent';
import { UserContext } from './UserContext';

export const useSavedHomes = (isMarketable = true) => {
  const portalUser = useContext(UserContext);
  const [savedHomes, setSavedHomes] = useState<IHomesDetail | undefined>(undefined);

  const updateSavedHomes = useCallback(() => {
    void (async () => setSavedHomes(await portalUser?.getSavedHomes(isMarketable)))();
  }, [portalUser, isMarketable]);

  useEffect(() => {
    updateSavedHomes();

    window.addEventListener(AuthEvent.savedHomesChanged, updateSavedHomes);

    return () => window.removeEventListener(AuthEvent.savedHomesChanged, updateSavedHomes);
  }, [portalUser, updateSavedHomes]);

  return savedHomes;
};
