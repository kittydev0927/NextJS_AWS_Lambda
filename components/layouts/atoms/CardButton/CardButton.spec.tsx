import React from 'react';

import { render } from '#utils/testing-library';

import { CardButton } from './CardButton';

describe('CardButton', () => {
  it('renders the CardButton', () => {
    const { getByText } = render(<CardButton>Hello World</CardButton>);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
