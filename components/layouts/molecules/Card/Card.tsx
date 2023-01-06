import Image from 'next/image';
import React from 'react';

import { CardButton } from '#components/layouts/atoms/CardButton/CardButton';

import {
  StyledBodyTypography,
  StyledCardActions,
  StyledCardContainer,
  StyledCardContent,
  StyledCardMedia,
  StyledHeadingTypography,
  StyledImage,
} from './Card.styles';
import type { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = ({
  children,
  maxwidth,
  mediaimgheight,
  mediaElevation,
  mediaImg,
  mediaImgAltTxt,
  mediaimgcolor,
  heading,
  headingStyles,
  headingAlign,
  body,
  url,
  bodyStyles,
  bodyAlign,
  buttonText = 'Login',
  buttonVariant,
  buttonSize,
  onClick,
  isButtonFullWidth,
  buttonPosition,
  buttonWidth,
  iconPosition,
  isFullWidth,
  mediaImgIconWidth = 80,
  mediaImgIconHeight = 80,
  ...props
}) => {
  return (
    <StyledCardContainer
      elevation={mediaElevation}
      maxwidth={maxwidth}
      isFullWidth={isFullWidth}
      sx={{ borderRadius: 4 }}
      data-testid="Card-Container"
      {...props}
    >
      <StyledCardMedia
        mediaimgheight={mediaimgheight}
        maxwidth={maxwidth}
        mediaimgcolor={mediaimgcolor}
        isFullWidth={isFullWidth}
      >
        <StyledImage>
          <Image
            src={mediaImg || ''}
            width={mediaImgIconWidth}
            height={mediaImgIconHeight}
            alt={mediaImgAltTxt || 'Media Image'}
          />
        </StyledImage>
      </StyledCardMedia>
      <StyledCardContent>
        <StyledHeadingTypography
          titleHeight={isButtonFullWidth ? 'auto' : '48px'}
          sx={headingStyles}
          textAlign={headingAlign}
          isFullWidth={isFullWidth}
        >
          {heading}
        </StyledHeadingTypography>
        <StyledBodyTypography sx={bodyStyles} textAlign={bodyAlign} isFullWidth={isFullWidth}>
          {body}
        </StyledBodyTypography>
      </StyledCardContent>
      <StyledCardActions isFullWidth={isFullWidth} buttonPosition={buttonPosition}>
        <CardButton
          variant={buttonVariant}
          size={buttonSize}
          onClick={onClick}
          fullWidth={isButtonFullWidth}
          buttonWidth={buttonWidth}
          iconPosition={iconPosition}
          url={url}
        >
          {buttonText}
        </CardButton>
      </StyledCardActions>
      {children}
    </StyledCardContainer>
  );
};
