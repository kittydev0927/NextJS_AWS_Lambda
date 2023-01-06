import React from 'react';

import { fireEvent, render, screen } from '#utils/testing-library';

import { TextField } from './TextField';

describe('TextField', () => {
  it('renders the TextField', () => {
    render(<TextField value={'Hello!'} />);
    expect(screen.getByDisplayValue('Hello!')).toBeInTheDocument();
  });
  it('renders the TextField as password type', () => {
    render(<TextField type={'password'} value={'password'} />);
    fireEvent(
      screen.getByRole('button'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    fireEvent.mouseDown(screen.getByRole('button'));
    expect(screen.getByDisplayValue('password')).toBeInTheDocument();
  });
});
