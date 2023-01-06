import Image from 'next/image';
import React from 'react';

import HidePasswordIcon from '#public/hide-password.svg';

import { StyledIcon, StyledLink, StyledLinkLayout } from './DashboardButton.styles';
import type { DashboardButtonProps } from './DashboardButton.types';

export const DashboardButton: React.FC<DashboardButtonProps> = ({
  children,
  alt = '',
  disabled,
  width = '275px',
  url = '#',
  isNewTabLink,
  iconUrl,
}) => {
  return (
    <StyledLink
      width={width}
      data-testid="dashboard-button-component"
      disabled={disabled}
      href={url}
      target={isNewTabLink ? '_blank' : '_self'}
    >
      <StyledLinkLayout>
        <StyledIcon>
          <Image src={iconUrl || (HidePasswordIcon as string)} width={35} height={35} alt={alt} />
        </StyledIcon>
        <span>{children}</span>
      </StyledLinkLayout>
    </StyledLink>
  );
};
