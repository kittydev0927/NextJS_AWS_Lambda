import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

import { SideBarButton } from '#components/forms/atoms/SideBarButton/SideBarButton';
import type { SideBarButtonProps } from '#components/forms/atoms/SideBarButton/SideBarButton.types';
import { FormProgress } from '#components/forms/molecules/FormProgress/FormProgress';
import { Typography } from '#components/layouts/atoms/Typography/Typography';
import { TipsSideBar } from '#components/layouts/molecules/TipsSideBar/TipsSideBar';
import { TipsSideBarMobile } from '#components/layouts/molecules/TipsSideBar/TipsSideBarMobile/TipsSideBarMobile';
import { NavButtons } from '#components/navigation/organisms/NavButtons/NavButtons';
import { theme } from '#styles/styles';
import { coApplicantSampleSteps, primaryApplicantSampleSteps } from '#utils/sampleFormData';

import {
  SmallProgressContainer,
  StyledBottomContainer,
  StyledButtonContainer,
  StyledButtonWrapper,
  StyledCenterContainer,
  StyledDescription,
  StyledMainContainer,
  StyledPageWrapperBackground,
  StyledPaper,
  StyledPaperContainer,
  StyledProgressContainer,
} from './ApplicationPageWrapper.styles';
import type { ApplicationPageWrapperProps } from './ApplicationPageWrapper.types';

export const ApplicationPageWrapper: React.FC<ApplicationPageWrapperProps> = ({
  children,
  innerTheme = 'gradient',
  isNextButtonDisabled,
  nextPage,
  prevPage,
  onSave,
  outerTheme,
  step = 1,
  tipsContent,
  textUnderButtons,
  description,
  primaryApplicant = true,
}) => {
  const router = useRouter();
  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
  const [height, setHeight] = useState<number>();
  const [tipsOpen, setTipsOpen] = useState(step === 1 ? true : false);
  const containerRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const buttonState: NonNullable<SideBarButtonProps['buttonState']> = smallBreakpoint ? 'closed' : 'mobile';

  useEffect(() => {
    setHeight(containerRef.current?.offsetHeight);
  }, []);

  useEffect(() => {
    let completedStep = localStorage.getItem('cpp_user_application_completed_step')
      ? Number(localStorage.getItem('cpp_user_application_completed_step'))
      : 0;
    if (completedStep < step) {
      localStorage.setItem('cpp_user_application_completed_step', step.toString());
      completedStep = step;
    }
  }, [step]);

  const moveToPage = async (href: string) => {
    await router.push(href);
  };

  return (
    <StyledPageWrapperBackground className="background-page-wrapper">
      {!tipsOpen && (
        <StyledButtonWrapper>
          <SideBarButton onClick={() => setTipsOpen(true)} buttonState={buttonState} />
        </StyledButtonWrapper>
      )}
      {!smallBreakpoint && (
        <SmallProgressContainer>
          <FormProgress
            steps={primaryApplicant ? primaryApplicantSampleSteps : coApplicantSampleSteps}
            currentStep={step}
            top={135}
            moveToPage={moveToPage}
          />
        </SmallProgressContainer>
      )}
      <StyledMainContainer>
        <StyledPaperContainer ref={containerRef}>
          <StyledPaper
            innerElevation={0}
            outerElevation={10}
            showOuterPaper
            innerSquare
            className="application-outer-paper"
            innerTheme={innerTheme}
            outerTheme={outerTheme}
          >
            {smallBreakpoint && (
              <StyledProgressContainer>
                <FormProgress
                  steps={primaryApplicant ? primaryApplicantSampleSteps : coApplicantSampleSteps}
                  currentStep={step}
                  top={135}
                  moveToPage={moveToPage}
                />
              </StyledProgressContainer>
            )}
            <StyledCenterContainer data-testid="applicant-page-wrapper" className="applicant-page-wrapper">
              {children}
              {(prevPage || nextPage) && (
                <StyledButtonContainer className="button-container">
                  <NavButtons
                    nextPage={nextPage}
                    onSave={onSave}
                    prevPage={prevPage}
                    isPreviousButtonHidden={!prevPage}
                    isNextButtonDisabled={isNextButtonDisabled}
                    contextType="application"
                    primaryApplicant={primaryApplicant}
                  />
                  {description && (
                    <StyledDescription>
                      <Typography variant="body1">{description}</Typography>
                    </StyledDescription>
                  )}
                </StyledButtonContainer>
              )}
              {textUnderButtons && (
                <StyledBottomContainer>
                  <Typography variant="body1">{textUnderButtons}</Typography>
                </StyledBottomContainer>
              )}
            </StyledCenterContainer>
            {smallBreakpoint && (
              <TipsSideBar
                containerProp={containerRef.current}
                containerHeight={height}
                open={tipsOpen}
                setOpen={setTipsOpen}
                customPlacement
              >
                {tipsContent}
              </TipsSideBar>
            )}
            {!smallBreakpoint && tipsOpen && (
              <TipsSideBarMobile setOpen={() => setTipsOpen(false)}>{tipsContent}</TipsSideBarMobile>
            )}
          </StyledPaper>
        </StyledPaperContainer>
      </StyledMainContainer>
    </StyledPageWrapperBackground>
  );
};
