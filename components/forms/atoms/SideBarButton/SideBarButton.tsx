import Image from 'next/image';
import React from 'react';

import RightArrow from '#public//OpenWhiteArrow.svg';
import LeftArrow from '#public/LeftWhiteArrow.svg';

import { StyledButton } from './SideBarButton.styles';
import type { SideBarButtonProps } from './SideBarButton.types';

export const SideBarButton: React.FC<SideBarButtonProps> = ({ buttonState = 'closed', onClick }) => {
  return (
    <StyledButton onClick={onClick} buttonState={buttonState} data-testid="tips-button" aria-label="tips-button">
      {buttonState === 'closed' && <Image src={LeftArrow as string} width={15} height={15} alt="" />}
      {buttonState === 'open' && <Image src={RightArrow as string} width={15} height={15} alt="" />}
      {buttonState === 'mobile' && <p>Tips</p>}
    </StyledButton>
  );
};
