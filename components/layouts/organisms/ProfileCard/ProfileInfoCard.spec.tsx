import React from 'react';

import { ProfileInfoCard } from '#components/layouts/organisms/ProfileCard/ProfileInfoCard';
import { render, screen } from '#utils/testing-library';

describe('ProfileInfoCard', () => {
  it('ProfileInfoCard rendered', () => {
    render(<ProfileInfoCard />);

    expect(screen.getByTestId('profile-info-card')).toBeInTheDocument();
  });

  it('Header exist', () => {
    render(<ProfileInfoCard />);

    expect(screen.getByTestId('info-bar')).toBeInTheDocument();
  });
});
