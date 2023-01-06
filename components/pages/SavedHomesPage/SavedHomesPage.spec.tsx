jest.mock('#auth/UseRouteUnauthenticated');
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';

jest.mock('next/router');

import userEvent from '@testing-library/user-event';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';
import { render, screen } from '#utils/testing-library';

import { SavedHomesPage } from './SavedHomesPage';

const mockPush = jest.fn<Promise<boolean>, Parameters<ReturnType<typeof useRouter>['push']>>();
const mockRouter = jest.mocked(useRouter);
const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);

describe('Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    mockUseRouteUnauthenticated.mockReturnValue(true);
    mockRouter.mockReturnValue({ push: mockPush } as unknown as NextRouter);
  });

  it('renders the Saved homes Page', () => {
    render(<SavedHomesPage userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);
    expect(screen.getAllByText(/saved homes/i)[0]).toBeInTheDocument();
  });

  it('map switch', async () => {
    render(<SavedHomesPage userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);
    const switchButton = screen.getByTestId('map-button');
    userEvent.click(switchButton);
    expect(switchButton).toHaveClass('Mui-selected');
  });
});
