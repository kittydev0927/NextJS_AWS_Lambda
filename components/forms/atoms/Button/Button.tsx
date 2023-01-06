import MUIButton from '@mui/material/Button';
import React, { forwardRef } from 'react';

import type { ButtonProps } from './Button.types';

export const Button = forwardRef<HTMLButtonElement | null, ButtonProps>(function Button(
  { children, disabled, fullWidth, onClick, size, variant, ...props }: ButtonProps,
  ref,
) {
  return (
    <MUIButton
      data-testid="button-component"
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      ref={ref}
      size={size}
      variant={variant}
      {...props}
    >
      {children}
    </MUIButton>
  );
});
