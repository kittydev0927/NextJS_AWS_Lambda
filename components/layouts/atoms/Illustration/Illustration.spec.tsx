import React from 'react';

import { render, screen } from '#utils/testing-library';

import { Illustration } from './Illustration';

describe('Illustration', () => {
  it('renders the illustration.', () => {
    render(<Illustration src="/image-sign-in.png" width={200} height={140} />);
    const displayedImage = screen.getByRole('img');
    expect(displayedImage).toBeInTheDocument();
  });
});
