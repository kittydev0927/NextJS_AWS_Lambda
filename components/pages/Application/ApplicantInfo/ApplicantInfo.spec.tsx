jest.mock('#auth/UseRouteUnauthenticated');
jest.mock('next/router');
jest.mock('use-debounce');

// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import { useDebouncedCallback } from 'use-debounce';

import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import type { ISampleData } from '#utils/sampleApplicationPageData';
import { sampleApplicationPageData } from '#utils/sampleApplicationPageData';
import { act, render, screen } from '#utils/testing-library';

import { ApplicantInfo } from './ApplicantInfo';

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

describe('Profile Wrapper', () => {
  it('renders the Component', () => {
    render(<ApplicantInfo pageData={sampleApplicationPageData as unknown as ISampleData} />);
    expect(screen.getByTestId('applicant-info-page')).toBeInTheDocument();
  });

  it('navigates to /application/lease-details when the previous button is pressed', async () => {
    // Arrange
    const component = render(<ApplicantInfo pageData={sampleApplicationPageData as unknown as ISampleData} />);

    // Act
    await act(async () => {
      userEvent.click(await component.findByTestId('previous button'));
    });

    // Assert
    expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('/lease-details'));
  });
});
