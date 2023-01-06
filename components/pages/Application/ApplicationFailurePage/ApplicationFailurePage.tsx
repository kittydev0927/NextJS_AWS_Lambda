import { useMediaQuery } from '@mui/material';
import React from 'react';

import type { ILoginPageContentQuery } from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';
import { PageLayout } from '#components/layouts/organisms/PageLayout/PageLayout';
import { theme } from '#styles/styles';

import {
  StyledButton,
  StyledContainer,
  StyledHeader,
  StyledPaper,
  StyledSolidBackground,
  StyledText,
} from './ApplicationFailurePage.styles';

export const ApplicationFailurePage: React.FC<ILoginPageContentQuery> = ({ ...props }) => {
  const breakpoint = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <PageLayout pageName="Application Failure" data-testid="application-failure-page" {...props}>
      <StyledSolidBackground>
        <StyledPaper
          innerElevation={0}
          outerElevation={10}
          showOuterPaper
          innerTheme={breakpoint ? 'gradient' : 'plain'}
          outerTheme="plain"
          className="outer-paper"
        >
          <StyledContainer>
            <StyledHeader variant="h2">Thanks for your interest in leasing one of our homes.</StyledHeader>
            <StyledText>
              Unfortunately, your application does not meet our requirements. Generally, if an applicant has a pending
              bankruptcy, a prior or pending eviction, or a felony conviction within the last six years, there is a high
              likelihood that they will not qualify to lease one of our homes. We wish you the best in your home search
              and we invite you to apply again in the future.
            </StyledText>
            <StyledButton href="https://rentprogress.com/before-you-apply/#before2">
              View Qualification Requirements
            </StyledButton>
          </StyledContainer>
        </StyledPaper>
      </StyledSolidBackground>
    </PageLayout>
  );
};
