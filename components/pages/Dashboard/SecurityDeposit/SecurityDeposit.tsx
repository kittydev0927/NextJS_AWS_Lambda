import { useMediaQuery } from '@mui/material';
import React from 'react';

import { Typography } from '#components/layouts/atoms/Typography/Typography';
import { theme } from '#styles/styles';

import {
  StyledCongTypography,
  StyledDescriptionDiv,
  StyledDiv,
  StyledEditButtons,
  StyledFaqsButton,
  StyledHomesButton,
  StyledHomesEditDiv,
  StyledSecurityDiv,
  StyledSecurityPrintDiv,
} from './SecurityDeposit.styles';
import type { SecurityDepositProps } from './SecurityDeposit.types';

export const SecurityTitle = (security: { isBig: boolean; monthlyAmount: string }) => (
  <>
    Your security deposit is:
    <span>
      {security.monthlyAmount} {security.isBig ? '*' : ''}
    </span>
  </>
);

export const SecurityDescription = (security: { isBig: boolean }) => (
  <>
    {security.isBig
      ? 'Once the deposit has been paid, we’ll remove the home from the market so no one else can apply for it.'
      : 'Once your deposit is paid, the house will officially be off the market!'}
  </>
);

export const SecurityDeposit: React.FC<SecurityDepositProps> = ({ maxRent, handleReverseHome }) => {
  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  const monthlyAmount = currency.format(maxRent);
  const isBig = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <StyledDiv data-testid="security-depsit" id="security-deposit">
      <StyledSecurityDiv>
        <StyledSecurityPrintDiv>
          <Typography variant="h1" className="title">
            <SecurityTitle isBig={isBig} monthlyAmount={monthlyAmount} />
          </Typography>
        </StyledSecurityPrintDiv>
        <StyledCongTypography>
          <SecurityDescription isBig={isBig} />
        </StyledCongTypography>
      </StyledSecurityDiv>
      <StyledHomesEditDiv>
        <StyledDescriptionDiv>
          * Deposit is refundable after move-out, based on return condition of the home and reconciliation of financial
          account. Funds are returned in a timely manner based on state and local laws.
        </StyledDescriptionDiv>
        <StyledEditButtons>
          <StyledFaqsButton href="https://rentprogress.com/faq/#-1617847814" target="_blank">
            Security Desposit FAQs
          </StyledFaqsButton>
          <StyledHomesButton variant="primary" LinkComponent="a" href="/recommended" onClick={handleReverseHome}>
            Reserve This Home
          </StyledHomesButton>
        </StyledEditButtons>
      </StyledHomesEditDiv>
    </StyledDiv>
  );
};
