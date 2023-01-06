jest.mock('#auth/UseProfile');

import React from 'react';

import { render, screen } from '#utils/testing-library';

import { CongratulationsComponent } from './CongratulationsComponent';

describe('CongratulationsComponent button test', () => {
  it('renders the CongratulationsComponent button', () => {
    // Act
    render(<CongratulationsComponent />);
    // Assert
    expect(screen.getByText(/Contact Onboarding Team/iu)).toBeInTheDocument();
  });
});
