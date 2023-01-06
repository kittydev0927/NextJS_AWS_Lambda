import React from 'react';

import { render, screen } from '#utils/testing-library';

import { Footer } from './Footer';

describe('Footer', () => {
  it('renders the Footer', () => {
    render(<Footer />);
    expect(screen.getByTestId('InstagramIcon')).toBeInTheDocument();
  });
});
