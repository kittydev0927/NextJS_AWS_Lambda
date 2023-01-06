import { useMediaQuery } from '@mui/material';
jest.mock('#auth/UseProfile');

import React from 'react';

import { render, screen } from '#utils/testing-library';

import { AdditionalApplicantSign } from './AdditionalApplicantSign';

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn().mockReturnValue(true),
}));

describe('AdditionalApplicantSign', () => {
  it('renders the AdditionalApplicantSign in mobile size', () => {
    (useMediaQuery as unknown as jest.Mock).mockReturnValue(true);
    render(<AdditionalApplicantSign />);
    expect(screen.getByText(/Your application is complete! Now it’s time to sign your lease/iu)).toBeInTheDocument();
  });

  it('renders the AdditionalApplicantSign in desktop size', () => {
    // Act
    render(<AdditionalApplicantSign />);
    // Assert
    (useMediaQuery as unknown as jest.Mock).mockReturnValue(false);
    expect(screen.getByText(/Your application is complete! Now it’s time to sign your lease/iu)).toBeInTheDocument();
  });
});
