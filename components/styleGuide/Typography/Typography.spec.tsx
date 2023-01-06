import React from 'react';

import { render, screen } from '#utils/testing-library';

import { TypographyComponent } from './Typography';

describe('Typography', () => {
  it('Finds rendered Typography component.', async () => {
    render(<TypographyComponent></TypographyComponent>);

    expect(await screen.findByTestId('Typography-Container')).toBeInTheDocument();
  });
});
