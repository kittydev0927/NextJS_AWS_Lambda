import userEvent from '@testing-library/user-event';
import React from 'react';

import { act, render, screen } from '#utils/testing-library';

import { DatePicker } from './DatePicker';

describe('DatePicker', () => {
  it('renders the DatePicker', () => {
    // Arrange
    const onChange = jest.fn();
    const value = new Date();

    // Act
    render(<DatePicker onChange={onChange} value={value} label="" onError={jest.fn()} />);

    // Assert
    expect(screen.queryByTestId('date-picker')).toBeVisible();
  });

  it('onChange was called', async () => {
    // Arrange
    const onChange = jest.fn();
    const value = new Date();
    const component = render(<DatePicker onChange={onChange} value={value} label="" onError={jest.fn()} />);

    // Act
    await act(async () => {
      const datePicker = await component.findByTestId('date-picker');
      const input = datePicker.querySelector('input');

      if (!input) {
        throw new Error('Could not resolve input');
      }

      userEvent.clear(input);
      userEvent.type(input, '03/10/2021');
      userEvent.tab();
    });

    // Assert
    expect(onChange).toHaveBeenCalled();
  });
});
