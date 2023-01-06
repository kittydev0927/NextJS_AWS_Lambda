jest.mock('#auth/UseRouteUnauthenticated');
jest.mock('next/router');
jest.mock('use-debounce');

import userEvent from '@testing-library/user-event';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import { useDebouncedCallback } from 'use-debounce';

import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import type { ISampleData } from '#utils/sampleApplicationPageData';
import { sampleApplicationPageData } from '#utils/sampleApplicationPageData';
import { act, render, screen, waitFor } from '#utils/testing-library';

import { Animals } from './Animals';
import { EXPECTED_CHECKBOXES, SERVICE_CHECKBOX, SUPPORT_CHECKBOX } from './constants';

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

describe('Application Animals', () => {
  it('renders the Component', () => {
    render(<Animals pageData={sampleApplicationPageData as unknown as ISampleData} />);
    expect(screen.getByTestId('animals-page')).toBeInTheDocument();
  });

  it('if the user selects "Yes" for service dog then the service dog questions appear', async () => {
    const component = render(<Animals pageData={sampleApplicationPageData as unknown as ISampleData} />);

    await act(async () => {
      const checkboxesCount = component.getAllByRole('checkbox');
      userEvent.click(checkboxesCount[2]);
      await waitFor(async () => screen.findByTestId('service-dog-section'));
      const updatedCheckboxesCount = component.getAllByRole('checkbox');
      expect(updatedCheckboxesCount).toHaveLength(EXPECTED_CHECKBOXES);
    });
  });

  it('if the user selects "Yes" for support animal then the file upload appears', async () => {
    const component = render(<Animals pageData={sampleApplicationPageData as unknown as ISampleData} />);

    await act(async () => {
      const checkboxesCount = component.getAllByRole('checkbox');
      userEvent.click(checkboxesCount[SUPPORT_CHECKBOX]);
      await waitFor(async () => screen.findByTestId('support-animal-section'));
      expect(component.getByText('Upload Letter Here')).toBeInTheDocument();
    });
  });

  it('navigates to "" when the "next" button is pressed', async () => {
    const component = render(<Animals pageData={sampleApplicationPageData as unknown as ISampleData} />);

    await act(async () => {
      const checkboxesCount = component.getAllByRole('checkbox');
      userEvent.click(checkboxesCount[0]);
      userEvent.click(checkboxesCount[SERVICE_CHECKBOX]);
      userEvent.click(checkboxesCount[SUPPORT_CHECKBOX]);

      expect(await component.findByTestId('next button')).toBeInTheDocument();
      userEvent.click(await component.findByTestId('next button'));
    });
  });

  it('navigates to "" when the "previous" button is pressed', async () => {
    const component = render(<Animals pageData={sampleApplicationPageData as unknown as ISampleData} />);

    await act(async () => {
      expect(await component.findByTestId('previous button')).toBeInTheDocument();
      userEvent.click(await component.findByTestId('previous button'));
    });
  });
});
