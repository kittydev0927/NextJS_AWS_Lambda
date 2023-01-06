import React, { useContext, useEffect, useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';

import { UserContext } from '#auth/UserContext';
import { Button } from '#components/forms/atoms/Button/Button';

import type { IPlaidLinkProps } from './PlaidLink.types';

export const PlaidLink: React.FC<IPlaidLinkProps> = ({ linkText = 'Connect a bank account', onSuccess }) => {
  const portalUser = useContext(UserContext);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    async function loadToken() {
      if (portalUser) {
        setToken(await portalUser.createPlaidToken());
      }
    }

    void loadToken();
  }, [portalUser]);

  const { open, ready } = usePlaidLink({
    token,
    onSuccess: (public_token, metadata) => {
      // send public_token to server
      onSuccess?.(public_token, metadata);
    },
  });

  return (
    <Button data-testid="plaid-link" onClick={() => open()} disabled={!ready}>
      {linkText}
    </Button>
  );
};
