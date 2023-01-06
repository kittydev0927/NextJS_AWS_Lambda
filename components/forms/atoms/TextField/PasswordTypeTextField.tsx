import { InputAdornment } from '@mui/material';
import React from 'react';

import type { PasswordTypeTextFieldProps } from './PasswordTypeTextField.types';
import { ShowHidePasswordIcon } from './ShowHidePasswordIcon';
import { StyledTextField } from './TextField.style';

export const PasswordTypeTextField: React.FC<PasswordTypeTextFieldProps> = props => {
  const [isPasswordTypeText, setIsPasswordTypeText] = React.useState(false);
  return (
    <StyledTextField
      {...props}
      inputRef={props.inputRef}
      error={props.error}
      type={isPasswordTypeText ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <ShowHidePasswordIcon statusWasChanged={isShown => setIsPasswordTypeText(isShown)} />
          </InputAdornment>
        ),
      }}
    />
  );
};
