import type { IconButtonProps as MuiIconButtonProps } from '@mui/material';

export interface IconButtonProps extends MuiIconButtonProps {
  userName?: string;
  defaultText?: string;
}
