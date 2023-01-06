jest.mock('#auth/UseProfile');

import React from 'react';

import { render, screen } from '#utils/testing-library';

import { FinalPayment } from './FinalPayment';

describe('FinalPayment', () => {
  it('renders the FinalPayment', () => {
    // Act
    const maxRent = 3400;
    render(<FinalPayment maxRent={maxRent} />);
    // Assert
    expect(screen.getByText(/total due/iu)).toBeInTheDocument();
  });
});

describe('FinalPayment button test', () => {
  it('renders the FinalPayment button', () => {
    // Act
    const maxRent = 3400;
    render(<FinalPayment maxRent={maxRent} />);
    // Assert
    expect(screen.getByText(/View Itemized Cost Sheet/iu)).toBeInTheDocument();
  });
});

describe('FinalPayment Rent Amount test', () => {
  it('renders the FinalPayment Rent Amount', () => {
    // Act
    const maxRent = 3400;
    const formattedMaxRent = `$${maxRent.toFixed(2)}`;
    render(<FinalPayment maxRent={maxRent} />);
    // Assert
    expect(screen.getByText(formattedMaxRent)).toBeInTheDocument();
  });
});
