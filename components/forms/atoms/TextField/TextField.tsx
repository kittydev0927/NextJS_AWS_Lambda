import { InputAdornment } from '@mui/material';
import type { TextFieldProps } from '@mui/material/TextField/TextField';
import React, { forwardRef } from 'react';

import { PasswordTypeTextField } from './PasswordTypeTextField';
import { StyledTextField, StyledWarningSign } from './TextField.style';

export const TextField: React.FC<TextFieldProps> = forwardRef<HTMLDivElement, TextFieldProps>(function TextField(
  { type, error, InputProps, ...props },
  ref,
) {
  if (type === 'password') {
    return <PasswordTypeTextField error={error} inputRef={ref} {...props} />;
  }

  return (
    <StyledTextField
      {...props}
      inputRef={ref}
      error={error}
      InputProps={{
        endAdornment: error && (
          <InputAdornment position="end">
            <StyledWarningSign />
          </InputAdornment>
        ),
        ...InputProps,
      }}
    />
  );
});
