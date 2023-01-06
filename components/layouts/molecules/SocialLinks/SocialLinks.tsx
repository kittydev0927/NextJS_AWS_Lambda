import Image from 'next/image';
import React from 'react';

import Facebook from '#public/facebook-icon.svg';
import Instagram from '#public/insta-icon.svg';
import Pinterest from '#public/pinterest-icon.svg';
import { theme } from '#styles/styles';

import { Link } from '../../atoms/Link/Link';
import { StyledSocialIcons, StyledSocialLinks } from './SocialLinks.styles';
import type { SocialLinksProps } from './SocialLinks.types';

export const SocialLinks: React.FC<SocialLinksProps> = ({ children, color = theme.colors.white, ...props }) => {
  return (
    <StyledSocialLinks {...props}>
      {/* Social Media Links */}
      <StyledSocialIcons>
        <Link href="https://www.pinterest.com/progressresidential/" color={color} target="_blank">
          <Image data-testid="PinterestIcon" src={Pinterest as string} width={32} height={32} alt="Pinterest" />
        </Link>
        <Link href="https://www.instagram.com/progressresidential/" color={color} target="_blank">
          <Image data-testid="InstagramIcon" src={Instagram as string} width={28} height={28} alt="Instagram" />
        </Link>
        <Link href="https://www.facebook.com/progressresidential" color={color} target="_blank">
          <Image data-testid="FacebookIcon" src={Facebook as string} width={29} height={28} alt="Facebook" />
        </Link>
      </StyledSocialIcons>
      {children}
    </StyledSocialLinks>
  );
};
