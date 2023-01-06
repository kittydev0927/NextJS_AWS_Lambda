jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(() => {
    let val = 0;
    return [val, (value: number) => (val = value)];
  }),
}));
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';

import { RadioCheckBoxes } from '#components/forms/atoms/RadioCheckBoxes/RadioCheckBoxes';
import { act, render, screen } from '#utils/testing-library';

describe('RadioCheckBoxes', () => {
  const [checkedIndex, setCheckedIndex] = useState<number | null>(null);
  it('renders select', () => {
    render(
      <RadioCheckBoxes
        options={['Resident', 'Guarantor']}
        row={false}
        checkedIndex={checkedIndex}
        setCheckedIndex={setCheckedIndex}
      />,
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByTestId('radio-check-boxes')).toBeInTheDocument();
    expect(screen.getByTestId('checkbox-Resident')).toBeInTheDocument();
    expect(screen.getByTestId('checkbox-Guarantor')).toBeInTheDocument();
  });
  it('clicks checkbox', async () => {
    const component = render(
      <RadioCheckBoxes
        options={['Resident', 'Guarantor']}
        row={false}
        checkedIndex={checkedIndex}
        setCheckedIndex={setCheckedIndex}
      />,
    );
    await act(async () => {
      userEvent.click(await component.findByTestId('checkbox-Resident'));
    });
    expect(screen.getByTestId('checkbox-Resident')).toBeInTheDocument();
  });
});
