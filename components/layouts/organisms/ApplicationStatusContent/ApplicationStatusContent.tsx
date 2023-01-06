import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

import type { IApplicationStatusPage } from '#components/pages/Application/ApplicationStatusPage/ApplicationStatusPage.types';
import StatusImageApprovedDesktop from '#public/image-app-approved-desktop.png';
import StatusImageApprovedMobile from '#public/image-app-approved-mobile.png';
import StatusImageDenied from '#public/image-app-denied.png';
import StatusImageProcessing from '#public/processing.png';
import { theme } from '#styles/styles';

import {
  StyledApprovedCon,
  StyledBold,
  StyledButton,
  StyledContainer,
  StyledDeniedCon,
  StyledGridContainer,
  StyledHeader,
  StyledList,
  StyledListItem,
  StyledProcessingCon,
  StyledSection,
  StyledStepImage,
  StyledSubHeader,
  StyledSubmittedCon,
  StyledText,
} from './ApplicationStatusContent.styles';

export const ApplicationStatusContent: React.FC<IApplicationStatusPage> = ({ currentAppStatus }) => {
  return (
    <>
      {currentAppStatus === 'processing' && <StatusProcessing />}
      {currentAppStatus === 'denied' && <StatusDenied />}
      {currentAppStatus === 'approved' && <StatusApproved />}
      {currentAppStatus === 'submitted' && <StatusSubmitted />}
    </>
  );
};

const StatusProcessing = () => {
  return (
    <StyledProcessingCon>
      <StyledContainer className="processing">
        <StyledSection className="processing">
          <StyledHeader variant="h2" className="processing">
            Thanks for applying!
          </StyledHeader>
          <StyledText variant="body1" className="processing">
            Your application is in the screening process right now. It might take us a little time to return your
            results!
          </StyledText>
        </StyledSection>
        <StyledStepImage className="processing">
          <Image src={StatusImageProcessing as unknown as string} width={349} height={242} alt="" />
        </StyledStepImage>
      </StyledContainer>
    </StyledProcessingCon>
  );
};

const StatusDenied = () => {
  return (
    <StyledDeniedCon>
      <StyledContainer className="denied">
        <StyledSection className="denied">
          <StyledHeader variant="h2" className="denied">
            We&apos;re sorry, but we aren&apos;t able to approve your application.
          </StyledHeader>
          <StyledText variant="body1" className="denied">
            Maybe this home wasn&apos;t the right fit after all. Luckily, we have some other homes we&apos;re happy to
            recommend.
          </StyledText>
          <StyledButton className="denied">View Recommended Homes</StyledButton>
        </StyledSection>
        <StyledStepImage className="denied">
          <Image src={StatusImageDenied as unknown as string} width={468} height={245} alt="" />
        </StyledStepImage>
      </StyledContainer>
    </StyledDeniedCon>
  );
};

const StatusApproved = () => {
  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
  const router = useRouter();

  return (
    <StyledApprovedCon>
      <StyledGridContainer className="approved">
        <StyledSection className="approved content">
          <StyledHeader variant="h2" className="approved">
            Congratulations!
          </StyledHeader>
          <StyledSubHeader className="approved">
            You&apos;ve been approved, Now let&apos;s reserve the home you want with a few easy steps.
          </StyledSubHeader>
          <StyledList>
            <StyledListItem>
              <StyledBold>Pay</StyledBold> the security deposit to reserve this home
            </StyledListItem>
            <StyledListItem>
              <StyledBold>Review</StyledBold> and confirm your lease details
            </StyledListItem>
            <StyledListItem>
              <StyledBold>Sign</StyledBold> and submit your lease
            </StyledListItem>
            <StyledListItem>
              <StyledBold>Pay</StyledBold> final move in costs
            </StyledListItem>
          </StyledList>
          <StyledButton onClick={() => void router.push('/dashboard')} data-testid="continue-button">
            Continue
          </StyledButton>
          <StyledText variant="body1" className="approved">
            Please note that a Lease Application, even if approved, shall under no circumstances be considered a Lease
            Agreement or an offer to lease.
          </StyledText>
        </StyledSection>
        <StyledStepImage className="approved image">
          {smallBreakpoint && (
            <Image src={StatusImageApprovedDesktop as unknown as string} width={795} height={530} alt="" />
          )}
          {!smallBreakpoint && (
            <Image src={StatusImageApprovedMobile as unknown as string} width={312} height={298} alt="" />
          )}
        </StyledStepImage>
      </StyledGridContainer>
    </StyledApprovedCon>
  );
};

const StatusSubmitted = () => {
  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <StyledSubmittedCon>
      <StyledGridContainer className="submitted">
        <StyledSection className="submitted content">
          <StyledHeader variant="h2" className="submitted">
            Congratulations!
          </StyledHeader>
          <StyledSubHeader className="submitted">Your application has been submitted.</StyledSubHeader>
          <StyledText variant="body1" className="submitted">
            A representative will be in touch with you to complete this process and let you know what to do next.
          </StyledText>
        </StyledSection>
        <StyledStepImage className="submitted image">
          {smallBreakpoint && (
            <Image src={StatusImageApprovedDesktop as unknown as string} width={795} height={530} alt="" />
          )}
          {!smallBreakpoint && (
            <Image src={StatusImageApprovedMobile as unknown as string} width={312} height={298} alt="" />
          )}
        </StyledStepImage>
      </StyledGridContainer>
    </StyledSubmittedCon>
  );
};
