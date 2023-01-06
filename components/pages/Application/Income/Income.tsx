import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';

import { ApplicantSummaryBox } from '#components/forms/molecules/ApplicantSummaryBox/ApplicantSummaryBox';
import { ApplicationPageWrapper } from '#components/forms/molecules/ApplicationPageWrapper/ApplicationPageWrapper';
import { TipsInnerContent } from '#components/layouts/molecules/TipsSideBar/InnerContent/TipsInnerContent';
import { PageLayoutApplication } from '#components/layouts/organisms/PageLayoutApplication/PageLayoutApplication';
import { InviteApplicantsModal } from '#components/navigation/organisms/InviteApplicantsModal/InviteApplicantsModal';
import { theme } from '#styles/styles';

import { COMPLETE_APPLICANTS } from './constants';
import {
  StyledApplicantContainer,
  StyledApplicantsContainer,
  StyledContainer,
  StyledHeaderContainer,
  StyledHeaderText,
  StyledLink,
  StyledSubText,
  StyledSubtextContainer,
} from './Income.styles';
import type { IncomeProps } from './Income.types';

export const Income: React.FC<IncomeProps> = ({ applicants = COMPLETE_APPLICANTS, pageData }) => {
  const appTips = pageData.cPPApplicationTipsList.items[0];
  const pageContent = pageData.incomeContent.items[0];

  const [showModal, setShowModal] = useState(false);

  function isValid() {
    const stats = applicants.filter(applicant => applicant.state !== 'complete');
    if (!stats.length) {
      return true;
    }

    return false;
  }

  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));

  const router = useRouter();
  const prevPage = useCallback(async () => {
    void router.push('/application/additional-information');
  }, [router]);
  const nextPage = useCallback(async () => {
    void router.push('/application/payment');
  }, [router]);

  function handleClickClose() {
    setShowModal(false);
  }

  return (
    <PageLayoutApplication infoText="2022. All Rights Reserved Progress Residential ®">
      <ApplicationPageWrapper
        prevPage={prevPage}
        nextPage={nextPage}
        step={9}
        innerTheme={smallBreakpoint ? 'gradient' : 'plain'}
        outerTheme="plain"
        tipsContent={<TipsInnerContent appTips={appTips} />}
        isNextButtonDisabled={!isValid()}
      >
        <StyledContainer data-testid="income-page">
          <StyledHeaderContainer>
            <StyledHeaderText>Applicants</StyledHeaderText>
          </StyledHeaderContainer>
          <StyledSubtextContainer>
            <StyledSubText>
              All individual applications must be complete before the full application can be submitted.
            </StyledSubText>
          </StyledSubtextContainer>
          <StyledApplicantsContainer>
            {applicants.map((applicant, index) => (
              <StyledApplicantContainer key={index}>
                <ApplicantSummaryBox applicant={applicant} />
              </StyledApplicantContainer>
            ))}
          </StyledApplicantsContainer>
          <div onClick={() => setShowModal(true)} data-testid="invite-applicants-link">
            <StyledLink color="primary" showArrow fullWidth alignArrow="end">
              Invite Additional Applicant
            </StyledLink>
          </div>
        </StyledContainer>
      </ApplicationPageWrapper>
      {showModal && <InviteApplicantsModal pageContent={pageContent} onModalCloseCallback={handleClickClose} />}
    </PageLayoutApplication>
  );
};
