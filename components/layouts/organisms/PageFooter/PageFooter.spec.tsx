import React from 'react';

import { render, screen } from '#utils/testing-library';

import { PageFooter } from './PageFooter';

describe('Footer', () => {
  it('renders the Footer', () => {
    render(<PageFooter infoText="2022. All Rights Reserved Progress Residential ®" />);
    expect(screen.getByTestId('page-footer')).toBeInTheDocument();
  });
});
