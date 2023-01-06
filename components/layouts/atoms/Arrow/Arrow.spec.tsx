import React from 'react';

import { render, screen } from '#utils/testing-library';

import { Arrow } from './Arrow';

describe('Arrow', () => {
  it('renders the Arrow', () => {
    render(<Arrow />);
    expect(screen.getByTestId('arrow-icon')).toBeInTheDocument();
  });
});
