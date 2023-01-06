import React from 'react';

import { render, screen } from '#utils/testing-library';

import { NotificationBell } from './NotificationBell';

describe('NotificationBell', () => {
  it('renders the NotificationBell with red dot', () => {
    render(<NotificationBell newNotification />);
    expect(screen.getByTestId('notification-bell')).toBeInTheDocument();
    expect(screen.getByTestId('bell-red-icon')).toBeInTheDocument();
  });
});
