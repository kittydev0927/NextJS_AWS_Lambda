import Image from 'next/image';
import React from 'react';

import ArrowIcon from '#public//icon-arrow.svg';

import { StyledButton, StyledIcon } from './CardButton.styles';
import type { CardButtonProps } from './CardButton.types';

const CardButtonIcon: React.FC = () => (
  <StyledIcon>
    <Image src={ArrowIcon as string} width={11} height={12} alt="Dropdown Arrow" />
  </StyledIcon>
);

export const CardButton: React.FC<CardButtonProps> = ({
  variant,
  size,
  fullWidth,
  children,
  disabled,
  buttonWidth,
  iconPosition,
  url,
  ...props
}) => {
  return (
    <StyledButton
      data-testid="button-component"
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      width={fullWidth ? '100%' : '213px'}
      buttonWidth={buttonWidth}
      iconPosition={iconPosition}
      href={url}
      {...props}
    >
      {iconPosition === 'left' && <CardButtonIcon />}
      {children}
      {iconPosition === 'right' && <CardButtonIcon />}
    </StyledButton>
  );
};
