import Image from 'next/image';
import React from 'react';

import EqualHousing from '#public/Equal_Housing_Opportunity-logo.svg';
import WheelchairIcon from '#public/wheelchair-icon.svg';

import { StyledFooterBottom, StyledImage } from './FooterBottom.styles';
import type { FooterBottomProps } from './FooterBottom.types';

// Logo and Social Media Icons
// flexbox with logo on the left, social on the right
// placement does not change for mobile
export const FooterBottom: React.FC<FooterBottomProps> = ({ children, ...props }) => {
  return (
    <StyledFooterBottom {...props}>
      <StyledImage>
        <Image src={EqualHousing as string} width={33} height={32} alt="Equal Housing" />
      </StyledImage>
      <Image src={WheelchairIcon as string} width={25} height={32} alt="Accessible" />
      {children}
    </StyledFooterBottom>
  );
};
