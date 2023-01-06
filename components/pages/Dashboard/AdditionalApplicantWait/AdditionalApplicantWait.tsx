import { useMediaQuery } from '@mui/material';
import React from 'react';

import { Typography } from '#components/layouts/atoms/Typography/Typography';
import { theme } from '#styles/styles';

import {
  StyledCongTypography,
  StyledDiv,
  StyledEditButtons,
  StyledFaqsButton,
  StyledHomesButton,
  StyledHomesEditDiv,
  StyledSecurityDiv,
  StyledSecurityPrintDiv,
} from './AdditionalApplicantWait.styles';
import type { AdditionalApplicantWaitProps } from './AdditionalApplicantWait.types';

export const ApplicantWaitTitle = (prop: { smallBreakpoint: boolean }) => (
  <>
    {prop.smallBreakpoint ? (
      <span>
        Your portion of the application is complete, well done! It looks like we’re waiting for another person to finish
        their application. We’ll let you know when it’s time to sign the lease.
      </span>
    ) : (
      <>
        <span>Your portion of the application is complete, well done!</span>
        <p>
          It looks like we’re waiting for another person to finish their application. We’ll let you know when it’s time
          to sign the lease.
        </p>
      </>
    )}
  </>
);

export const AdditionalApplicantWait: React.FC<AdditionalApplicantWaitProps> = ({
  maxRent = 2000,
  handleReverseHome,
  date = '11.15.2021',
  name = 'Samantha Jones',
}) => {
  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  const monthlyAmount = currency.format(maxRent);
  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <StyledDiv data-testid="security-depsit" id="security-deposit">
      <StyledSecurityDiv>
        <StyledSecurityPrintDiv>
          <Typography variant="body1" className="title">
            <ApplicantWaitTitle smallBreakpoint={smallBreakpoint} />
          </Typography>
        </StyledSecurityPrintDiv>
        <StyledCongTypography>
          <span>{name} needs to:</span>
          <ul>
            <li>
              Confirm move-in date: <span>{date}</span>
            </li>
            <li>
              Pay the security deposit: <span>{monthlyAmount.replace('.00', '')}</span>
            </li>
          </ul>
        </StyledCongTypography>
      </StyledSecurityDiv>
      <StyledHomesEditDiv>
        <StyledEditButtons>
          <StyledFaqsButton variant="text" LinkComponent="a" href="/recommended">
            View Itemized Cost Sheet
          </StyledFaqsButton>
          <StyledHomesButton
            variant="primary"
            size="small"
            LinkComponent="a"
            href="/recommended"
            onClick={handleReverseHome}
          >
            Sign the Lease
          </StyledHomesButton>
        </StyledEditButtons>
      </StyledHomesEditDiv>
    </StyledDiv>
  );
};
