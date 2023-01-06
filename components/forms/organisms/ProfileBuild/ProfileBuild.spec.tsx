import React from 'react';

import { render, screen } from '#utils/testing-library';

import { ProfileBuild } from './ProfileBuild';

describe('ProfileBuild', () => {
  it('renders the Profile Build overlay', () => {
    const props = {
      user: {
        firstName: 'Samantha',
        lastName: 'Smith',
      },
    };
    render(<ProfileBuild {...props} />);
    expect(screen.queryByText(/Homes are going fast/i)).toBeInTheDocument();
  });
});
