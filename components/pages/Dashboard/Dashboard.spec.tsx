jest.mock('#auth/UseRouteUnauthenticated');
jest.mock('#utils/services/getCurrentUserScreen');
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';
import type { IDashboardScreenFlowResult } from '#utils/services/dashboardFlow.types';
import { useCurrentUserScreen } from '#utils/services/getCurrentUserScreen';
import { render, screen } from '#utils/testing-library';

import { DashboardPage } from './Dashboard';

const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);
const mockUseCurrentUserScreen = jest.mocked(useCurrentUserScreen);

const currentUserScreen: IDashboardScreenFlowResult = {
  isShowProfile: true,
  dashboardFlow: 0,
};
describe('Dashboard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    mockUseRouteUnauthenticated.mockReturnValue(true);
    mockUseCurrentUserScreen.mockReturnValue(currentUserScreen);
  });

  it('renders the Dashboard Page', () => {
    render(<DashboardPage userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);
    expect(screen.getByTestId('dashboard-page')).toBeInTheDocument();
  });

  it('renders the links list according to screen width', () => {
    render(<DashboardPage breakpointProp="sm" userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);
    expect(screen.getByTestId('links-list-small')).toBeInTheDocument();
  });

  it('renders the links list according to screen width (large)', () => {
    render(<DashboardPage breakpointProp="lg" userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);
    expect(screen.getByTestId('links-list-large')).toBeInTheDocument();
  });
});
