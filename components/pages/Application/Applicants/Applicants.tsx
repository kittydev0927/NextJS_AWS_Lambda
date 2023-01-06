import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';

import type { PortalUser } from '#auth/PortalUser';
import { ApplicantSummaryBox } from '#components/forms/molecules/ApplicantSummaryBox/ApplicantSummaryBox';
import { ApplicationPageWrapper } from '#components/forms/molecules/ApplicationPageWrapper/ApplicationPageWrapper';
import { TipsInnerContent } from '#components/layouts/molecules/TipsSideBar/InnerContent/TipsInnerContent';
import { PageLayoutApplication } from '#components/layouts/organisms/PageLayoutApplication/PageLayoutApplication';
import { InviteApplicantsModal } from '#components/navigation/organisms/InviteApplicantsModal/InviteApplicantsModal';
import { theme } from '#styles/styles';

import { STEP_NUMBER_THREE } from '../LeaseDetails/constants';
import type { ApplicantProps } from './Applicant.types';
import {
  StyledApplicantContainer,
  StyledApplicantsContainer,
  StyledBold,
  StyledCoApplicantText,
  StyledContainer,
  StyledHeader,
  StyledLink,
  StyledLinkContainer,
  StyledText,
} from './Applicants.styles';

export const Applicants: React.FC<ApplicantProps> = ({ primaryApplicant, applicants, pageData }) => {
  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));

  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const prevPage = useCallback(async () => {
    void router.push('/application/lease-details');
  }, [router]);
  const nextPage = useCallback(async () => {
    void router.push('/application/applicant-info');
  }, [router]);

  async function saveData(portalUser: PortalUser) {
    // desired save action goes here
    console.info(portalUser);
  }

  function handleClickClose() {
    //method to hide modal on screen
    setShowModal(false);
  }

  const headerContent = pageData.applicantsContent.items[0].cfHeading.json[0].content[0].value || '';
  const textContent = pageData.applicantsContent.items[0].cfContent.json[0].content[0].value || '';
  const inviteModalContent = pageData.inviteModalContent.items[0];
  const appTips = pageData.cPPApplicationTipsList.items[0];
  const subContent = pageData.subContent.items[0];

  return (
    <PageLayoutApplication infoText="2022. All Rights Reserved Progress Residential ®">
      <ApplicationPageWrapper
        prevPage={prevPage}
        nextPage={nextPage}
        onSave={saveData}
        step={primaryApplicant ? STEP_NUMBER_THREE : 1}
        innerTheme={smallBreakpoint ? 'gradient' : 'plain'}
        outerTheme="plain"
        tipsContent={<TipsInnerContent appTips={appTips} />}
        primaryApplicant={primaryApplicant}
      >
        {primaryApplicant && (
          <StyledContainer data-testid="applicants-page">
            <StyledHeader variant="h2">{headerContent}</StyledHeader>
            <StyledText>{textContent}</StyledText>
            <StyledApplicantsContainer>
              {applicants.length
                ? applicants.map(applicant => (
                    <StyledApplicantContainer key={applicant.applicantId}>
                      <ApplicantSummaryBox applicant={applicant} />
                    </StyledApplicantContainer>
                  ))
                : null}
            </StyledApplicantsContainer>
            <StyledLinkContainer>
              <div onClick={() => setShowModal(true)} data-testid="invite-applicants-link">
                <StyledLink color="primary" showArrow fullWidth alignArrow="end">
                  Invite Applicant
                </StyledLink>
              </div>
            </StyledLinkContainer>
          </StyledContainer>
        )}
        {!primaryApplicant && (
          <StyledContainer className="coapplicant">
            <StyledHeader variant="h2">Applicants</StyledHeader>
            <StyledBold>You are a Co-Applicant.</StyledBold>
            <StyledCoApplicantText>
              Anyone 18 years old and above who will be living in the home is required to complete an individual
              application.{' '}
            </StyledCoApplicantText>
            <StyledCoApplicantText>
              The Primary applicant is responsible to select the Move-in date, Lease terms and to pay for the
              Co-Applicants.
            </StyledCoApplicantText>
          </StyledContainer>
        )}
      </ApplicationPageWrapper>
      {showModal && (
        <InviteApplicantsModal
          subContent={subContent}
          pageContent={inviteModalContent}
          onModalCloseCallback={handleClickClose}
        />
      )}
    </PageLayoutApplication>
  );
};
