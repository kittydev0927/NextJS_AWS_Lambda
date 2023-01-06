import React from 'react';

import { render, screen } from '#utils/testing-library';

import { BackToTop } from './BackToTop';

describe('BackToTop', () => {
  it('renders the BackToTop', () => {
    render(<BackToTop />);
    expect(screen.getByText('Back To Top')).toBeInTheDocument();
  });
});
