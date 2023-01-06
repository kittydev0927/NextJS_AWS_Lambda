import React from 'react';

import { render, screen } from '#utils/testing-library';

import { LinksListSmall } from './LinksListSmall';

const smallLinkList = {
  text: 'Sample Typography',
  links: [
    { text: 'Home', url: 'https://www.rentprogress.com' },
    { text: 'About', url: 'https://www.rentprogress.com' },
    { text: 'Contact Us', url: 'https://www.rentprogress.com' },
  ],
};

describe('LinksListSmall', () => {
  it('renders the LinksListSmall', () => {
    render(<LinksListSmall text={smallLinkList.text} links={smallLinkList.links} />);
    expect(screen.getByText('Sample Typography')).toBeInTheDocument();
  });
});
