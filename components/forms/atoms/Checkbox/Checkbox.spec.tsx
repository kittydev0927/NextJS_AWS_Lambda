import { FormControl, FormHelperText } from '@mui/material';
import React from 'react';

import { render, screen } from '#utils/testing-library';

import { Checkbox } from './Checkbox';
import { CheckedIcon, UncheckedIcon } from './CheckboxIcon';

describe('Checkbox', () => {
  it('renders the checkbox', () => {
    render(<Checkbox checked />);
    expect(screen.getByRole('checkbox')).toBeChecked();
    // expect(screen.queryByTestId('checked-icon')).toBeVisible(); // needs to be uncommented once final assets for checkboxes are available
  });

  it('renders correct svg when checked', () => {
    render(<Checkbox checked checkedIcon={<CheckedIcon />} />);
    expect(screen.queryByTestId('checked-icon')).toBeVisible();
  });

  it('renders correct svg when unchecked', () => {
    render(<Checkbox checked={false} icon={<UncheckedIcon />} />);
    expect(screen.queryByTestId('unchecked-icon')).toBeVisible();
  });

  it('displays error when "error" is set to "true"', () => {
    const errorText = 'error message';
    const errorState = true;
    render(
      <FormControl>
        <Checkbox error={errorState as boolean} />
        <FormHelperText error>{errorState ? errorText : ''}</FormHelperText>
      </FormControl>,
    );
    expect(screen.getByText(/error message/i)).toBeVisible();
  });
});
