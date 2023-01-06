import React from 'react';

import { render } from '#utils/testing-library';

import { DashboardButton } from './DashboardButton';

describe('DashboardButton', () => {
  it('renders the DashboardButton', () => {
    const { getByText } = render(<DashboardButton>Hello World</DashboardButton>);
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  it('renders the DashboardButton with isNewTabLink prop', () => {
    const { getByText } = render(<DashboardButton isNewTabLink>Hello World</DashboardButton>);
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  it('renders the DashboardButton with disabled prop', () => {
    const { getByText } = render(<DashboardButton disabled>Hello World</DashboardButton>);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
