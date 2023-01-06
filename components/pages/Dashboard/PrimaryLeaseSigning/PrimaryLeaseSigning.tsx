import React from 'react';

import { Typography } from '#components/layouts/atoms/Typography/Typography';

import {
  LeaseDescription,
  LeaseTitle,
  StyledDiv,
  StyledEditButtons,
  StyledFaqsButton,
  StyledHomesButton,
  StyledHomesEditDiv,
  StyledLeaseDiv,
  StyledLeasePrintDiv,
  StyledSideTypography,
  StyledTotalPrice,
  StyledTotalSigning,
} from './PrimaryLeaseSigning.styles';
import type { PrimaryLeaseSigningProps } from './PrimaryLeaseSigning.types';

export const PrimaryLeaseSigning: React.FC<PrimaryLeaseSigningProps> = ({ maxRent = 3400, handleSigningLease }) => {
  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  const monthlyAmount = currency.format(maxRent);

  return (
    <StyledDiv data-testid="lease-depsit" id="lease-deposit">
      <StyledLeaseDiv>
        <StyledLeasePrintDiv>
          <LeaseTitle>
            <Typography variant="body1" className="title">
              Lease Signing
            </Typography>
          </LeaseTitle>
          <LeaseDescription>
            We’ve totaled everything up and determined your total move-in costs. Please take a second to review your
            itemized cost sheet and make sure everything looks accurate. If everything looks good, it’s time to sign
            your lease.
          </LeaseDescription>
        </StyledLeasePrintDiv>
        <StyledSideTypography>
          <StyledTotalSigning>
            total due at signing
            <StyledTotalPrice>{monthlyAmount}</StyledTotalPrice>
          </StyledTotalSigning>
          <StyledFaqsButton LinkComponent="a" href="/recommended">
            View Itemized Cost Sheet
          </StyledFaqsButton>
        </StyledSideTypography>
      </StyledLeaseDiv>
      <StyledHomesEditDiv>
        <StyledEditButtons>
          <StyledHomesButton variant="primary" LinkComponent="a" href="/recommended" onClick={handleSigningLease}>
            Sign your lease
          </StyledHomesButton>
        </StyledEditButtons>
      </StyledHomesEditDiv>
    </StyledDiv>
  );
};
