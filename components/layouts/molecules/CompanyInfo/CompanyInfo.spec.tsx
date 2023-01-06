import React from 'react';

import { render, screen } from '#utils/testing-library';

import { CompanyInfo } from './CompanyInfo';

describe('CompanyInfo', () => {
  it('renders the CompanyInfo', () => {
    render(<CompanyInfo />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });
});
