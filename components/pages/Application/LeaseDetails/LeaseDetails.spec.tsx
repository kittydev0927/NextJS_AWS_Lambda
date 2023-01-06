jest.mock('#auth/UseRouteUnauthenticated');
jest.mock('next/router');
jest.mock('use-debounce');

import userEvent from '@testing-library/user-event';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';

import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import type { ISampleData } from '#utils/sampleApplicationPageData';
import { sampleApplicationPageData } from '#utils/sampleApplicationPageData';
import { act, render, screen } from '#utils/testing-library';

import { LeaseDetails } from './LeaseDetails';

type IRouter = ReturnType<typeof useRouter>;
const mockUseRouter = jest.mocked(useRouter);
const mockPrefetch = jest.fn<Promise<void>, Parameters<IRouter['prefetch']>>();
const mockPush = jest.fn<Promise<boolean>, Parameters<IRouter['push']>>();
const mockRouter = { prefetch: mockPrefetch, push: mockPush } as unknown as NextRouter;
const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
  mockUseRouter.mockReturnValue(mockRouter);
  mockUseRouteUnauthenticated.mockReturnValue(true);
});

describe('Profile Wrapper', () => {
  it('renders the Component', () => {
    render(<LeaseDetails pageData={sampleApplicationPageData as unknown as ISampleData} />);
    expect(screen.getByTestId('lease-details-page')).toBeInTheDocument();
  });

  it('clicking on Housing Choice should display tooltip', async () => {
    const component = render(<LeaseDetails pageData={sampleApplicationPageData as unknown as ISampleData} />);

    await act(async () => {
      expect(await component.findByTestId('housing-choice')).toBeInTheDocument();
      userEvent.click(await component.findByTestId('housing-choice'));
      expect(component.getByRole('tooltip')).toBeVisible();
    });
  });

  it('selects Yes checkbox and checks for voucher link', async () => {
    const component = render(<LeaseDetails pageData={sampleApplicationPageData as unknown as ISampleData} />);

    await act(async () => {
      expect(await component.findByTestId('checkbox-yes')).toBeInTheDocument();
      userEvent.click(await component.findByTestId('checkbox-yes'));
      expect(await component.findByTestId('voucher-link')).toBeInTheDocument();
      expect(await component.findByText('Upload Housing Choice Voucher')).toBeInTheDocument();
      expect(
        await component.findByText(
          'In order to continue, you must upload your housing choice voucher and RTA document below.',
        ),
      ).toBeInTheDocument();
    });
  });
  it('selects No checkbox and checks for voucher link', async () => {
    const component = render(<LeaseDetails pageData={sampleApplicationPageData as unknown as ISampleData} />);

    await act(async () => {
      expect(await component.findByTestId('checkbox-no')).toBeInTheDocument();
      userEvent.click(await component.findByTestId('checkbox-no'));
    });
  });

  it('navigates to "" when the "next" button is pressed', async () => {
    const component = render(
      <LeaseDetails primaryApplicant={false} pageData={sampleApplicationPageData as unknown as ISampleData} />,
    );

    await act(async () => {
      expect(await component.findByTestId('checkbox-terms-conditions')).toBeInTheDocument();
      userEvent.click(await component.findByTestId('checkbox-terms-conditions'));
    });

    expect(await component.findByTestId('next button')).toBeInTheDocument();
    userEvent.click(await component.findByTestId('next button'));
  });

  it('navigates to "" when the "next" button is pressed as primary applicant', async () => {
    const component = render(<LeaseDetails pageData={sampleApplicationPageData as unknown as ISampleData} />);

    await act(async () => {
      const datePicker = await component.findByTestId('date-picker');
      const input = datePicker.querySelector('input');

      if (!input) {
        throw new Error('Could not resolve input');
      }

      userEvent.clear(input);
      userEvent.type(input, '03/10/2021');
      userEvent.tab();
      expect(datePicker).toBeInTheDocument();

      expect(await component.findByTestId('checkbox-terms-conditions')).toBeInTheDocument();
      userEvent.click(await component.findByTestId('checkbox-terms-conditions'));
      expect(await component.findByTestId('checkbox-no')).toBeInTheDocument();
      userEvent.click(await component.findByTestId('checkbox-no'));
    });

    expect(await component.findByTestId('next button')).toBeInTheDocument();
    userEvent.click(await component.findByTestId('next button'));
  });

  it('navigates to "" when the "back" button is pressed', async () => {
    const component = render(<LeaseDetails pageData={sampleApplicationPageData as unknown as ISampleData} />);

    await act(async () => {
      expect(await component.findByTestId('previous button')).toBeInTheDocument();
      userEvent.click(await component.findByTestId('previous button'));
    });
  });

  it('Additional Applicant content is displayed', async () => {
    render(<LeaseDetails primaryApplicant={false} pageData={sampleApplicationPageData as unknown as ISampleData} />);
    expect(screen.getByText('The primary applicant has selected the following:')).toBeInTheDocument();
  });

  it('onChange was called', async () => {
    // Arrange
    const component = render(<LeaseDetails pageData={sampleApplicationPageData as unknown as ISampleData} />);

    // Act
    await act(async () => {
      const datePicker = await component.findByTestId('date-picker');
      const input = datePicker.querySelector('input');

      if (!input) {
        throw new Error('Could not resolve input');
      }

      userEvent.clear(input);
      userEvent.type(input, '03/10/2021');
      userEvent.tab();
      expect(datePicker).toBeInTheDocument();
    });
  });
});
