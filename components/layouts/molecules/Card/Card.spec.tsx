import React from 'react';

import { render, screen } from '#utils/testing-library';

import { Card } from './Card';

describe('Card', () => {
  it('renders the Card', () => {
    render(<Card mediaImg="/image-sign-in.png"></Card>);
    const linkElement = screen.getByTestId('Card-Container');
    expect(linkElement).toBeInTheDocument();
  });
});
