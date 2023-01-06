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

import { Background } from './Background';

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

describe('Background Page', () => {
  it('renders the Component', () => {
    render(<Background pageData={sampleApplicationPageData as unknown as ISampleData} />);
    expect(screen.getByText('Please select any that apply to you.')).toBeInTheDocument();
  });

  it('does not navigate to applicants page when the previous button is pressed for primary applicants only', async () => {
    const component = render(
      <Background primaryApplicant pageData={sampleApplicationPageData as unknown as ISampleData} />,
    );
    await act(async () => {
      expect(await component.findByTestId('previous button')).toBeInTheDocument();
      userEvent.click(await component.findByTestId('previous button'));
    });
    expect(mockPush).not.toHaveBeenCalledWith(expect.stringContaining('/applicants'));
  });

  it('navigates to "" when the "next" button is pressed', async () => {
    const component = render(
      <Background primaryApplicant={false} pageData={sampleApplicationPageData as unknown as ISampleData} />,
    );
    await act(async () => {
      const checkboxesCount = screen.getAllByRole('checkbox');
      userEvent.click(checkboxesCount[2]);
      expect(await component.findByTestId('next button')).toBeInTheDocument();
      userEvent.click(await component.findByTestId('next button'));
    });
  });

  it('navigates to "" when the "back" button is pressed', async () => {
    const component = render(
      <Background primaryApplicant={false} pageData={sampleApplicationPageData as unknown as ISampleData} />,
    );
    await act(async () => {
      expect(await component.findByTestId('previous button')).toBeInTheDocument();
      userEvent.click(await component.findByTestId('previous button'));
    });
  });
});
