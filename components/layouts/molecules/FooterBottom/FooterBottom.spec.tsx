import React from 'react';

import { render, screen } from '#utils/testing-library';

import { FooterBottom } from './FooterBottom';

describe('FooterBottom', () => {
  it('renders footer bottom images', () => {
    render(<FooterBottom />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(1);
  });
});
