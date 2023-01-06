jest.mock('next/router');
jest.mock('#auth/PortalUser');
jest.mock('#auth/UseRouteUnauthenticated');
jest.mock('use-debounce');

import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import { useDebouncedCallback } from 'use-debounce';

import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { render, screen } from '#utils/testing-library';

import { SharedComponent } from './SharedComponent';

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

const testData = {
  id: 'text-a647cec03a',
  text: '<p>Hello World! Updated content!</p>\r\n',
  richText: true,
  type: 'wknd-spa-react/components/text',
  dataLayer: {},
};

describe('Renders the SharedComponent Page', () => {
  it('renders the Component', () => {
    render(<SharedComponent data={testData} />);
    expect(screen.getByTestId('shared-component-page')).toBeInTheDocument();
  });
});
