import React from 'react';

import { theme } from '#styles/styles';
import { render, screen } from '#utils/testing-library';

import { Thumb } from './Thumb';

describe('Thumb', () => {
  it('renders the Thumb', () => {
    render(<Thumb color={theme.colors.accessibleGreen} rating="yes" />);
    expect(screen.getByTestId('thumb-icon')).toBeInTheDocument();
  });
});
