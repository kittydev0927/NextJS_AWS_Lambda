import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import { useProfile } from '#auth/UseProfile';
import AccountCircle from '#public/account-circle.svg';
import { theme } from '#styles/styles';

import {
  GridItemInfo,
  GridItemLink,
  StyledGrid,
  StyledLinkTypography,
  StyledSpan,
  StyledTypography,
} from './InfoBar.styles';
import type { InfoBarProps } from './InfoBar.types';

export const InfoBar: React.FC<InfoBarProps> = ({ infoText, linkText, onClickLink, showAccountIcon }) => {
  const profile = useProfile();
  const smallBreakpoint = useMediaQuery(theme.breakpoints.only('xs'));

  let link;
  let info;
  let infoWidth = 10;
  let linkWidth = 2;

  if (showAccountIcon) {
    const userFirstName = profile?.firstName;
    const userLastNameFirstChar = profile?.lastName?.charAt(0);

    info = (
      <>
        <Image src={AccountCircle as string} width={33} height={33} alt="account circle" />
        <StyledSpan />
        {profile && (
          <>
            <StyledTypography textVariant="body1">
              {smallBreakpoint ? 'Welcome,' : 'Welcome to your Dashboard,'}&nbsp;
            </StyledTypography>
            <StyledTypography textVariant="body2">
              {userFirstName}&nbsp;{userLastNameFirstChar}.
            </StyledTypography>
          </>
        )}
      </>
    );
  }

  if (!showAccountIcon) {
    info = <StyledTypography textVariant="body2">{infoText}</StyledTypography>;
    link = (
      <div onClick={onClickLink}>
        <StyledLinkTypography textVariant="body1">{linkText}</StyledLinkTypography>
      </div>
    );

    // Justification: Pre-existing code.
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    infoWidth = 8;

    // Justification: Pre-existing code.
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    linkWidth = 4;
  }

  return (
    <StyledGrid container data-testid="info-bar">
      <GridItemInfo item xs={infoWidth}>
        {info}
      </GridItemInfo>
      <GridItemLink item xs={linkWidth}>
        {link}
      </GridItemLink>
    </StyledGrid>
  );
};
