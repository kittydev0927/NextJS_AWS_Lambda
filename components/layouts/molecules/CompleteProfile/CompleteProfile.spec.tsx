jest.mock('#auth/UseProfile');

import React from 'react';

import type { IProfile } from '#auth/IProfile';
import { useProfile } from '#auth/UseProfile';
import { render, screen } from '#utils/testing-library';

import { CompleteProfile } from './CompleteProfile';

const mockUseProfile = jest.mocked(useProfile);

describe('Profile', () => {
  it('renders the Profile', () => {
    // Arrange
    const maxRent = 2000;
    const moveInDate = new Date();
    moveInDate.setFullYear(moveInDate.getFullYear() + 1);

    const profile: IProfile = {
      desiredBedrooms: new Set([1, 2]),
      maxRent,
      moveInDate,
      preferredLocations: new Set(['Ankh-Morpork']),
    };

    mockUseProfile.mockReturnValue(profile);

    // Act
    render(<CompleteProfile />);

    // Assert
    expect(screen.getByText(/Your Profile/iu)).toBeInTheDocument();
    expect(screen.getByText(/1\+,\s+2\+/iu)).toBeInTheDocument();
    expect(screen.getByText(/\$2,000/iu)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(moveInDate.getFullYear().toString(), 'iu'))).toBeInTheDocument();
    expect(screen.getByText(/Ankh-Morpork/iu)).toBeInTheDocument();
  });
});
