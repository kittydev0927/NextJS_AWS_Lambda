import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect, useState } from 'react';

import { UserContext } from '#auth/UserContext';

/**
 * This hook will return success registration function, that will execute any passed callback
 * and send `PUT /saved-home` request after registration, if there was a `propertyId` query parameter provided
 * @param onSuccess
 * @returns function that should be called after successful registration
 */
export const useSuccessRegistration = (onSuccess: (() => unknown) | undefined) => {
  const router = useRouter();
  const portalUser = useContext(UserContext);
  const [propertyId, setPropertyId] = useState<string | undefined>();
  const [origin, setOrigin] = useState<string | undefined>();
  const [q, setQ] = useState<string | undefined>();

  const handleSuccess = useCallback(async () => {
    const baseUrl = propertyId ?? origin ?? q ? '/dashboard?' : '/dashboard';
    const propertyString = propertyId ? `propertyId=${propertyId}` : '';
    const originAmp = propertyId ? '&' : '';
    const originString = origin ? `${originAmp}origin=${origin}` : '';
    const qAmp = propertyId ?? origin ? '&' : '';
    const qString = q ? `${qAmp}q=${q}` : '';
    const redirectUrl = `${baseUrl}${propertyString}${originString}${qString}`;

    const successCallback = onSuccess ?? (async () => router.push(redirectUrl));
    const promises: RegistrationSuccessCallback[] = [successCallback?.()];

    if (propertyId !== undefined) {
      promises.push(portalUser?.addSavedHomes(propertyId));
    }

    if (q === 'logout') {
      Cookies.remove('okta-token-storage');
    }

    await Promise.allSettled(promises);
  }, [onSuccess, origin, portalUser, propertyId, q, router]);

  useEffect(() => {
    setPropertyId(router?.query?.propertyId as string);
    setOrigin(router?.query?.origin as string);
    setQ(router?.query?.q as string);
  }, [router]);

  return handleSuccess;
};

type RegistrationSuccessCallback = unknown | Promise<void> | undefined;
