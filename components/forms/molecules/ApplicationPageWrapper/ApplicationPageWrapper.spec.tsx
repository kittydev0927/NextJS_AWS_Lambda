/* eslint-disable @typescript-eslint/no-magic-numbers */

jest.mock('next/router');
jest.mock('use-debounce');

import userEvent from '@testing-library/user-event';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';

import { render, screen } from '#utils/testing-library';

import { ApplicationPageWrapper } from './ApplicationPageWrapper';

type IRouter = ReturnType<typeof useRouter>;
const mockUseRouter = jest.mocked(useRouter);
const mockPrefetch = jest.fn<Promise<void>, Parameters<IRouter['prefetch']>>();
const mockPush = jest.fn<Promise<boolean>, Parameters<IRouter['push']>>();
const mockRouter = { prefetch: mockPrefetch, push: mockPush } as unknown as NextRouter;

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
  mockUseRouter.mockReturnValue(mockRouter);
});

describe('Profile Wrapper', () => {
  it('renders the component', () => {
    render(<ApplicationPageWrapper />);
    expect(screen.getByTestId('applicant-page-wrapper')).toBeInTheDocument();
  });

  it('opens and closes sidebar', async () => {
    render(<ApplicationPageWrapper />);
    setTimeout(() => {
      const closeModal = screen.getByTestId('tips-button');
      expect(closeModal).toBeInTheDocument();
      userEvent.click(closeModal);
    }, 200);
  });

  it('floating button location applies', async () => {
    render(<ApplicationPageWrapper step={2} />);
    setTimeout(() => {
      const closeModal = screen.getByTestId('tips-button');
      expect(closeModal).toBeInTheDocument();
      expect(screen.getByTestId('tips-button')).toHaveStyle(`top: 0`);
      expect(screen.getByTestId('tips-button')).toHaveStyle(`right: 5`);
    }, 200);
  });

  it('navigates to "" when the "next" button is pressed', async () => {
    render(<ApplicationPageWrapper step={2} />);
    setTimeout(() => {
      expect(screen.findByTestId('next button')).toBeInTheDocument();
      userEvent.click(screen.getByTestId('next button'));
    }, 200);
  });

  it('navigates to "" when the "back" button is pressed', async () => {
    setTimeout(() => {
      render(<ApplicationPageWrapper step={2} />);
      expect(screen.getByTestId('previous button')).toBeInTheDocument();
      userEvent.click(screen.getByTestId('previous button'));
    }, 200);
  });
});
