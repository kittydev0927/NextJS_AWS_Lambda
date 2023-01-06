import * as React from 'react';

import { Typography } from '#components/layouts/atoms/Typography/Typography';
import { findPercentage } from '#utils/helperFunctions';

import {
  StyledBox,
  StyledMuiBox,
  StyledMuiCircularProgress,
  StyledMuiCircularProgressBase,
} from './CircularProgress.styles';
import type { CircularProgressProps } from './CircularProgress.types';

export const CircularProgress: React.FC<CircularProgressProps> = ({
  currentStep = 0,
  totalSteps = 1,
  widthValue = 100,
  thicknessValue = 4,
  ...props
}) => {
  const stepPercentage = findPercentage(currentStep, totalSteps);

  return (
    <StyledMuiBox data-testid="circular-progress">
      <StyledMuiCircularProgress
        variant="determinate"
        data-testid="percentage-progress-tracker"
        size={widthValue}
        thickness={thicknessValue}
        {...props}
        value={stepPercentage}
        aria-hidden="true"
      />
      <StyledBox className="percentage-tracker-base">
        <StyledMuiCircularProgressBase
          data-testid="percentage-progress-tracker-base"
          variant="determinate"
          size={widthValue}
          thickness={thicknessValue}
          {...props}
          value={100}
          aria-hidden="true"
        />
      </StyledBox>
      <StyledBox className="circular-progress-text">
        <Typography
          component="div"
          data-testid="percentage"
          id="circular-progress-text"
        >{`${stepPercentage}%`}</Typography>
      </StyledBox>
    </StyledMuiBox>
  );
};
