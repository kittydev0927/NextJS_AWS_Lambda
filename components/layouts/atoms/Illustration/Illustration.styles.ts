import { styled } from '@mui/material';
import type { ImageProps } from 'next/image';

type IStyledIllustration = Pick<ImageProps, 'height' | 'width'>;

export const StyledIllustration = styled('div', {
  shouldForwardProp: prop => prop !== 'height' && prop !== 'width',
})<IStyledIllustration>`
  max-width: 100%;
  width: ${props => props.width};
  height: ${props => props.height};
  img {
    width: 100%;
  }
`;
