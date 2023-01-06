jest.mock('#auth/UseRouteUnauthenticated');
jest.mock('next/router');
jest.mock('use-debounce');

import userEvent from '@testing-library/user-event';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import { useDebouncedCallback } from 'use-debounce';

import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { COMPLETE_APPLICANTS } from '#components/pages/Application/Income/constants';
import type { ISampleData } from '#utils/sampleApplicationPageData';
import { sampleApplicationPageData } from '#utils/sampleApplicationPageData';
import { act, render, screen, waitFor } from '#utils/testing-library';

import { Income } from './Income';
import { IncomeTips } from './IncomeTips';

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

describe('Renders the Income Page', () => {
  it('renders the Component', () => {
    render(<Income applicants={COMPLETE_APPLICANTS} pageData={sampleApplicationPageData as unknown as ISampleData} />);
    expect(screen.getByTestId('income-page')).toBeInTheDocument();
  });

  it('should show modal if click on link', async () => {
    const component = render(
      <Income applicants={COMPLETE_APPLICANTS} pageData={sampleApplicationPageData as unknown as ISampleData} />,
    );
    await waitFor(async () => {
      expect(await component.findByTestId('invite-applicants-link')).toBeInTheDocument();
      userEvent.click(await component.findByTestId('invite-applicants-link'));
      expect(screen.getByTestId('invite-applicants-modal')).toBeInTheDocument();
    });
  });
  it('navigates to /application/additional-information when the previous button is pressed', async () => {
    // Arrange
    const component = render(
      <Income applicants={COMPLETE_APPLICANTS} pageData={sampleApplicationPageData as unknown as ISampleData} />,
    );

    // Act
    await act(async () => {
      userEvent.click(await component.findByTestId('previous button'));
    });

    // Assert
    expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('/additional-information'));
  });
});

describe('Income Tips component', () => {
  it('renders the Income Tips component', () => {
    render(<IncomeTips />);
    expect(
      screen.getByText('All applicants will need the following documents to complete the applicantion:'),
    ).toBeInTheDocument();
  });
});
