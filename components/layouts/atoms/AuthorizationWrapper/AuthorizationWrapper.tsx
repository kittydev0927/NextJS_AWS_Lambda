import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export const AuthorizationWrapper: React.FC = ({ children }) => {
  const [showComponent, setShowComponent] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const oktaToken = localStorage.getItem('okta-token-storage');
    if (oktaToken === undefined || oktaToken === null) {
      void router.push('/');
    } else {
      setShowComponent(true);
    }
  }, [router, setShowComponent]);
  return <>{showComponent && children}</>;
};
