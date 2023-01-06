import React from 'react';

import { footerLinks } from '#utils/placeholderLinks';
import { render, screen } from '#utils/testing-library';

import { LinksList } from './LinksList';

describe('Link List', () => {
  it('renders the Link List', () => {
    render(<LinksList />);
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
  });
  it('renders the list of links when links prop is provided', () => {
    render(<LinksList links={footerLinks} />);
    expect(screen.getByText('Pets')).toBeInTheDocument();
  });
});
