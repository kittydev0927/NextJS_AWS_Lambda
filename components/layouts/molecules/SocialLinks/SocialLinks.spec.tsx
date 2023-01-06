import React from 'react';

import { render, screen } from '#utils/testing-library';

import { SocialLinks } from './SocialLinks';

describe('SocialLinks', () => {
  it('renders the Facebook Icon', () => {
    render(<SocialLinks />);
    const fb = screen.queryByTestId('FacebookIcon');
    expect(fb).toBeInTheDocument();
  });
});
