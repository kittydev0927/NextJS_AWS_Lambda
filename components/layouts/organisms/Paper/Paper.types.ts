import type { PaperProps as MuiPaperProps } from '@mui/material';
type paperVariant = 'elevation' | 'outlined';
type paperTheme = 'plain' | 'gradient';

export interface PaperProps extends MuiPaperProps {
  innerVariant?: paperVariant;
  outerVariant?: paperVariant;
  innerSx?: Record<string, unknown>;
  outerSx?: Record<string, unknown>;
  innerElevation?: number;
  outerElevation?: number;
  innerSquare?: boolean;
  outerSquare?: boolean;
  outerTheme?: paperTheme;
  innerTheme?: paperTheme;
  showOuterPaper?: boolean; // setting to 'true' will enable the Paper wrapper component that creates the background image offset effect
}

export const GRADIENT_BG = 'radial-gradient(circle at 8% 97%, #fcf4f4, #fff 43%) no-repeat';
