import React from 'react';

import { sampleProperty } from '#utils/samplePropertyData';
import { render, screen } from '#utils/testing-library';

import SmallPropertyCard from './SmallPropertyCard';

describe('SmallPropertyCard', () => {
  it('renders the Property Image', () => {
    render(<SmallPropertyCard property={sampleProperty} />);
    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();
  });
});
