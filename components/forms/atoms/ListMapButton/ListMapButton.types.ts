import type { ToggleButtonGroupProps as MuiButtonProps } from '@mui/material';

export interface ListMapButtonProps extends MuiButtonProps {
  value?: 'list' | 'map';
  disabled?: boolean;
  onChange?: (event: React.MouseEvent<HTMLElement>, newDisplay: string) => void;
}
