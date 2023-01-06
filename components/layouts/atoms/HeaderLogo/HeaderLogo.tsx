import { Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import { logoSize } from '#constants/responsiveSizes';
import ProgressLogo from '#public/progress-logo.svg';
import { theme } from '#styles/styles';

import { StyledHeaderLogo } from './HeaderLogo.styles';
import type { HeaderLogoProps } from './HeaderLogo.types';

export const HeaderLogo: React.FC<HeaderLogoProps> = ({ align, variant, width, height, ...props }) => {
  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
  const logoWidth = smallBreakpoint ? logoSize.width.large : logoSize.width.small;
  const logoHeight = smallBreakpoint ? logoSize.height.large : logoSize.height.small;

  return (
    <Typography
      data-testid="HeaderLogo-Container"
      variant={variant}
      align={align}
      component="div"
      sx={{ display: { xs: 'block', sm: 'block' } }}
      {...props}
    >
      <StyledHeaderLogo className="header-logo">
        <Image
          src={ProgressLogo as string}
          width={width ?? logoWidth}
          height={height ?? logoHeight}
          layout="fixed"
          alt="Progess Residential Logo"
        />
      </StyledHeaderLogo>
    </Typography>
  );
};
