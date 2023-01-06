import type { ButtonProps as MuiButtonProps } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    inactive: true;
    noBackground: true;
  }
}

export interface ButtonProps extends MuiButtonProps {
  variant?: 'outlined' | 'text' | 'primary' | 'secondary' | 'inactive' | 'noBackground';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  sx?: Record<string, unknown>;
}
