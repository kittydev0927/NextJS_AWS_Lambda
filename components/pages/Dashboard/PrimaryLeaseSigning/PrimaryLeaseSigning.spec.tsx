jest.mock('#auth/UseProfile');

import React from 'react';

import { render, screen } from '#utils/testing-library';

import { PrimaryLeaseSigning } from './PrimaryLeaseSigning';

describe('PrimaryLeaseSigning', () => {
  it('renders the PrimaryLeaseSigning', () => {
    // Act
    const maxRent = 3400;
    render(<PrimaryLeaseSigning maxRent={maxRent} />);
    // Assert
    expect(screen.getByText(/Lease Signing/iu)).toBeInTheDocument();
  });
});

describe('PrimaryLeaseSigning test', () => {
  it('renders the PrimaryLeaseSigning link', () => {
    // Act
    const maxRent = 3400;
    render(<PrimaryLeaseSigning maxRent={maxRent} />);
    // Assert
    expect(screen.getByText(/total due at signing/iu)).toBeInTheDocument();
  });
});

describe('PrimaryLeaseSigning button test', () => {
  it('renders the PrimaryLeaseSigning button', () => {
    // Act
    const maxRent = 3400;
    render(<PrimaryLeaseSigning maxRent={maxRent} />);
    // Assert
    expect(screen.getByText(/View Itemized Cost Sheet/iu)).toBeInTheDocument();
  });
});

describe('PrimaryLeaseSigning Rent Amount test', () => {
  it('renders the PrimaryLeaseSigning Rent Amount', () => {
    // Act
    const maxRent = 3400;
    const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    const formattedMaxRent = currency.format(maxRent);
    render(<PrimaryLeaseSigning maxRent={maxRent} />);
    // Assert
    expect(screen.getByText(formattedMaxRent)).toBeInTheDocument();
  });
});
