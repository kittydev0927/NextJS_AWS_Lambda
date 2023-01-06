import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import { ACCESSIBLE_PAGES, BASE_URL } from '#constants/constants';

import type { PortalUser } from './PortalUser';

/**
 * This hook will automatically route an unauthenticated user to the login page
 */
export const useRouteUnauthenticated = (portalUser: PortalUser | undefined): boolean => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | undefined>(undefined);
  const [loaded, setLoaded] = useState<boolean>(false);
  const storybookEnv = process.env.STORYBOOK_OKTA_DOMAIN;

  const updateAuthenticated = useCallback(() => {
    void (async () => setAuthenticated(await portalUser?.isAuthenticated()))();
  }, [portalUser]);

  useEffect(() => {
    async function signOut() {
      await portalUser?.signOut();
    }

    if (storybookEnv && storybookEnv.length > 0) {
      setLoaded(true);
    }

    updateAuthenticated();

    if (router && authenticated !== undefined) {
      const q = router?.query?.q;
      const origin = router?.query?.origin;

      setLoaded(authenticated);

      if (authenticated) {
        if (q === 'logout') {
          void signOut();
        }

        if (!ACCESSIBLE_PAGES.includes(router.pathname)) {
          if (origin) {
            const origin = router.query.origin as string;
            void router.push(origin);
          } else {
            void router.push(BASE_URL);
          }
        }
      } else {
        void router.push(q === 'logout' ? '/login?q=logout' : '/login');
      }
    }
  }, [authenticated, portalUser, router, storybookEnv, updateAuthenticated]);

  return loaded;
};
