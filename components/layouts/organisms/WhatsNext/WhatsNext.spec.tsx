import React from 'react';

import { render, screen } from '#utils/testing-library';

import { WhatsNext } from './WhatsNext';

describe('WhatsNext', () => {
  it('WhatsNext rendered', () => {
    render(<WhatsNext />);

    expect(screen.getByTestId('whats-next-content')).toBeInTheDocument();
  });

  it('WhatsNext header into the document', () => {
    const { getByText } = render(<WhatsNext />);
    expect(getByText("What's Next?")).toBeInTheDocument();
  });
});
