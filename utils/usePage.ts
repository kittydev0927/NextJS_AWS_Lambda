import { useRouter } from 'next/router';
import { useCallback } from 'react';

export const usePage = () => {
  const router = useRouter();

  const prevPage = useCallback(
    async route => {
      void router.push(route as URL);
    },
    [router],
  );
  const nextPage = useCallback(
    async route => {
      void router.push(route as URL);
    },
    [router],
  );

  return { nextPage, prevPage };
};
