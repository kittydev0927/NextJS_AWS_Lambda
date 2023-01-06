import { useMediaQuery } from '@mui/material';
import React from 'react';

import { CircularProgress } from '#components/forms/atoms/CircularProgress/CircularProgress';
import { Stepper } from '#components/forms/atoms/Stepper/Stepper';
import { theme } from '#styles/styles';

import { StyledFormProgress } from './FormProgress.styles';
import type { FormProgressProps } from './FormProgress.types';

export const FormProgress: React.FC<FormProgressProps> = ({ currentStep = 1, steps, onClick, top, ...props }) => {
  const breakpoint = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <StyledFormProgress>
      {breakpoint && (
        <CircularProgress
          currentStep={steps && currentStep - 1 > steps.length ? steps.length : currentStep - 1}
          totalSteps={steps.length}
          {...props}
        />
      )}
      <Stepper currentStep={currentStep} onClick={onClick} steps={steps} top={top} {...props} />
    </StyledFormProgress>
  );
};
