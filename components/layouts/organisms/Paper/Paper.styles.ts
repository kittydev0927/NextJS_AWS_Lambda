import { styled } from '@mui/material';

import { muiCustomShadow } from '#styles/styles';

import type { PaperProps } from './Paper.types';
import { GRADIENT_BG } from './Paper.types';

const styleProps = new Set<string | number | symbol>([
  'innerElevation',
  'innerSquare',
  'innerSx',
  'innerTheme',
  'innerVariant',
  'outerElevation',
  'outerSquare',
  'outerSx',
  'outerTheme',
  'outerVariant',
  'showOuterPaper',
]);

const shouldForwardProp = (prop: string | number | symbol) => !styleProps.has(prop);

export const StyledWrapper = styled('div', { shouldForwardProp })<PaperProps>`
  .MuiPaper-root {
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    padding: 6px;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      padding: 16px;
    }
    &.outer-paper {
      box-shadow: ${({ theme }) => theme.shadows[muiCustomShadow]};

      ${props =>
        props.outerTheme === 'gradient' ? `background: ${GRADIENT_BG}` : `background: ${props.theme.colors.white}`};
    }
    .inner-paper {
      ${props =>
        props.innerTheme === 'gradient' ? `background: ${GRADIENT_BG}` : `background: ${props.theme.colors.white}`};
    }
  }
`;
