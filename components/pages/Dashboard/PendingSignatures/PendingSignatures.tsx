import React from 'react';

import { Typography } from '#components/layouts/atoms/Typography/Typography';

import { dataApplicants } from './constants';
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
  StyledLink,
  StyledSideTypography,
  StyledTotalPrice,
  StyledTotalSigning,
  StyledTypography,
} from './PendingSignatures.styles';
import type { PendingSignaturesProps } from './PendingSignatures.types';

export const PendingSignatures: React.FC<PendingSignaturesProps> = ({ maxRent = 3400, handlePayment }) => {
  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  const monthlyAmount = currency.format(maxRent);

  return (
    <StyledDiv data-testid="lease-depsit" id="lease-deposit">
      <StyledLeaseDiv>
        <StyledLeasePrintDiv>
          <LeaseTitle>
            <Typography variant="body1" className="title">
              <span>Lease Signing</span> <span>(Pending Signatures)</span>
            </Typography>
          </LeaseTitle>
          <LeaseDescription>
            It looks like there are still some signatures needed. Once all signatures are complete, we’ll let you know.
          </LeaseDescription>
          <StyledTypography>
            {dataApplicants.map(content => (
              <div className="applicant" key={content.id}>
                {content.status === 'Signed' ? (
                  <>
                    <div>
                      <b>{content.applicant}</b> -{' '}
                    </div>
                    <div>
                      {content.status} on {content.signedDate}
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <b>{content.applicant}</b> -{' '}
                    </div>
                    <div>
                      <span className="pending-status">{content.status}</span>{' '}
                      <StyledLink href="#" className="resend">
                        RESEND
                      </StyledLink>
                    </div>
                  </>
                )}
              </div>
            ))}
          </StyledTypography>
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
          <NoteDiv>
            Please note: All move-in costs must be paid at least 72 hours prior to the lease start date.
          </NoteDiv>
          <StyledHomesButton variant="contained" LinkComponent="a" href="/recommended" onClick={handlePayment} disabled>
            Pay Total Due
          </StyledHomesButton>
        </StyledEditButtons>
      </StyledHomesEditDiv>
    </StyledDiv>
  );
};
