import React from 'react';

import { render } from '#utils/testing-library';

import { Typography } from './Typography';

describe('Typography', () => {
  it('renders the Typography', () => {
    const { getByText } = render(<Typography>Hello World</Typography>);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
