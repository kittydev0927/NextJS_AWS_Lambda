import type { SelectProps as MUISelectProps } from '@mui/material';

export interface SelectProps extends MUISelectProps {
  options?: {
    value: string | number;
    label: string | number;
  }[];
}
