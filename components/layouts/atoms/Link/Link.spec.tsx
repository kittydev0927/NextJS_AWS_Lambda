import React from 'react';

import { render, screen } from '#utils/testing-library';

import { Link } from './Link';

describe('Link', () => {
  it('renders the Link', () => {
    render(<Link href="#">Hello World</Link>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
    const arrow = screen.queryByTestId('arrow-icon');
    expect(arrow).not.toBeInTheDocument();
  });

  it('renders the Link with arrow icon', () => {
    const { rerender } = render(
      <Link href="#" showArrow>
        Hello World
      </Link>,
    );
    expect(screen.getByText('Hello World')).toBeInTheDocument();
    let arrow = screen.queryByTestId('arrow-icon');
    expect(arrow).toBeInTheDocument();

    rerender(
      <Link href="#" showArrow alignArrow={'start'}>
        Hello World
      </Link>,
    );
    expect(screen.getByText('Hello World')).toBeInTheDocument();
    arrow = screen.queryByTestId('arrow-icon');
    expect(arrow).toBeInTheDocument();

    rerender(
      <Link href="#" showArrow alignArrow={'end'}>
        Hello World
      </Link>,
    );
    expect(screen.getByText('Hello World')).toBeInTheDocument();
    arrow = screen.queryByTestId('arrow-icon');
    expect(arrow).toBeInTheDocument();
  });
});
