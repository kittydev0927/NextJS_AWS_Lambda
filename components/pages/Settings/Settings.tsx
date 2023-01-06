import React from 'react';

import { AccountSettings } from '#components/forms/organisms/AccountSettings/AccountSettings';
import type { ILoginPageContentQuery } from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';
import { SEO } from '#components/layouts/atoms/SEO/SEO';
import { PageOverlay } from '#components/layouts/molecules/PageOverlay/PageOverlay';

import { PageLayout } from '../../layouts/organisms/PageLayout/PageLayout';
import { StyledPaper } from './Settings.styles';

export const SettingsPage: React.FC<ILoginPageContentQuery> = ({ children, ...props }) => {
  return (
    <PageLayout pageName="settings" showBackToTop={false} {...props}>
      <SEO
        title="Update your Personal Information and Password Settings"
        description="Update your Password and/or your personal information including your name, email address or phone number."
        pageName="settings"
      />
      <PageOverlay>
        <StyledPaper>
          <AccountSettings />
          {children}
        </StyledPaper>
      </PageOverlay>
    </PageLayout>
  );
};
