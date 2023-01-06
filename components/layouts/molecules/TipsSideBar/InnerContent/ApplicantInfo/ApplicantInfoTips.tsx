import React from 'react';

import { StyledContainer, StyledHyperLink, StyledSubHeader, StyledText } from './ApplicantInfoTips.styles';

export const ApplicantInfoTips: React.FC = () => (
  <div data-testid="applicant-info-tips">
    <StyledContainer>
      <StyledSubHeader>Applicants</StyledSubHeader>
      <StyledText>
        Each person 18 years of age and older who will be living in the home must complete an application and pay an
        application fee. Once all individual applications are complete, the application for the home can be submitted.
      </StyledText>
    </StyledContainer>
    <StyledContainer>
      <StyledSubHeader>Background and Credit Check</StyledSubHeader>
      <StyledText>
        A credit and background screening will be completed for all applicants. Active military status will be verified.
        For more information about this, please
        <StyledHyperLink href="">click here</StyledHyperLink>
      </StyledText>
      <StyledText>
        For more information on our qualification criteria, please <StyledHyperLink href="">click here</StyledHyperLink>
      </StyledText>
    </StyledContainer>
  </div>
);
