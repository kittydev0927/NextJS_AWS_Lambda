import { LinearProgress } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';

import { usePaymentIntent } from '#auth/UsePaymentIntent';
import { Link } from '#components/layouts/atoms/Link/Link';
import { theme as defaultTheme } from '#styles/styles';

import { PaymentForm } from './PaymentForm';
import {
  StyledAcknowledgementContainer,
  StyledAcknowledgementText,
  StyledNavTypography,
  StyledStripeContainer,
  StyledTitle,
} from './StripePayment.styles';
import type { IStripePaymentProps } from './StripePayment.types';

const stripeApiKey = process.env.NEXT_PUBLIC_STRIPE_KEY || process.env.STORYBOOK_STRIPE_KEY || '';

const stripePromise = loadStripe(stripeApiKey);

export const StripePayment: React.FC<IStripePaymentProps> = ({
  amount,
  paymentMethodTypes = ['card'],
  theme = 'flat' as const,
  variables = {
    colorPrimary: defaultTheme.colors.jade,
  },
  rules = {},
  returnUrl,
  reset,
}) => {
  const intent = usePaymentIntent(amount, paymentMethodTypes);

  const [loading, setIsLoading] = useState(true);
  const [secret, setSecret] = useState<string | undefined>();
  useEffect(() => {
    async function loadSecret() {
      if (intent) {
        const { clientSecret } = intent;
        setSecret(clientSecret);
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }
    }
    void loadSecret();
  }, [intent]);

  const options = {
    clientSecret: secret,
    appearance: {
      theme,
      variables,
      rules,
    },
  };

  return (
    <StyledStripeContainer>
      <Link color="primary" underline="none" variant="body1">
        <StyledNavTypography onClick={reset} data-testid="return-button">
          &#60; Return to payment choices
        </StyledNavTypography>
      </Link>
      <StyledTitle data-testid="title">
        {paymentMethodTypes[0] === 'card' ? 'Credit Card' : 'Checking Account'}
      </StyledTitle>
      {loading ? (
        <LinearProgress data-testid="loading" />
      ) : (
        <>
          <Elements data-testid="stripe-payment-element" stripe={stripePromise} options={options}>
            <PaymentForm returnUrl={returnUrl} amount={amount} />
          </Elements>
          <StyledAcknowledgementContainer>
            <StyledAcknowledgementText>
              By proceeding you acknowledge the Applications fees associated with this application are not refundable.
            </StyledAcknowledgementText>

            <StyledAcknowledgementText>
              This application does not guarantee or reserve the home. Other applicants may be applying for the same
              home. First to get approved and pay deposits secures the home.
            </StyledAcknowledgementText>

            <StyledAcknowledgementText>
              Any incomplete or inaccurate information in the application may result in cancellation of your
              application, expiration of specials and pricing, and forfeiture of monies paid.
            </StyledAcknowledgementText>
          </StyledAcknowledgementContainer>
        </>
      )}
    </StyledStripeContainer>
  );
};
