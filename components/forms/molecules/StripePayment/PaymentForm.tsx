import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

import { StyledForm, StyledSubmitButton } from './PaymentForm.styles';
import type { IPaymentFormProps } from './StripePayment.types';

export const PaymentForm: React.FC<IPaymentFormProps> = ({ amount, returnUrl }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    void (async () => {
      const { error } = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        confirmParams: {
          return_url: returnUrl,
        },
      });

      if (error) {
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Show error to customer (for example, payment
        // details incomplete)
        setErrorMessage(error.message);
      } else {
        // The customer will be redirected to the `return_url`. For some payment
        // methods like iDEAL, the customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
    })();
  };

  return (
    <StyledForm data-testid="stripe-payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <StyledSubmitButton disabled={!stripe || !elements} variant="primary" id="submit">
        Pay ${amount}
      </StyledSubmitButton>
      {errorMessage && <div id="payment-message">{errorMessage}</div>}
    </StyledForm>
  );
};
