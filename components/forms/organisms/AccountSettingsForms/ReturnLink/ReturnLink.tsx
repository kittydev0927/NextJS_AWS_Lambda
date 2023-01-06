import Image from 'next/image';
import React from 'react';

import LeftChevron from '#public/LeftChevron.svg';

import { StyledContainer, StyledContent } from './ReturnLink.styles';
import type { ReturnLinkProps } from './ReturnLink.types';

export const ReturnLink: React.FC<ReturnLinkProps> = ({ onClick }) => {
  return (
    <StyledContainer>
      <StyledContent onClick={onClick}>
        <Image src={LeftChevron as string} width={23} height={23} alt="LeftChevron" />
        <span>Account Settings</span>
      </StyledContent>
    </StyledContainer>
  );
};
