import React from 'react';

import { InfoBar } from '#components/layouts/molecules/InfoBar/InfoBar';
import {
  StyledProfileCardBody,
  StyledProfileCardContent,
  StyledProfileCardWrapper,
  StyledProfileCarHeader,
} from '#components/layouts/organisms/ProfileCard/ProfileInfoCard.styles';
import type { ProfileInfoCardProps } from '#components/layouts/organisms/ProfileCard/ProfileInfoCard.types';

export const ProfileInfoCard: React.FC<ProfileInfoCardProps> = ({ children }) => {
  return (
    <StyledProfileCardWrapper data-testid="profile-info-card">
      <StyledProfileCarHeader>
        <InfoBar showAccountIcon />
      </StyledProfileCarHeader>
      <StyledProfileCardBody>
        <StyledProfileCardContent>{children}</StyledProfileCardContent>
      </StyledProfileCardBody>
    </StyledProfileCardWrapper>
  );
};
