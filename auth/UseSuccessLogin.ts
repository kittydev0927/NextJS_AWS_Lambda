import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect, useState } from 'react';

import { UserContext } from '#auth/UserContext';

/**
 * This hook will return success login function, that will execute any passed callback
 * and send `PUT /saved-home` request after login, if there was a `propertyId` query parameter provided
 * @param onSuccess
 * @returns function that should be called after successful login
 */
export const useSuccessLogin = (onSuccess: (() => unknown) | undefined) => {
  const router = useRouter();
  const portalUser = useContext(UserContext);
  const [propertyId, setPropertyId] = useState<string | undefined>();
  const [origin, setOrigin] = useState<string | undefined>();

  const handleSuccess = useCallback(async () => {
    const redirectUrl = origin ? `/dashboard?origin=${origin}` : '/dashboard';
    const successCallback = onSuccess ?? (async () => router.push(redirectUrl));
    const promises: LoginSuccessCallback[] = [successCallback?.()];

    if (propertyId !== undefined) {
      promises.push(portalUser?.addSavedHomes(propertyId));
    }

    await Promise.allSettled(promises);
  }, [onSuccess, origin, portalUser, propertyId, router]);

  useEffect(() => {
    if (isPropertyId(router.query.propertyId)) {
      setPropertyId(router.query.propertyId);
    }

    if (isOrigin(router.query.origin)) {
      setOrigin(router.query.origin);
    }
  }, [router]);

  return handleSuccess;
};

type LoginSuccessCallback = unknown | Promise<void> | undefined;

function isPropertyId(propertyId: unknown): propertyId is string {
  return propertyId !== undefined && typeof propertyId === 'string';
}

function isOrigin(origin: unknown): origin is string {
  return origin !== undefined && typeof origin === 'string';
}
