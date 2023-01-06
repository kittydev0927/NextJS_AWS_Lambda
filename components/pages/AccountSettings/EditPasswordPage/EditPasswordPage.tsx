import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/router';
import React from 'react';

import { EditPasswordForm } from '#components/forms/organisms/AccountSettingsForms/EditPasswordForm/EditPasswordForm';
import { ReturnLink } from '#components/forms/organisms/AccountSettingsForms/ReturnLink/ReturnLink';
import type { ILoginPageContentQuery } from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';
import { SEO } from '#components/layouts/atoms/SEO/SEO';
import { PageOverlay } from '#components/layouts/molecules/PageOverlay/PageOverlay';
import { PageLayout } from '#components/layouts/organisms/PageLayout/PageLayout';
import { theme } from '#styles/styles';

import { StyledPaper, StyledWrapper } from './EditPasswordPage.styles';

export const EditPasswordPage: React.FC<ILoginPageContentQuery> = ({ ...props }) => {
  const smallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();
  return (
    <PageOverlay>
      <SEO
        title="Edit Your Password"
        description="Edit your password or click I forgot my password to receive a link to your email address used to create your account to update."
        pageName="edit password"
      />
      <PageLayout {...props}>
        {smallBreakpoint && (
          <ReturnLink
            onClick={() => {
              void router.push('/settings');
            }}
          />
        )}
        <StyledPaper
          innerElevation={0}
          outerElevation={10}
          showOuterPaper
          innerSquare
          innerTheme="gradient"
          outerTheme="plain"
          className="outer-paper"
        >
          <StyledWrapper>
            <EditPasswordForm />
          </StyledWrapper>
        </StyledPaper>
      </PageLayout>
    </PageOverlay>
  );
};
