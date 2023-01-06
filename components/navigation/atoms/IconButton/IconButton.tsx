import Image from 'next/image';
import React from 'react';

import { Typography } from '#components/layouts/atoms/Typography/Typography';
import AvitarIcon from '#public/icon-avitar.svg';

import { StyledAvatarIcon, StyledIconButton, StyledIconButtonCon } from './IconButton.styles';
import type { IconButtonProps } from './IconButton.types';

export const IconButton: React.FC<IconButtonProps> = ({ userName, defaultText = 'Login', ...props }) => (
  <StyledIconButtonCon data-testid="IconButton-Container">
    <Typography className="username" textVariant="body2" sx={{ textDecoration: 'underline' }}>
      {userName ? userName : defaultText}
    </Typography>
    {userName ? (
      <StyledAvatarIcon>
        <Image src={AvitarIcon as string} width={31} height={31} alt="Account Menu" />
      </StyledAvatarIcon>
    ) : (
      <LoginButton {...props} />
    )}
  </StyledIconButtonCon>
);

const LoginButton: React.FC<Partial<IconButtonProps>> = ({ children, ...props }) => (
  <StyledIconButton {...props}>
    <StyledAvatarIcon>
      <Image src={AvitarIcon as string} width={31} height={31} alt="Login or Register" />
    </StyledAvatarIcon>
    {children}
  </StyledIconButton>
);
