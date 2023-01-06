import Image from 'next/image';
import React from 'react';

import AboutImg from '#public/laura-chouette.png';
import PerfectSpaceImg from '#public/layer-2.png';

import {
  StyledAboutImage,
  StyledAboutInnerStack,
  StyledAboutOuterStack,
  StyledAboutPaper,
  StyledCardDesc,
  StyledCardLabel,
  StyledCardLink,
  StyledColumn,
  StyledImage,
  StyledImageWrapper,
  StyledInnerStack,
  StyledLinkWrapper,
  StyledOuterStack,
  StyledPaper,
} from './SubMenuImage.styles';
import type SubMenuImageProps from './SubMenuImage.types';

// TODO: Please provide context for this. If this one button needs special
// treatment, should it have a flag on the `Nav` interface rather than
// being called out as special here?
const magicNumber = 3;

export const SubMenuImage: React.FC<SubMenuImageProps> = ({ children, selectedNav, ...props }) => (
  <StyledColumn data-testid="SubMenuImage-Container">
    {children}
    {selectedNav?.id === 1 && (
      <StyledPaper
        innerElevation={0}
        outerElevation={10}
        className="outer-paper"
        innerTheme="gradient"
        outerTheme="plain"
        {...props}
      >
        <StyledOuterStack direction="row">
          <StyledInnerStack direction="column">
            <StyledCardLabel>Find Your Perfect Space.</StyledCardLabel>
            <StyledCardDesc>Morbi leo risus, porta ac consectetur ac vestibul.</StyledCardDesc>
            <StyledLinkWrapper>
              <StyledCardLink color="primary" variant="subtitle2" showArrow href="#">
                Lorem Ipsum Dolor
              </StyledCardLink>
            </StyledLinkWrapper>
          </StyledInnerStack>
          <StyledImageWrapper>
            <StyledImage>
              <Image src={PerfectSpaceImg} width={324} height={196} alt="backArrow" />
            </StyledImage>
          </StyledImageWrapper>
        </StyledOuterStack>
      </StyledPaper>
    )}
    {selectedNav?.id === magicNumber && (
      <StyledAboutPaper
        innerElevation={0}
        outerElevation={10}
        className="outer-paper"
        innerTheme="gradient"
        outerTheme="plain"
        {...props}
      >
        <StyledAboutOuterStack direction="row">
          <StyledAboutInnerStack direction="column">
            <StyledCardLabel>Lorem Ipsum Dolor Sit Amet</StyledCardLabel>
            <StyledCardDesc>Morbi leo risus, porta ac consectetur ac vestibul.</StyledCardDesc>
          </StyledAboutInnerStack>
          <StyledImageWrapper>
            <StyledAboutImage>
              <Image alt="About Image" src={AboutImg} width={372} height={217} />
            </StyledAboutImage>
          </StyledImageWrapper>
        </StyledAboutOuterStack>
      </StyledAboutPaper>
    )}
  </StyledColumn>
);

export default SubMenuImage;
