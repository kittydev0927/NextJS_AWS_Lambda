import React from 'react';

import { Typography } from '#components/layouts/atoms/Typography/Typography';

import {
  LeaseDescription,
  LeaseTitle,
  StyledContactButton,
  StyledDiv,
  StyledHomesButton,
  StyledLeaseDiv,
  StyledLeasePrintDiv,
  StyledSideTypography,
  StyledVideoButton,
} from './CongratulationsComponent.styles';
import type { CongratulationsComponentProps } from './CongratulationsComponent.types';

export const CongratulationsComponent: React.FC<CongratulationsComponentProps> = ({ handleOrientationVideo }) => {
  return (
    <StyledDiv component="div" data-testid="lease-depsit" id="lease-deposit">
      <StyledLeaseDiv component="div">
        <StyledLeasePrintDiv component="div">
          <LeaseTitle component="div">
            <Typography variant="h1" className="title">
              Congratulations!
            </Typography>
          </LeaseTitle>
          <LeaseDescription component="div">
            Congratulations—on your new home! Watch our orientation video for valuable information. If you have any
            questions please contact our Onboarding Team.
          </LeaseDescription>
        </StyledLeasePrintDiv>
        <StyledSideTypography>
          <StyledVideoButton component="div">
            <StyledHomesButton
              variant="contained"
              LinkComponent="a"
              href="/recommended"
              onClick={handleOrientationVideo}
            >
              View Orientation Video
            </StyledHomesButton>
          </StyledVideoButton>
          <StyledContactButton LinkComponent="a" href="/recommended">
            Contact Onboarding Team
          </StyledContactButton>
        </StyledSideTypography>
      </StyledLeaseDiv>
    </StyledDiv>
  );
};
