import userEvent from '@testing-library/user-event';
import React from 'react';

import { act, render } from '#utils/testing-library';

import { BedroomSelector } from './BedroomSelector';
import { BEDROOM_SELECTOR_OPTIONS } from './BedroomSelector.types';

describe('BedroomSelector', () => {
  const title = 'Select Bedrooms';
  const plusButtonClassName = 'ProfileBuilderFirstStep_plusButton';
  const returnFalse = () => false;

  it('was rendered', () => {
    // Act
    const component = render(<BedroomSelector value={[]} onSelectedOptions={returnFalse} />);

    // Assert
    expect(component.getByPlaceholderText(title)).toBeInTheDocument();
  });

  it('plus button', async () => {
    // Arrange
    const component = render(<BedroomSelector value={[]} onSelectedOptions={returnFalse} />);

    // Act
    await act(async () => {
      const plusButton = await component.findByTestId(plusButtonClassName);
      userEvent.click(plusButton);
    });

    // Assert
    const option = await component.findByText(BEDROOM_SELECTOR_OPTIONS[0].label);
    expect(option).toBeInTheDocument();
  });

  it('option was selected, popup was closed', async () => {
    // Arrange
    const component = render(<BedroomSelector onSelectedOptions={returnFalse} />);

    // Act
    await act(async () => {
      const plusButton = await component.findByTestId(plusButtonClassName);
      userEvent.click(plusButton);

      const selection = await component.findByText(BEDROOM_SELECTOR_OPTIONS[0].label);
      userEvent.click(selection);
    });

    // Assert
    const checked = await component.findByRole('checkbox', { checked: true });
    expect(checked).toBeChecked();
  });

  it('renders selected options', async () => {
    // Arrange
    const value = BEDROOM_SELECTOR_OPTIONS[0];

    // Act
    const component = render(<BedroomSelector onSelectedOptions={returnFalse} value={[value]} />);

    // Assert
    const selected = await component.findByText(value.label);
    expect(selected).toBeInTheDocument();
  });
});
