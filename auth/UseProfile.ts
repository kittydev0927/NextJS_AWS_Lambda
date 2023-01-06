import { useContext, useEffect, useState } from 'react';

import { AuthEvent } from './AuthEvent';
import type { IProfile } from './IProfile';
import { UserContext } from './UserContext';

export const useProfile = () => {
  const portalUser = useContext(UserContext);
  const [profile, setProfile] = useState<IProfile | undefined>(undefined);

  useEffect(() => {
    void (async () => {
      setProfile(await portalUser?.getProfile());
    })();

    const handleProfileChange: EventListener = e => {
      if (e instanceof CustomEvent) {
        setProfile(e.detail as IProfile);
      }
    };

    window.addEventListener(AuthEvent.profileChanged, handleProfileChange);

    return () => window.removeEventListener(AuthEvent.profileChanged, handleProfileChange);
  }, [portalUser]);

  return profile;
};
