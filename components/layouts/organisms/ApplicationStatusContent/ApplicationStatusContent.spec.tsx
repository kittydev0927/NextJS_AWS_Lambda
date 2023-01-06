jest.mock('#auth/UseRouteUnauthenticated');
jest.mock('next/router');
jest.mock('use-debounce');

import userEvent from '@testing-library/user-event';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { act, render, screen } from '#utils/testing-library';

import { ApplicationStatusContent } from './ApplicationStatusContent';

type IRouter = ReturnType<typeof useRouter>;
const mockUseRouter = jest.mocked(useRouter);
const mockPrefetch = jest.fn<Promise<void>, Parameters<IRouter['prefetch']>>();
const mockPush = jest.fn<Promise<boolean>, Parameters<IRouter['push']>>();
const mockRouter = { prefetch: mockPrefetch, push: mockPush } as unknown as NextRouter;
const mockUseDebouncedCallback = jest.mocked(useDebouncedCallback);
const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
  mockUseRouter.mockReturnValue(mockRouter);
  mockUseRouteUnauthenticated.mockReturnValue(true);
  mockUseDebouncedCallback.mockImplementation(
    func => ((...args: unknown[]) => func(...args)) as unknown as ReturnType<typeof useDebouncedCallback>,
  );
});

describe('ApplicationStatusContent', () => {
  it('renders ApplicationStatusContent', () => {
    render(<ApplicationStatusContent currentAppStatus={'processing'} />);
    expect(screen.getByText(/Your application is in the screening process right now./i)).toBeInTheDocument();
  });
  it('renders ApplicationStatusContent the denied view', () => {
    render(<ApplicationStatusContent currentAppStatus={'denied'} />);
    expect(screen.getByText(/We're sorry/i)).toBeInTheDocument();
  });
  it('renders ApplicationStatusContent the approved view', () => {
    render(<ApplicationStatusContent currentAppStatus={'approved'} />);
    expect(screen.getByText(/You've been approved/i)).toBeInTheDocument();
  });
  it('renders ApplicationStatusContent the submitted view', () => {
    render(<ApplicationStatusContent currentAppStatus={'submitted'} />);
    expect(screen.getByText(/Your application has been submitted/i)).toBeInTheDocument();
  });
  it('navigates to "Dashboard" when the "back" button is pressed', async () => {
    const component = render(<ApplicationStatusContent currentAppStatus={'approved'} />);

    await act(async () => {
      expect(await component.findByTestId('continue-button')).toBeInTheDocument();
      userEvent.click(await component.findByTestId('continue-button'));
    });
  });
});
