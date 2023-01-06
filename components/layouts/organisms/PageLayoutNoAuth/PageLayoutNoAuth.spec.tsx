import React from 'react';

import { render, screen } from '#utils/testing-library';

import { PageLayoutNoAuth } from '../PageLayoutNoAuth/PageLayoutNoAuth';

describe('PageLayoutNoAuth', () => {
  it('renders the PageLayoutNoAuth', () => {
    render(<PageLayoutNoAuth />);
    expect(screen.getByTestId('page-layout')).toBeInTheDocument();
  });
});
