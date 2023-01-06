import { DesktopDatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import type { TextFieldProps } from '@mui/material/TextField';
import TextField from '@mui/material/TextField';
import React from 'react';

import { StyledIcon, StyledPicker } from './DatePicker.style';
import type { DatePickerProps } from './DatePicker.types';

export const DatePicker: React.FC<DatePickerProps> = ({ value, className, onError, onChange, label, minDate }) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <StyledPicker data-testid="date-picker" className={className}>
      <DesktopDatePicker
        label={label}
        minDate={minDate}
        onError={onError}
        value={value}
        onChange={onChange}
        components={{ OpenPickerIcon: StyledIcon }}
        renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
          <TextField
            {...params}
            inputProps={{
              ...params.inputProps,
              placeholder: 'MM/DD/YYYY',
            }}
            data-chromatic="ignore"
          />
        )}
      />
    </StyledPicker>
  </LocalizationProvider>
);
