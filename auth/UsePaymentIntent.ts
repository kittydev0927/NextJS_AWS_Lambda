import { useCallback, useContext, useEffect, useState } from 'react';

import type { IPaymentIntentResponse } from './IPaymentIntentResponse';
import { UserContext } from './UserContext';

export const usePaymentIntent = (amount: number, paymentMethodTypes: string[]) => {
  const portalUser = useContext(UserContext);
  const [intent, setIntent] = useState<IPaymentIntentResponse | undefined>(undefined);

  const updateIntent = useCallback(() => {
    void (async () => setIntent((await portalUser?.createPaymentIntent(amount, paymentMethodTypes)) || undefined))();
  }, [portalUser, amount, paymentMethodTypes]);

  useEffect(() => {
    updateIntent();
  }, [portalUser, updateIntent]);

  return intent;
};
