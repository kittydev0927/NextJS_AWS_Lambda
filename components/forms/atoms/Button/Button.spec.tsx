import React from 'react';

import { render } from '#utils/testing-library';

import { Button } from './Button';

describe('Button', () => {
  it('renders the button', () => {
    const { getByText } = render(<Button>Hello World</Button>);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
