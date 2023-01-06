import Image from 'next/image';
import React from 'react';

import DownArrow from '#public/down-arrow.svg';
import UpArrow from '#public/up-arrow.svg';

import { IconButton } from '../../atoms/IconButton/IconButton';
import { DropdownButton, StyledDropdownContainer } from '../Dropdown/Dropdown.styles';
import { StyledArrow } from './SubMenuButton.styles';
import type { SubMenuButtonProps } from './SubMenuButton.types';

// TODO: Please provide context for this. If this one button needs special
// treatment, should it have a flag on the `Nav` interface rather than
// being called out as special here?
const magicNumber = 4;

export const SubMenuButton: React.FC<SubMenuButtonProps> = ({
  button,
  disabled,
  disableRipple,
  variant,
  userName,
  onClick,
  selectedText,
}) => (
  <StyledDropdownContainer data-testid="SubMenuButton-Container" userName={userName}>
    <DropdownButton
      aria-haspopup="true"
      onClick={() => {
        if (onClick && button) {
          onClick(button);
        }
      }}
      disabled={disabled}
      disableRipple={disableRipple}
      variant={variant}
    >
      {button?.text}{' '}
      {button?.id !== magicNumber && (
        <StyledArrow>
          <Image
            data-testid="styled-down-arrow"
            alt="styledArrow"
            src={(selectedText === button?.text ? UpArrow : DownArrow) as string}
            width={16}
            height={16}
          />
        </StyledArrow>
      )}
      {userName && <IconButton className="user-icon" userName={userName} />}
    </DropdownButton>
  </StyledDropdownContainer>
);
