import React from 'react';

import { render, screen } from '#utils/testing-library';

import { SearchField } from './SearchField';

describe('SearchField', () => {
  it('Finds rendered SearchField component.', async () => {
    render(<SearchField></SearchField>);

    expect(await screen.findByTestId('SearchField-Container')).toBeInTheDocument();
  });
});
