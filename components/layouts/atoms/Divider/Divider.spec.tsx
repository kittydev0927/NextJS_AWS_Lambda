import React from 'react';

import { render, screen } from '#utils/testing-library';

import { Divider } from './Divider';

describe('Divider', () => {
  it('displays correct text props when text is provided', () => {
    render(<Divider>Test Divider</Divider>);
    expect(screen.getByText('Test Divider')).toBeInTheDocument();
  });

  it('render with Or Text', () => {
    render(<Divider customText={'Or'}></Divider>);
    expect(screen.getByText('Or')).toBeInTheDocument();
  });
});
