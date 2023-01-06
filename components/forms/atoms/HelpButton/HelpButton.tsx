import Image from 'next/image';
import React from 'react';

import HelpCircle from '#public/bx-bx-help-circle@3x.png';

import { StyledHelpButton, StyledImg } from './HelpButton.styles';
import type { HelpButtonProps } from './HelpButton.types';

export const HelpButton: React.FC<HelpButtonProps> = ({ onClick, disabled, ...props }) => {
  return (
    <StyledHelpButton onClick={onClick} disabled={disabled} {...props}>
      <StyledImg>
        <Image src={HelpCircle} width={24} height={24} alt="" />
      </StyledImg>
      Help
    </StyledHelpButton>
  );
};
