import React from 'react';

import { render, screen } from '#utils/testing-library';

import { ImageContainer } from './ImageContainer';

describe('ImageContainer', () => {
  it('renders the ImageContainer', () => {
    render(<ImageContainer />);
    expect(screen.getByText(/being prepared/i)).toBeInTheDocument();
  });
});
