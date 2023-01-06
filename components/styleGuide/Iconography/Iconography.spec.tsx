import React from 'react';

import { render, screen } from '#utils/testing-library';

import { IconographyComponent } from './Iconography';

describe('Iconography', () => {
  it('Finds rendered Iconography component.', async () => {
    render(<IconographyComponent></IconographyComponent>);

    expect(await screen.findByTestId('Iconography-Container')).toBeInTheDocument();
  });
});
