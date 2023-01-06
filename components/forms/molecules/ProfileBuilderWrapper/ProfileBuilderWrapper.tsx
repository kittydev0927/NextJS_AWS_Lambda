import { ThemeProvider, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { FormProgress } from '#components/forms/molecules/FormProgress/FormProgress';
import { Divider } from '#components/layouts/atoms/Divider/Divider';
import { Typography } from '#components/layouts/atoms/Typography/Typography';
import { PageOverlay } from '#components/layouts/molecules/PageOverlay/PageOverlay';
import { PageLayout } from '#components/layouts/organisms/PageLayout/PageLayout';
import { NavButtons } from '#components/navigation/organisms/NavButtons/NavButtons';
import centerImage from '#public/profile-builder-illo.png';
import { theme } from '#styles/styles';
import { sampleSteps } from '#utils/sampleFormData';

import {
  SmallProgressContainer,
  StyledDividerContainer,
  StyledDividerText,
  StyledImage,
  StyledInnerPaper,
  StyledLeftContainer,
  StyledMainContainer,
  StyledPaper,
  StyledPaperContainer,
  StyledProgressContainer,
} from './ProfileBuilderWrapper.styles';
import type { ProfileBuilderWrapperProps } from './ProfileBuilderWrapper.types';

export const ProfileBuilderWrapper: React.FC<ProfileBuilderWrapperProps> = ({
  children,
  illustration = centerImage,
  innerTheme = 'gradient',
  isNextButtonDisabled,
  isProfileCompleted = false,
  isShowIllustration = true,
  nextPage,
  onSave,
  outerTheme,
  prevPage,
  step = 1,
  steps = sampleSteps,
  ...props
}) => {
  const router = useRouter();
  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
  const mediumBreakpoint = useMediaQuery(theme.breakpoints.up('md'));
  const totalSteps = steps.length;
  const [currentStep, setCurrentStep] = useState<number>(1);

  useEffect(() => {
    let completedStep = localStorage.getItem('cpp_user_profile_completed_step')
      ? Number(localStorage.getItem('cpp_user_profile_completed_step'))
      : 0;
    if (completedStep < step) {
      // save current step
      localStorage.setItem('cpp_user_profile_completed_step', step.toString());
      completedStep = step;
    }
    setCurrentStep(completedStep);
  }, [step]);

  const moveToPage = async (href: string) => {
    await router.push(href);
  };
  return (
    <PageLayout data-testid="profile-builder-wrapper" {...props}>
      <PageOverlay>
        {!smallBreakpoint && (
          <SmallProgressContainer>
            <FormProgress steps={steps} currentStep={currentStep} top={135} moveToPage={moveToPage} />
          </SmallProgressContainer>
        )}
        <StyledPaperContainer className="pb-paper-container">
          <StyledPaper
            innerElevation={0}
            outerElevation={10}
            showOuterPaper
            innerSquare
            className="outer-paper"
            innerTheme={smallBreakpoint ? innerTheme : 'plain'}
            outerTheme={outerTheme}
          >
            <ThemeProvider theme={theme}>
              <StyledInnerPaper>
                <StyledDividerContainer>
                  <StyledDividerText>
                    <Typography variant="h6">Profile Builder</Typography>
                    <Typography variant="body1">
                      {step > totalSteps ? 'Steps Complete' : `Step ${step} of ${totalSteps}`}
                    </Typography>
                  </StyledDividerText>
                  <Divider />
                </StyledDividerContainer>
                {smallBreakpoint && (
                  <StyledProgressContainer>
                    <FormProgress steps={steps} currentStep={currentStep} top={135} moveToPage={moveToPage} />
                  </StyledProgressContainer>
                )}
                {mediumBreakpoint && isShowIllustration && (
                  <StyledLeftContainer>
                    <StyledImage className="profile-builder-illustration">
                      <Image src={illustration} alt="" width={360} height={350} />
                    </StyledImage>
                  </StyledLeftContainer>
                )}
                <StyledMainContainer isShowIllustration={isShowIllustration} isProfileCompleted={isProfileCompleted}>
                  {children}

                  {(prevPage || nextPage) && (
                    <NavButtons
                      nextPage={nextPage}
                      onSave={onSave}
                      prevPage={prevPage}
                      isPreviousButtonHidden={!prevPage}
                      isNextButtonDisabled={isNextButtonDisabled}
                      contextType="profile"
                    />
                  )}
                </StyledMainContainer>
              </StyledInnerPaper>
            </ThemeProvider>
          </StyledPaper>
        </StyledPaperContainer>
      </PageOverlay>
    </PageLayout>
  );
};
