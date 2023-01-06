jest.mock('#auth/UseProfile');

import React from 'react';

import { render, screen } from '#utils/testing-library';

import { PendingSignatures } from './PendingSignatures';

describe('PendingSignatures', () => {
  it('renders the PendingSignatures', () => {
    // Act
    const maxRent = 3400;
    render(<PendingSignatures maxRent={maxRent} />);
    // Assert
    expect(screen.getByText(/Lease Signing/iu)).toBeInTheDocument();
  });
});

describe('PendingSignatures button test', () => {
  it('renders the PendingSignatures button', () => {
    // Act
    const maxRent = 3400;
    render(<PendingSignatures maxRent={maxRent} />);
    // Assert
    expect(screen.getByText(/View Itemized Cost Sheet/iu)).toBeInTheDocument();
  });
});

describe('PendingSignatures Rent Amount test', () => {
  it('renders the PendingSignatures Rent Amount', () => {
    // Act
    const maxRent = 3400;
    const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    const formattedMaxRent = currency.format(maxRent);
    render(<PendingSignatures maxRent={maxRent} />);
    // Assert
    expect(screen.getByText(formattedMaxRent)).toBeInTheDocument();
  });
});
