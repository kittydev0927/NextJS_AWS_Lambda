import type { CheckboxProps as MUICheckboxProps } from '@mui/material';
import type React from 'react';

export interface CheckboxProps extends Omit<MUICheckboxProps, 'onChange' | 'value'> {
  error?: boolean;
  helperText?: string;
  label?: string | number | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>;
  labelColor?: string;
  onChange?: (event: React.SyntheticEvent) => void;
  uncheckedIcon?: React.ReactNode;
  value?: string | number | boolean;
}
