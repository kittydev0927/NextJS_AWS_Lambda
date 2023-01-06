import React from 'react';

import { render, screen } from '#utils/testing-library';

import { Colors } from './Colors';

describe('Colors', () => {
  it('Finds rendered Colors component.', async () => {
    render(<Colors></Colors>);

    expect(await screen.findByTestId('Colors-Container')).toBeInTheDocument();
  });
});
