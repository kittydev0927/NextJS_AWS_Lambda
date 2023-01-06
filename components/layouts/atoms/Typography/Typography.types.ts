import type { TypographyProps as MuiTypographyProps } from '@mui/material';

export interface TypographyProps extends MuiTypographyProps {
  text?: string; // for Storybook controls only
  textAlign?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  sx?: Record<string, unknown>;
  color?: string;
  component?: string;
  textVariant?:
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2';
}
