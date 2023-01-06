import React from 'react';

import { render, screen } from '#utils/testing-library';

import { IconButton } from './IconButton';

describe('IconButton', () => {
  it('Renders the Icon button text', () => {
    render(<IconButton></IconButton>);
    const linkElement = screen.getByTestId('IconButton-Container');
    expect(linkElement).toBeInTheDocument();
  });

  it('displays a name when username prop is provided', () => {
    render(<IconButton userName="Leslie" />);
    expect(screen.getByText(/leslie/i)).toBeInTheDocument();
  });
});
