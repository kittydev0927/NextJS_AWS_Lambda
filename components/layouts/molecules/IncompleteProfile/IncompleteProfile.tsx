import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

import { useProfile } from '#auth/UseProfile';
import { Button } from '#components/forms/atoms/Button/Button';
import type { IncompleteProfileProps } from '#components/layouts/molecules/IncompleteProfile/IncompleteProfile.types';
import { CalculateProfileCompletion } from '#services/profile/CalculateProfileCompletion';
import { theme } from '#styles/styles';

import {
  StyledCircularProgress,
  StyledCompleteButtonContainer,
  StyledContentWrapper,
  StyledHeader,
  StyledIncompleteProfileWrapper,
  StyledMainText,
  StyledProgressContainer,
  StyledStepText,
  StyledVerticalLine,
} from './IncompleteProfile.styles';

export const IncompleteProfile: React.FC<IncompleteProfileProps> = () => {
  const mobileBreakpoint = useMediaQuery(theme.breakpoints.only('xs'));

  const smallCircle = 68;
  const largeCircle = 100;
  const circularProgressSize: number = mobileBreakpoint ? smallCircle : largeCircle;
  const profile = useProfile();
  const { completed, next: currentStep, nextPage } = CalculateProfileCompletion(profile);
  const totalSteps = completed.length;

  const router = useRouter();

  const handleRouting = async () => router.push(`/profile/${nextPage}`);
  if (!profile) return null;
  return (
    <StyledIncompleteProfileWrapper data-testid="incomplete-profile">
      <StyledProgressContainer>
        <StyledCircularProgress
          widthValue={circularProgressSize}
          currentStep={currentStep}
          thicknessValue={4}
          totalSteps={totalSteps}
        />
        <StyledStepText>
          {mobileBreakpoint && <StyledHeader>Your Profile</StyledHeader>}
          Step {currentStep} of {totalSteps} completed
        </StyledStepText>
      </StyledProgressContainer>
      {!mobileBreakpoint && <StyledVerticalLine data-testid="vertical-line" />}
      <StyledContentWrapper>
        {!mobileBreakpoint && <StyledHeader>Your Profile</StyledHeader>}
        <StyledMainText>Completing your profile helps us find you the home you’re dreaming of.</StyledMainText>
      </StyledContentWrapper>
      <StyledCompleteButtonContainer>
        <Button onClick={() => void handleRouting()} variant="primary" fullWidth>
          Complete Profile
        </Button>
      </StyledCompleteButtonContainer>
    </StyledIncompleteProfileWrapper>
  );
};
