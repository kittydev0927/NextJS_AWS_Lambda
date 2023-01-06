jest.mock('#auth/UseProfile');

import React from 'react';

import { render, screen } from '#utils/testing-library';

import { SecurityDeposit, SecurityDescription, SecurityTitle } from './SecurityDeposit';

describe('Security', () => {
  it('renders the Security', () => {
    // Act
    const maxRent = 2500;
    render(<SecurityDeposit maxRent={maxRent} />);
    // Assert
    expect(screen.getByText(/Your security deposit is/iu)).toBeInTheDocument();
  });
});

describe('SecurityTitle test', () => {
  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  const maxRent = 2500;
  const monthlyAmount = currency.format(maxRent);
  const createWrapper = (isBig: boolean) => <SecurityTitle isBig={isBig} monthlyAmount={monthlyAmount} />;

  it('render sm breakpoints', () => {
    render(createWrapper(false));
    expect(screen.getByText(/Your security deposit is/iu)).toBeDefined();
  });

  it('render sm breakpoints up', () => {
    render(createWrapper(true));
    expect(screen.getByText(/Your security deposit is:/iu)).toBeDefined();
  });
});

describe('SecurityDescription test', () => {
  const createWrapper = (isBig: boolean) => <SecurityDescription isBig={isBig} />;

  it('render SecurityDescription sm breakpoints', () => {
    render(createWrapper(false));
    expect(screen.getByText('Once your deposit is paid, the house will officially be off the market!')).toBeDefined();
  });

  it('render SecurityDescription sm breakpoints up', () => {
    render(createWrapper(true));
    expect(
      screen.getByText(
        'Once the deposit has been paid, we’ll remove the home from the market so no one else can apply for it.',
      ),
    ).toBeDefined();
  });
});
