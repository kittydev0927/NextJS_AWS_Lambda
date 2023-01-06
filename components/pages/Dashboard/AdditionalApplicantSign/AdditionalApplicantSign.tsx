import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

import { theme } from '#styles/styles';

import {
  LeaseDescription,
  StyledButtonsDiv,
  StyledDiv,
  StyledLeaseDiv,
  StyledSignButton,
  StyledViewButton,
} from './AdditionalApplicantSign.styles';
import type { AdditionalApplicantSignProps } from './AdditionalApplicantSign.types';

export const AdditionalApplicantSign: React.FC<AdditionalApplicantSignProps> = ({ handleSigningLease }) => {
  const smallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <StyledDiv>
      <LeaseDescription>Your application is complete! Now it’s time to sign your lease</LeaseDescription>
      <StyledLeaseDiv />
      <StyledButtonsDiv>
        <StyledViewButton LinkComponent="a" href="/recommended">
          {smallBreakpoint ? 'View Cost Sheet' : 'View Itemized Cost Sheet'}
        </StyledViewButton>
        <StyledSignButton variant="primary" LinkComponent="a" href="/recommended" onClick={handleSigningLease}>
          Sign Lease
        </StyledSignButton>
      </StyledButtonsDiv>
    </StyledDiv>
  );
};
