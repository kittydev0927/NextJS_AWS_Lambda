import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

import { Button } from '#components/forms/atoms/Button/Button';
import type { IIncompleteApplicationProps } from '#components/layouts/molecules/IncompleteApplication/IncompleteApplication.types';
import { stepperConfig as stepper } from '#constants/stepperConfig';
import { CalculateApplicationCompletion } from '#services/application/CalculateApplicationCompletion';
import { theme } from '#styles/styles';

import {
  StyledCircularProgress,
  StyledCompleteButtonContainer,
  StyledContentContainer,
  StyledHeader,
  StyledMainText,
  StyledProgressContainer,
  StyledProgressWrapper,
  StyledStepText,
  StyledVerticalLine,
} from './IncompleteApplication.styles';

export const IncompleteApplication: React.FC<IIncompleteApplicationProps> = ({
  application,
  children,
  buttonLabel = 'Continue My Application',
  buttonLabelCompleted = 'Application Complete!',
  header,
  profile,
  text,
  thicknessValue = stepper.defaultThickness,
  widthValue,
}) => {
  const mobileBreakpoint = useMediaQuery(theme.breakpoints.only('xs'));
  const smallCircle = stepper.smallCircle;
  const largeCircle = stepper.largeCircle;

  if (!widthValue) widthValue = mobileBreakpoint ? smallCircle : largeCircle;

  const { next: currentStep = 0, nextPage, totalSteps = 0 } = CalculateApplicationCompletion({ application, profile });
  const currentStepInternal = currentStep > totalSteps || currentStep === -1 ? totalSteps : currentStep;
  const isCompleted = currentStepInternal === totalSteps;

  const router = useRouter();
  const handleRouting = async () => router.push(`/application/${nextPage}`);

  return (
    <StyledProgressWrapper>
      <StyledProgressContainer>
        <StyledCircularProgress
          widthValue={widthValue}
          currentStep={currentStepInternal}
          thicknessValue={thicknessValue}
          totalSteps={totalSteps}
        />
        <StyledStepText>
          {mobileBreakpoint && <StyledHeader>Your Application</StyledHeader>}
          Step {currentStepInternal} of {totalSteps} completed
        </StyledStepText>
      </StyledProgressContainer>
      {!mobileBreakpoint && <StyledVerticalLine />}
      <StyledContentContainer>
        {header && !mobileBreakpoint && <StyledHeader>{header}</StyledHeader>}
        {text && <StyledMainText>{text}</StyledMainText>}
        {children}
      </StyledContentContainer>
      <StyledCompleteButtonContainer>
        <Button onClick={() => void handleRouting()} variant="primary" fullWidth disabled={isCompleted}>
          {!isCompleted ? buttonLabel : buttonLabelCompleted}
        </Button>
      </StyledCompleteButtonContainer>
    </StyledProgressWrapper>
  );
};
