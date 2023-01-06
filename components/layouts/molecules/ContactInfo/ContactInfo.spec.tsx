import React from 'react';

import { render, screen } from '#utils/testing-library';

import { ContactInfo } from './ContactInfo';

describe('ContactInfo', () => {
  it('renders the ContactInfo', () => {
    render(<ContactInfo />);
    expect(screen.getByText('customercare@rentprogress.com')).toBeInTheDocument();
  });
});
