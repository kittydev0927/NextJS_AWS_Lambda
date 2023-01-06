import type { ImageProps } from 'next/image';
import Image from 'next/image';
import React from 'react';

import { StyledIllustration } from './Illustration.styles';

export const Illustration: React.FC<ImageProps> = ({ src, alt = '', width, height }) => {
  return (
    <StyledIllustration width={width} height={height}>
      <Image src={src} width={width} height={height} alt={alt} />
    </StyledIllustration>
  );
};
