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

import { Applicants } from './Applicants';

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
    render(
      <Applicants primaryApplicant applicants={[]} pageData={sampleApplicationPageData as unknown as ISampleData} />,
    );
    expect(screen.getByTestId('applicants-page')).toBeInTheDocument();
  });

  it('navigates to "" when the "next" button is pressed', async () => {
    const component = render(
      <Applicants primaryApplicant applicants={[]} pageData={sampleApplicationPageData as unknown as ISampleData} />,
    );
    await act(async () => {
      expect(await component.findByTestId('next button')).toBeInTheDocument();
      userEvent.click(await component.findByTestId('next button'));
    });
  });

  it('navigates to "" when the "back" button is pressed', async () => {
    const component = render(
      <Applicants primaryApplicant applicants={[]} pageData={sampleApplicationPageData as unknown as ISampleData} />,
    );
    await act(async () => {
      expect(await component.findByTestId('previous button')).toBeInTheDocument();
      userEvent.click(await component.findByTestId('previous button'));
    });
  });

  it('should show modal if click on link', async () => {
    const component = render(
      <Applicants primaryApplicant applicants={[]} pageData={sampleApplicationPageData as unknown as ISampleData} />,
    );
    await waitFor(async () => {
      expect(await component.findByTestId('invite-applicants-link')).toBeInTheDocument();
      userEvent.click(await component.findByTestId('invite-applicants-link'));
      expect(screen.getByTestId('invite-applicants-modal')).toBeInTheDocument();
    });
  });

  it('should display applicant cards', async () => {
    const component = render(
      <Applicants
        primaryApplicant
        applicants={COMPLETE_APPLICANTS}
        pageData={sampleApplicationPageData as unknown as ISampleData}
      />,
    );
    await act(async () => {
      expect(await component.findByText('Samantha Quake')).toBeInTheDocument();
    });
  });

  it('displays the correct view for coapplicant', () => {
    render(
      <Applicants
        primaryApplicant={false}
        applicants={[]}
        pageData={sampleApplicationPageData as unknown as ISampleData}
      />,
    );
    expect(screen.getByText(/You are a Co-Applicant/i)).toBeInTheDocument();
  });
});
