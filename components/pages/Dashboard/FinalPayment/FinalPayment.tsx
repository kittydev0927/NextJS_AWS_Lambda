import React from 'react';

import { Typography } from '#components/layouts/atoms/Typography/Typography';

import {
  LeaseDescription,
  LeaseTitle,
  NoteDiv,
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
} from './FinalPayment.styles';
import type { FinalPaymentProps } from './FinalPayment.types';

export const FinalPayment: React.FC<FinalPaymentProps> = ({ maxRent = 3400, handlePayment }) => (
  <StyledDiv data-testid="lease-depsit" id="lease-deposit">
    <StyledLeaseDiv>
      <StyledLeasePrintDiv>
        <LeaseTitle>
          <Typography variant="body1" className="title">
            We&apos;re all set!
          </Typography>
        </LeaseTitle>
        <LeaseDescription>
          The lease has been signed. All that&apos;s left is for you to pay the move-in costs.
        </LeaseDescription>
      </StyledLeasePrintDiv>
      <StyledSideTypography>
        <StyledTotalSigning>
          total due
          <StyledTotalPrice>${maxRent.toFixed(2)}</StyledTotalPrice>
        </StyledTotalSigning>
        <StyledFaqsButton LinkComponent="a" href="/recommended">
          View Itemized Cost Sheet
        </StyledFaqsButton>
      </StyledSideTypography>
    </StyledLeaseDiv>
    <StyledHomesEditDiv>
      <StyledEditButtons>
        <NoteDiv>Please note: All move-in costs must be paid at least 72 hours prior to the lease start date.</NoteDiv>
        <StyledHomesButton variant="primary" LinkComponent="a" href="/recommended" onClick={handlePayment}>
          Pay&nbsp;${maxRent.toFixed(0)}
        </StyledHomesButton>
      </StyledEditButtons>
    </StyledHomesEditDiv>
  </StyledDiv>
);
