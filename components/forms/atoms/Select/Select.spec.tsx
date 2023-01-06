import React from 'react';

import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '#utils/testing-library';

import { Select } from './Select';

describe('Select', () => {
  const options = [
    {
      label: 'yes',
      value: 'yes',
    },
    {
      label: 'no',
      value: 'no',
    },
  ];

  it('renders select', () => {
    render(<Select options={options} name="name" />);
    expect(screen.getByTestId('select')).toBeInTheDocument();
  });

  it('renders with custom icon', () => {
    render(<Select options={options} name="name" />);
    expect(screen.getByTestId('select-icon')).toBeInTheDocument();
  });

  it('renders with options passed', async () => {
    render(<Select options={options} name="name" />);
    expect(screen.getByTestId('select')).toBeInTheDocument();
    const btnEl = screen.getByRole('button');
    fireEvent.mouseDown(btnEl);

    expect(screen.getByText('yes')).toBeInTheDocument();
    expect(screen.getByText('no')).toBeInTheDocument();
  });

  it('has selected value', async () => {
    render(<Select options={options} name="name" />);
    expect(screen.getByTestId('select')).toBeInTheDocument();
    const btnEl = screen.getByRole('button');
    expect(btnEl).not.toHaveTextContent('yes');

    fireEvent.mouseDown(btnEl);
    await waitFor(() => screen.getByText('yes'));
    fireEvent.click(screen.getByText('yes'));
    await waitForElementToBeRemoved(() => screen.getByText('no'));
    expect(btnEl).toHaveTextContent('yes');
  });
});
