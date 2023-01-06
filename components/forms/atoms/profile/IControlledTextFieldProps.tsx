import type { OutlinedTextFieldProps } from '@mui/material';

export interface IControlledTextFieldProps
  extends Pick<OutlinedTextFieldProps, 'fullWidth' | 'InputLabelProps' | 'label' | 'required'> {
  readonly setValue: (newValue: string) => void;
  readonly type?: 'password' | 'text' | 'email' | 'tel' | 'name';
  readonly helperText?: string;
  readonly value?: string | object | undefined | null;
  readonly noError?: boolean;
  readonly regexType?: 'ssn';
}
