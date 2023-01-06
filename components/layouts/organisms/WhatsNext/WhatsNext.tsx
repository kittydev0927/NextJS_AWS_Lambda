import React from 'react';

import {
  StyledWhatsNextButton,
  StyledWhatsNextContainer,
  StyledWhatsNextDivider,
  StyledWhatsNextFooter,
  StyledWhatsNextList,
  StyledWhatsNextListItem,
  StyledWhatsNextParagraph,
  StyledWhatsNextSubtitle,
  StyledWhatsNextTitle,
} from './WhatsNext.styles';
import type { WhatsNextProps } from './WhatsNext.types';

export const WhatsNext: React.FC<WhatsNextProps> = ({ onClick }) => {
  return (
    <StyledWhatsNextContainer data-testid="whats-next-content">
      <StyledWhatsNextTitle textVariant="h4">What&apos;s Next?</StyledWhatsNextTitle>
      <StyledWhatsNextSubtitle>
        You&apos;re almost done! Now you just need to complete the following steps:
      </StyledWhatsNextSubtitle>
      <StyledWhatsNextList>
        <StyledWhatsNextListItem>
          <b>Pay</b> the security deposit to reserve this home
        </StyledWhatsNextListItem>
        <StyledWhatsNextListItem>
          <b>Review</b> and Confirm your lease details
        </StyledWhatsNextListItem>
        <StyledWhatsNextListItem>
          <b>Sign</b> and submit your lease
        </StyledWhatsNextListItem>
        <StyledWhatsNextListItem>
          <b>Pay</b> final move in costs
        </StyledWhatsNextListItem>
      </StyledWhatsNextList>
      <StyledWhatsNextDivider variant="fullWidth" />
      <StyledWhatsNextFooter>
        <StyledWhatsNextParagraph>
          Disclaimer: <br />
          The Lease Application, even if approved, shall under no circumstances be considered a Lease Agreement or an
          offer to lease. No lease shall exist unless and until the parties enter into a formal Lease Agreement and
          applicant pays all required fees, deposits, and advance rent.
        </StyledWhatsNextParagraph>
        <StyledWhatsNextButton variant="primary" onClick={onClick}>
          Continue
        </StyledWhatsNextButton>
      </StyledWhatsNextFooter>
    </StyledWhatsNextContainer>
  );
};
