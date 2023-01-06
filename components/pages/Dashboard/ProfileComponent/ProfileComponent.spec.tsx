import React from 'react';

import { render, screen } from '#utils/testing-library';

import { ProfileComponent } from './ProfileComponent';

describe('Profile Component', () => {
  it('renders the Profile Component incomplete status', () => {
    const { container } = render(<ProfileComponent profileTestingVal={1} />);
    expect(container.innerHTML).toBe('');
  });
  it('renders the Profile Component complete status', () => {
    render(<ProfileComponent profileTestingVal={-1} />);
    expect(screen.getByTestId('complete-profile')).toBeInTheDocument();
  });
  it('renders the Profile Component loading status', () => {
    render(<ProfileComponent profileTestingVal={-2} />);
    expect(screen.getByTestId('loading-profile')).toBeInTheDocument();
  });
});
