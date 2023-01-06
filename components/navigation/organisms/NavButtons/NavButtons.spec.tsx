jest.mock('next/router');

import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import React from 'react';

import { render, screen } from '#utils/testing-library';

import { NavButtons } from './NavButtons';

const mockRouter = jest.mocked(useRouter);
const mockPush = jest.fn<Promise<boolean>, Parameters<ReturnType<typeof useRouter>['push']>>();

describe('NavButtons', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
    mockRouter.mockReturnValue({ push: mockPush } as unknown as NextRouter);
  });

  it('renders the NavButtons', () => {
    render(<NavButtons contextType="profile" />);
    expect(screen.getByText(/previous/i)).toBeInTheDocument();
  });
});
