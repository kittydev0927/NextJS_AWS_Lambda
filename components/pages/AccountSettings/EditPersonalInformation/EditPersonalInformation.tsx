/* eslint-disable @typescript-eslint/no-misused-promises */
import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

import {
  StyledPaper,
  StyledPaperContainer,
} from '#components/forms/molecules/ProfileBuilderWrapper/ProfileBuilderWrapper.styles';
import { EditPersonalInformationForm } from '#components/forms/organisms/AccountSettingsForms/EditPersonalInformationForm/EditPersonalInformationForm';
import type { ILoginPageContentQuery } from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';
import { SEO } from '#components/layouts/atoms/SEO/SEO';
import { PageOverlay } from '#components/layouts/molecules/PageOverlay/PageOverlay';
import { PageLayout } from '#components/layouts/organisms/PageLayout/PageLayout';
import LeftWhiteChevron from '#public/LeftWhiteChevron.svg';
import { theme } from '#styles/styles';

import {
  SmallBackButton,
  StyledButton,
  StyledImage,
  StyledInnerPaper,
  StyledTypography,
} from './EditPersonalInformation.styles';

export const EditPersonalInformation: React.FC<ILoginPageContentQuery> = ({ ...props }) => {
  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
  const router = useRouter();
  const handlePush = async () => {
    await router.push('/settings');
  };
  return (
    <PageLayout data-testid="profile-builder-wrapper" {...props}>
      <SEO
        title="Edit Your Personal Information"
        description="Update your personal information including your name, email address or phone number."
        pageName="edit personal information"
      />
      <PageOverlay>
        {!smallBreakpoint && (
          <SmallBackButton>
            <StyledButton onClick={handlePush}>
              <StyledImage src={LeftWhiteChevron as string} width={24} height={24} alt="" />
              <StyledTypography variant="h6">Account Settings</StyledTypography>
            </StyledButton>
          </SmallBackButton>
        )}
        <StyledPaperContainer className="pb-paper-container">
          <StyledPaper
            innerElevation={0}
            outerElevation={10}
            showOuterPaper
            innerSquare
            className="outer-paper"
            innerTheme="plain"
          >
            <StyledInnerPaper data-testid="inner-paper-personal">
              <EditPersonalInformationForm {...props} />
            </StyledInnerPaper>
          </StyledPaper>
        </StyledPaperContainer>
      </PageOverlay>
    </PageLayout>
  );
};
