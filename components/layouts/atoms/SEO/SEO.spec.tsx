import React from 'react';

import { render } from '#utils/testing-library';

import { SEO } from './SEO';

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactElement[] }) => {
      return <>{children}</>;
    },
  };
});

describe('SEO', () => {
  it('renders the SEO', () => {
    const title = 'From Next Seo';
    render(<SEO title={title} />, {
      container: document.head,
    });
    expect(document.title).toBe(title);
  });
});
