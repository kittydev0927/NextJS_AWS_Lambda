import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { ApplicationPageWrapper } from '#components/forms/molecules/ApplicationPageWrapper/ApplicationPageWrapper';
import { StripePayment } from '#components/forms/molecules/StripePayment/StripePayment';
import { TipsInnerContent } from '#components/layouts/molecules/TipsSideBar/InnerContent/TipsInnerContent';
import { PageLayoutApplication } from '#components/layouts/organisms/PageLayoutApplication/PageLayoutApplication';
import CreditCardIcon from '#public/bi-credit-card-2-back-1.svg';
import CheckingAccountIcon from '#public/bi-credit-card-2-back-2.svg';
import { theme } from '#styles/styles';

import {
  StyledBoxContainer,
  StyledBoxText,
  StyledButton,
  StyledButtonContainer,
  StyledContainer,
  StyledFeeContainer,
  StyledFeeDetails,
  StyledFeeText,
  StyledHeaderText,
  StyledScrollBox,
} from './Payment.styles';
import type { PaymentProps } from './Payment.types';

// Added default values to properties for NextJS testing
export const Payment: React.FC<PaymentProps> = ({ applicants = 4, total = 200, pageData }) => {
  const appTips = pageData.cPPApplicationTipsList.items[0];
  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
  const [returnUrl, setReturnUrl] = useState('');
  useEffect(() => {
    const href = window.location.href.slice(0, window.location.href.indexOf('/application'));
    setReturnUrl(`${href}/application/application-status`);
  }, []);

  const [cardSelected, setCardSelected] = useState(false);
  const [achcSelected, setAchcSelected] = useState(false);

  function handleMethodReset() {
    setCardSelected(false);
    setAchcSelected(false);
  }

  return (
    <PageLayoutApplication infoText="2022. All Rights Reserved Progress Residential ®">
      <ApplicationPageWrapper
        step={10}
        innerTheme={smallBreakpoint ? 'gradient' : 'plain'}
        outerTheme="plain"
        tipsContent={<TipsInnerContent appTips={appTips} />}
      >
        <StyledContainer data-testid="payment-page">
          <StyledHeaderText>Acknowledgements & Payment</StyledHeaderText>
          <StyledScrollBox>
            <StyledBoxContainer>
              <StyledBoxText>
                <span>$50 Application Fee per applicant</span>
                <div />
                An application fee is required for each adult (18 years and older) member of the household. Application
                fees will not be collected for children. The Application fee is non-refundable.
              </StyledBoxText>
              <StyledBoxText>
                <span>$35 Convenience Fee </span>(if applicable)
                <div />
                We accept a payment of these fees through Credit Cards, Debit Cards, and ACH bank transfers. A $35
                convenience fee will be applied to payments made with credit card or debit cards. Payments made by ACH
                bank transfer do not require any additional fees.
              </StyledBoxText>
              <StyledBoxText>
                <span>$100 Application Change Fee </span>(if applicable)
                <div />
                Before you submit your applications, please make sure the information you provided is accurate and
                complete. Any changes to the application after submission, including changes to your move-in date or
                adding residents or pets, will require…
              </StyledBoxText>
            </StyledBoxContainer>
          </StyledScrollBox>
          <StyledFeeContainer>
            <StyledFeeDetails>
              <span>$50</span> Application Fee for each of the {applicants} applicants.
            </StyledFeeDetails>
            <StyledFeeText>${total} total</StyledFeeText>
          </StyledFeeContainer>
          {!cardSelected && !achcSelected ? (
            <StyledButtonContainer>
              <StyledButton variant="primary" data-testid="achc-button" onClick={() => setAchcSelected(true)}>
                <Image src={CheckingAccountIcon as string} width={28} height={15} alt="" /> Checking Account
              </StyledButton>
              <StyledButton variant="primary" data-testid="card-button" onClick={() => setCardSelected(true)}>
                <Image src={CreditCardIcon as string} width={22} height={17} alt="" /> Credit Card
              </StyledButton>
            </StyledButtonContainer>
          ) : (
            <StripePayment
              amount={total}
              paymentMethodTypes={cardSelected ? ['card'] : ['us_bank_account']}
              returnUrl={returnUrl}
              reset={handleMethodReset}
            />
          )}
        </StyledContainer>
      </ApplicationPageWrapper>
    </PageLayoutApplication>
  );
};
