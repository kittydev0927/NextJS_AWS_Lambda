jest.mock('next/router');
jest.mock('#auth/PortalUser');
jest.mock('#auth/UseRouteUnauthenticated');
jest.mock('use-debounce');

import userEvent from '@testing-library/user-event';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import { useDebouncedCallback } from 'use-debounce';

import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import type { ISampleData } from '#utils/sampleApplicationPageData';
import { sampleApplicationPageData } from '#utils/sampleApplicationPageData';
import { act, render, screen } from '#utils/testing-library';

import { Payment } from './Payment';

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

describe('Renders the Payment Page', () => {
  it('renders the Component', () => {
    render(<Payment total={50} applicants={1} pageData={sampleApplicationPageData as unknown as ISampleData} />);
    expect(screen.getByTestId('payment-page')).toBeInTheDocument();
    expect(screen.getByText('$50 total')).toBeInTheDocument();
    expect(screen.getByText('Application Fee for each of the 1 applicants.')).toBeInTheDocument();
  });

  it('renders the Component with the default props', () => {
    render(<Payment pageData={sampleApplicationPageData as unknown as ISampleData} />);
    expect(screen.getByText('$200 total')).toBeInTheDocument();
    expect(screen.getByText('Application Fee for each of the 4 applicants.')).toBeInTheDocument();
  });

  it('Checks that both payment options are displayed', async () => {
    const component = render(
      <Payment total={50} applicants={1} pageData={sampleApplicationPageData as unknown as ISampleData} />,
    );
    await act(async () => {
      expect(component.getByTestId('achc-button')).toBeInTheDocument();
      expect(component.getByTestId('card-button')).toBeInTheDocument();
    });
  });

  it('Checks that StripePayment for achc is displayed', async () => {
    const component = render(
      <Payment total={50} applicants={1} pageData={sampleApplicationPageData as unknown as ISampleData} />,
    );
    await act(async () => {
      expect(await component.findByTestId('achc-button')).toBeInTheDocument();
      userEvent.click(await component.findByTestId('achc-button'));
      expect(await component.findByText('Checking Account')).toBeInTheDocument();
    });
  });

  it('Checks that StripePayment for credit card is displayed', async () => {
    const component = render(
      <Payment total={500} applicants={4} pageData={sampleApplicationPageData as unknown as ISampleData} />,
    );
    await act(async () => {
      expect(await component.findByTestId('card-button')).toBeInTheDocument();
      userEvent.click(await component.findByTestId('card-button'));
      expect(await component.findByText('Credit Card')).toBeInTheDocument();
    });
  });

  it('Checks that StripePayment for credit card is displayed and then closed', async () => {
    const component = render(
      <Payment total={500} applicants={4} pageData={sampleApplicationPageData as unknown as ISampleData} />,
    );
    await act(async () => {
      expect(await component.findByTestId('card-button')).toBeInTheDocument();
      userEvent.click(await component.findByTestId('card-button'));
      expect(await component.findByText('Credit Card')).toBeInTheDocument();
      expect(await component.findByTestId('return-button')).toBeInTheDocument();
      userEvent.click(await component.findByTestId('return-button'));
      expect(component.getByTestId('achc-button')).toBeInTheDocument();
      expect(component.getByTestId('card-button')).toBeInTheDocument();
    });
  });
});
