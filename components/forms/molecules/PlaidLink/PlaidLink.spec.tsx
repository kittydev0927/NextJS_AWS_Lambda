import React from 'react';

import { render, screen } from '#utils/testing-library';

import { PlaidLink } from './PlaidLink';

describe('PlaidLink', () => {
  it('renders the PlaidLink', () => {
    const mockSuccessHandler = jest.fn();
    render(<PlaidLink onSuccess={mockSuccessHandler} />);
    expect(screen.getByTestId('plaid-link')).toBeInTheDocument();
  });
});
