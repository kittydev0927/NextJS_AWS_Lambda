import { useRouter } from 'next/router';
import React from 'react';

import type { ILoginPageContentQuery } from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';
import { SEO } from '#components/layouts/atoms/SEO/SEO';
import { PageOverlay } from '#components/layouts/molecules/PageOverlay/PageOverlay';
import { LoginOptions } from '#components/layouts/organisms/LoginOptions/LoginOptions';
import { PageLayoutNoAuth } from '#components/layouts/organisms/PageLayoutNoAuth/PageLayoutNoAuth';
import { Paper } from '#components/layouts/organisms/Paper/Paper';

import { StyledPaper } from './LoginPageOptions.styles';

export const LoginPageOptions: React.FC<ILoginPageContentQuery> = ({ userAuthContent }) => {
  const router = useRouter();
  const origin = router?.query?.origin;

  const newApplicantClickHandler = () => {
    if (origin) {
      void router.push(`/login?origin=${origin}`);
    } else {
      void router.push('/login');
    }
  };
  return (
    <PageLayoutNoAuth pageName="loginoption" userAuthContent={userAuthContent}>
      <PageOverlay>
        <SEO
          title="Login Options - Progress Residential Favorite Homes"
          description="Login options for existing resident and applicant"
          pageName="login-option"
        />
        <StyledPaper>
          <Paper
            innerElevation={0}
            outerElevation={10}
            showOuterPaper
            innerSquare
            innerTheme="gradient"
            outerTheme="plain"
            className="outer-paper"
          >
            <LoginOptions onNewApplicantClick={newApplicantClickHandler} userAuthContent={userAuthContent} />
          </Paper>
        </StyledPaper>
      </PageOverlay>
    </PageLayoutNoAuth>
  );
};
