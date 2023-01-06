import React from 'react';

import { render, screen } from '#utils/testing-library';

import { CircularProgress } from './CircularProgress';

describe('Circular Progress', () => {
  it('renders the CircularProgress Component', () => {
    render(<CircularProgress />);
    expect(screen.getByTestId('circular-progress')).toBeInTheDocument();
  });

  it('renders the Circular Progress Tracker Base', () => {
    render(<CircularProgress />);
    expect(screen.getByTestId('percentage-progress-tracker-base')).toBeInTheDocument();
  });

  it('renders lime Percentage Progress Tracker', () => {
    render(<CircularProgress />);
    expect(screen.getByTestId('percentage-progress-tracker')).toBeInTheDocument();
  });

  it('receives props', () => {
    render(<CircularProgress currentStep={3} totalSteps={10} />);
    expect(screen.getByTestId('percentage')).toBeInTheDocument();
    expect(screen.getByTestId('percentage')).toHaveTextContent('30%');
  });

  it('uses default props', () => {
    render(<CircularProgress />);
    expect(screen.getByTestId('percentage')).toHaveTextContent('0%');
  });
});
