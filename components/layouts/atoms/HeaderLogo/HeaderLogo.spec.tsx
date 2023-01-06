import React from 'react';

import { render, screen } from '#utils/testing-library';

import { HeaderLogo } from './HeaderLogo';

describe('HeaderLogo', () => {
  it('Finds rendered Header Logo component.', async () => {
    render(<HeaderLogo></HeaderLogo>);
    expect(await screen.findByTestId('HeaderLogo-Container')).toBeInTheDocument();
  });

  it('renders the Logo with the correct src', () => {
    render(<HeaderLogo />);
    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();
  });
});
