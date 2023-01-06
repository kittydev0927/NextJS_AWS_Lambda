import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import { PageLayoutApplication } from '#components/layouts/organisms/PageLayoutApplication/PageLayoutApplication';
import DocumentsIcon from '#public/documents-icon.svg';
import StepIcon from '#public/step-icon.svg';
import StopwatchIcon from '#public/stopwatch-icon.svg';
import { theme } from '#styles/styles';

import {
  StyledAcceptanceText,
  StyledBoldFee,
  StyledButtonContainer,
  StyledContent,
  StyledDetailedHeading,
  StyledDetailedText,
  StyledDivider,
  StyledDividerBottom,
  StyledDocumentsImage,
  StyledExpecationsCon,
  StyledExpectations,
  StyledHeading,
  StyledList,
  StyledPaper,
  StyledSolidBackground,
  StyledStepImage,
  StyledStopwatchImage,
  StyledTypography,
} from './AppWhatToExpect.styles';
import type { IAppWhatToExpect } from './AppWhatToExpect.types';
import { ContinueButton } from './ContinueButton';
import { CurrentProperty } from './CurrentProperty';

export const AppWhatToExpect: React.FC<Partial<IAppWhatToExpect>> = ({ testProperty, ...props }) => {
  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <PageLayoutApplication infoText={'2022. All Rights Reserved Progress Residential ®'} {...props}>
      <StyledSolidBackground className="styled-solid-bg">
        <StyledPaper
          showOuterPaper
          innerTheme={smallBreakpoint ? 'gradient' : 'plain'}
          innerElevation={0}
          outerElevation={25}
        >
          <StyledContent>
            <CurrentProperty testProperty={testProperty} />
            {smallBreakpoint && (
              <StyledDivider data-testid="divider-first">
                <span>What to Expect</span>
              </StyledDivider>
            )}
            {!smallBreakpoint && <StyledHeading>What to Expect:</StyledHeading>}
            <StyledExpecationsCon>
              <StyledExpectations>
                <StyledStepImage>
                  <Image src={StepIcon as string} width={54} height={51} alt="" />
                </StyledStepImage>
                <StyledTypography>Required Information</StyledTypography>
              </StyledExpectations>
              <StyledExpectations>
                <StyledDocumentsImage>
                  <Image src={DocumentsIcon as string} width={54} height={65} alt="" />
                </StyledDocumentsImage>
                <StyledTypography>Required Documents</StyledTypography>
              </StyledExpectations>
              <StyledExpectations>
                <StyledStopwatchImage>
                  <Image src={StopwatchIcon as string} width={55} height={66} alt="" />
                </StyledStopwatchImage>
                <StyledTypography>15 Minutes to Complete</StyledTypography>
              </StyledExpectations>
            </StyledExpecationsCon>
            <StyledButtonContainer>
              <ContinueButton />
            </StyledButtonContainer>
            <StyledAcceptanceText>
              By clicking continue you are accepting that this application utilizes the following third party
              applications: Plaid, Persona, and Stripe.
            </StyledAcceptanceText>
            <StyledDividerBottom />
            <StyledDetailedHeading>Fees:</StyledDetailedHeading>
            <StyledList>
              <li>
                <StyledDetailedText>
                  <StyledBoldFee>• Application Fee $35 per Applicant</StyledBoldFee> with application submission (plus
                  state tax, where applicable)
                </StyledDetailedText>
              </li>
              <li>
                <StyledDetailedText>
                  <StyledBoldFee>• Security Deposit 1-3x rent</StyledBoldFee>, based on variables, including but not
                  limited to, background screening results and income paid after approval in order to take the home off
                  the market.
                </StyledDetailedText>
              </li>
              <li>
                <StyledDetailedText>
                  <StyledBoldFee>• Non-Refundable Admin Fee $150</StyledBoldFee> paid at least days prior to move-in
                  along with move-in funds (plus state tax, where applicable)
                </StyledDetailedText>
              </li>
            </StyledList>
            <StyledDetailedHeading>Background Screening:</StyledDetailedHeading>
            <StyledDetailedText>
              A background screening will be completed on all applicants to verify creditworthiness. Progress
              Residential® uses Persona to establish a rental score for each applicant. The rental score is determined
              from an analysis of information found in each applicant&apos;s consumer credit report, application and
              previous rental history. The consumer credit report may include payment history, bankruptcies, number and
              type of accounts, collection activity, outstanding debt and credit inquiries. As a result of this process,
              we do not have a minimum credit score requirement. Credit scores are just one part of your application, so
              low scores and blemishes on your credit report are not necessarily automatic disqualifiers.
            </StyledDetailedText>
          </StyledContent>
        </StyledPaper>
      </StyledSolidBackground>
    </PageLayoutApplication>
  );
};
