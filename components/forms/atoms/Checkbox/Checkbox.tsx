import { FormGroup, FormHelperText } from '@mui/material';
import MUICheckbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import React, { forwardRef } from 'react';

import { StyledTypography } from './Checkbox.styles';
import type { CheckboxProps } from './Checkbox.types';
import { CheckedIcon, UncheckedIcon } from './CheckboxIcon'; // <--- waiting for updated assets

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(function Checkbox(
  { checked, disabled, size, labelColor, label = 'placeholder', onChange, name, helperText, error, ...props },
  ref,
) {
  return (
    <FormGroup>
      <FormControlLabel
        onChange={onChange}
        control={
          <MUICheckbox
            icon={<UncheckedIcon />}
            checkedIcon={<CheckedIcon />}
            {...props}
            checked={checked}
            disabled={disabled}
            value={checked ? 'checked' : 'unchecked'}
            size={size}
            name={name}
            ref={ref}
            data-testid={`checkbox-${name}`}
          />
        }
        label={
          <StyledTypography color={labelColor} textVariant="body2">
            {label}
          </StyledTypography>
        }
      />
      {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </FormGroup>
  );
});
