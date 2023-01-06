import React from 'react';

import { fireEvent, render, screen } from '#utils/testing-library';

import { Slider } from './Slider';

describe('Slider', () => {
  it('renders the Slider', () => {
    render(<Slider />);
    expect(screen.getByTestId('range-slider')).toBeInTheDocument();
  });

  it('Should have the correct value', () => {
    const minValue = 10;
    const maxValue = 70;
    render(<Slider value={[minValue, maxValue]} />);
    expect(screen.getByTestId('range-slider')).toBeInTheDocument();
    expect(screen.getByTestId('min-value-slider')).toHaveTextContent(`Min: $${minValue}`);
    expect(screen.getByTestId('max-value-slider')).toHaveTextContent(`Max: $${maxValue}`);
  });

  it('should call handler when slider range is updated', async () => {
    const minValue = 10;
    const maxValue = 30;
    const value: [number, number] = [minValue, maxValue];

    render(<Slider value={value} onChange={jest.fn()} />);

    // TODO: Use `userEvent` rather than `fireEvent`.
    // I've spent about an hour on this and failed. The problem is that userEvent
    // tries to simulate user interaction, and we need to interact with the MUI
    // slider, which is complicated and does not expose any obvious interaction
    // hooks that I can find.
    const rangeSliderValue = screen.getAllByRole('slider')[0] as HTMLInputElement;
    fireEvent.change(rangeSliderValue, { target: { value: minValue } });
    expect(rangeSliderValue.value).toBe(minValue.toString());
  });
});
