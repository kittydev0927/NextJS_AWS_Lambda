import React from 'react';

import { ToursCard } from '#components/layouts/organisms/ToursCard/ToursCard';
import { render, screen } from '#utils/testing-library';

describe('Tours Card', () => {
  it('Renders Tours Card', () => {
    render(<ToursCard />);
    expect(screen.getByTestId('tours-card')).toBeInTheDocument();
  });
});
