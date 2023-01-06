jest.mock('#auth/UseProfile');

import React from 'react';

import type { IProfile } from '#auth/IProfile';
import { useProfile } from '#auth/UseProfile';
import { render, screen } from '#utils/testing-library';

import { IncompleteProfile } from './IncompleteProfile';

const mockUseProfile = jest.mocked(useProfile);

describe('IncompleteProfile', () => {
  it('renders correctly', () => {
    // Arrange
    const profile: IProfile = {
      firstName: 'Leslie',
      lastName: 'Knope',
      emailAddress: 'lknope@pawneeparksandrec1.com',
      phoneNumber: '1111111111',
    };

    mockUseProfile.mockReturnValue(profile);

    // Act
    render(<IncompleteProfile />);

    // Assert
    expect(screen.getByText('Completing your profile helps us find you the home you’re dreaming of.')).toBeVisible();
  });

  it('returns null with no profile', () => {
    // Arrange
    mockUseProfile.mockReturnValue(undefined);

    // Act
    const { container } = render(<IncompleteProfile />);

    // Assert
    expect(container.innerHTML).toBe('');
  });
});
