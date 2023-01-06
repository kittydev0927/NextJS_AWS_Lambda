import Image from 'next/image';
import React from 'react';

import { BackToTop } from '#components/layouts/molecules/BackToTop/BackToTop';
import { BASE_URL } from '#constants/constants';
import { logoSize } from '#constants/responsiveSizes';
import ProgressLogo from '#public/progress-logo.svg';

import { Link } from '../../atoms/Link/Link';
import { CompanyInfo } from '../../molecules/CompanyInfo/CompanyInfo';
import { ContactInfo } from '../../molecules/ContactInfo/ContactInfo';
import { FooterBottom } from '../../molecules/FooterBottom/FooterBottom';
import { SocialLinks } from '../../molecules/SocialLinks/SocialLinks';
import { StyledFooter, StyledFooterBottom, StyledFooterContainer, StyledLogo } from './Footer.styles';
import type { FooterProps } from './Footer.types';

export const Footer: React.FC<FooterProps> = ({
  children,
  companyInfoLinkColor,
  textStylesBottom,
  textVariantBottom = 'body1',
  textAlignBottom,
  showBackToTop = false,
  ...props
}) => {
  return (
    <StyledFooter {...props}>
      {showBackToTop && <BackToTop />}
      <StyledFooterContainer>
        <div className="logo">
          {/* Logo */}
          <Link href={BASE_URL}>
            <StyledLogo>
              <Image
                src={ProgressLogo as string}
                width={logoSize.width.large}
                height={logoSize.height.large}
                layout="fixed"
                alt="Progess Residential Logo"
              />
            </StyledLogo>
          </Link>
        </div>
        <div className="contact">
          <ContactInfo
            linkColor={companyInfoLinkColor}
            textStyles={textStylesBottom}
            textVariant={textVariantBottom}
            textAlign={textAlignBottom}
          />
          <SocialLinks />
        </div>
        <div className="company">
          <CompanyInfo
            linkColor={companyInfoLinkColor}
            textStyles={textStylesBottom}
            textVariant={textVariantBottom}
            textAlign={textAlignBottom}
          />
        </div>
        {/* Compliance Icons (Equal Housing & Accessibility) */}
        <StyledFooterBottom className="compliance">
          <FooterBottom />
        </StyledFooterBottom>
      </StyledFooterContainer>
      {children}
    </StyledFooter>
  );
};
