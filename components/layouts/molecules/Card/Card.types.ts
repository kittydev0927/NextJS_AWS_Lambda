import type { ImageProps } from 'next/image';

import type { TypographyProps } from '#components/layouts/atoms/Typography/Typography.types';

export interface CardProps {
  maxwidth?: number;
  mediaimgheight?: number;
  mediaElevation?: number;
  mediaImgAltTxt?: string;
  mediaImg?: ImageProps['src'];
  mediaimgcolor?: string;
  heading?: string;
  headingStyles?: TypographyProps['sx'];
  headingAlign?: TypographyProps['textAlign'];
  headingVariant?: TypographyProps['textVariant'];
  body?: string;
  url?: string;
  bodyStyles?: TypographyProps['sx'];
  bodyAlign?: TypographyProps['textAlign'];
  bodyVariant?: TypographyProps['textVariant'];
  buttonText?: string;
  buttonVariant?: 'outlined' | 'text' | 'primary' | 'secondary' | 'inactive';
  buttonSize?: 'small' | 'medium' | 'large';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isButtonFullWidth?: boolean;
  titleHeight?: string;
  buttonPosition?: string;
  buttonWidth?: string;
  iconPosition?: 'left' | 'right';
  isFullWidth?: boolean;
  mediaImgIconWidth?: number;
  mediaImgIconHeight?: number;
}
