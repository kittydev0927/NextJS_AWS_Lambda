import React from 'react';

import { render, screen } from '#utils/testing-library';

import { ReservedComponent } from './ReservedComponent';

describe('Reserved Component', () => {
  it('renders the Reserved Component', () => {
    render(<ReservedComponent />);
    expect(screen.getByTestId('request-change-button')).toBeInTheDocument();
  });
});
