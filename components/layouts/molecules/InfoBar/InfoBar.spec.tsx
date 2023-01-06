jest.mock('#auth/UseProfile');

import React from 'react';

import { useProfile } from '#auth/UseProfile';
import { render, screen } from '#utils/testing-library';

import { InfoBar } from './InfoBar';

const mockUseProfile = jest.mocked(useProfile);

describe('InfoBar', () => {
  it('renders the InfoBar', () => {
    mockUseProfile.mockReturnValue({ firstName: 'Samantha', lastName: 'Marsh' });
    render(<InfoBar showAccountIcon />);
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });

  describe('when not showing the account icon', () => {
    beforeEach(() => {
      render(<InfoBar infoText="Upcoming Tours" linkText="View All" />);
    });

    it('renders the info text', () => {
      expect(screen.getByText(/upcoming tours/i)).toBeInTheDocument();
    });

    it('renders the link text', () => {
      expect(screen.getByText(/view all/i)).toBeInTheDocument();
    });
  });
});
