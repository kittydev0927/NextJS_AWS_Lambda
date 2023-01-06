import React from 'react';

import { theme } from '#styles/styles';
import { createMatchMedia } from '#tests/createMatchMedia';
import { render, screen } from '#utils/testing-library';

import { HeaderApplication } from './HeaderApplication';

describe('HeaderApplication', () => {
  it('renders the HeaderApplication', () => {
    render(<HeaderApplication />);
    expect(screen.getByAltText(/Progess Residential Logo/i)).toBeInTheDocument();
  });

  it('renders correctly for mobile', () => {
    window.matchMedia = createMatchMedia(theme.breakpoints.values.sm);
    render(<HeaderApplication />);
    expect(screen.getByText(/833.774.7377/i)).not.toBeVisible();
  });
});
