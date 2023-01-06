import type { Appearance } from '@stripe/stripe-js';

export interface IStripePaymentProps {
  amount: number;
  theme?: Appearance['theme'];
  variables?: Appearance['variables'];
  rules?: Appearance['rules'];
  returnUrl: string;
  paymentMethodTypes?: string[];
  reset?: () => void;
}

export interface IPaymentFormProps {
  returnUrl: string;
  amount: number;
}
