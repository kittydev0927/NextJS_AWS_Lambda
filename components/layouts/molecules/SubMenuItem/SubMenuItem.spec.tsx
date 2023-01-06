import React from 'react';

import { render } from '#utils/testing-library';

import { SubMenuItem } from './SubMenuItem';

describe('SubMenuItem', () => {
  it('renders an active SubMenuItem', () => {
    const { getByText } = render(<SubMenuItem href="#" label="Dashboard" />);
    expect(getByText('Dashboard')).toBeInTheDocument();
  });
});
