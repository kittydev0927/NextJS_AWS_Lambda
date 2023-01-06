import React from 'react';

import { render } from '#utils/testing-library';

import { PortalSubMenu } from './PortalSubMenu';

const items = [
  {
    active: true,
    color: '#ffffff',
    href: '/dashboard',
    label: 'Dashboard',
    sx: {},
  },
  {
    active: false,
    color: '#ffffff',
    href: '/saved',
    label: 'Saved Homes',
    sx: {},
  },
  {
    active: false,
    color: '#ffffff',
    href: `/profile/estimated-move-in-date`,
    label: 'Profile Builder',
    sx: {},
  },
  {
    active: false,
    color: '#ffffff',
    href: '/tours',
    label: 'My Tours',
    sx: {},
  },
];

describe('PortalSubMenu', () => {
  it('renders the PortalSubMenu', () => {
    const { getByText } = render(<PortalSubMenu items={items} />);
    expect(getByText('Dashboard')).toBeInTheDocument();
  });

  it('renders the PortalSubMenu with resident items', () => {
    const { getByText } = render(<PortalSubMenu resident items={items} />);
    expect(getByText('Dashboard')).toBeInTheDocument();
  });
});
