import React from 'react';
jest.mock('#auth/UseRouteUnauthenticated');
jest.mock('#auth/UseProfile');
import type { IProfile } from '#auth/IProfile';
import { useProfile } from '#auth/UseProfile';
import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { render, screen } from '#utils/testing-library';

import { DashboardWrapper } from './DashboardWrapper';

const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);
const mockUseProfile = jest.mocked(useProfile);

const profile: IProfile = {
  firstName: 'Phil',
  lastName: 'Coulson',
  emailAddress: 'phil.coulson@mailinator.com',
  phoneNumber: '1111111111',
};

describe('DashboardWrapper', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
    mockUseProfile.mockReturnValue(profile);
    mockUseRouteUnauthenticated.mockReturnValue(true);
  });
  it('renders the default Dashboard Wrapper Component', () => {
    render(<DashboardWrapper />);
    expect(screen.getByTestId('incomplete-profile')).toBeInTheDocument();
  });
  it('renders the Dashboard Wrapper Component Incomplete Application', () => {
    render(<DashboardWrapper dashboardWrapperTestVal={1} />);
    expect(screen.getByTestId('loading-profile')).toBeInTheDocument();
  });
  it('renders the Dashboard Wrapper Component Incomplete Profile', () => {
    render(<DashboardWrapper dashboardWrapperTestVal={2} />);
    expect(screen.getByTestId('loading-profile')).toBeInTheDocument();
  });
  it('renders the Dashboard Wrapper Component Complete Status', () => {
    render(<DashboardWrapper dashboardWrapperTestVal={3} />);
    expect(screen.getByTestId('complete-profile')).toBeInTheDocument();
  });
  it('renders the Dashboard Wrapper Component WhatsNext', () => {
    render(<DashboardWrapper dashboardWrapperTestVal={4} />);
    expect(screen.getByTestId('whats-next-content')).toBeInTheDocument();
  });
  it('renders the Dashboard Wrapper Component SecurityDeposit', () => {
    render(<DashboardWrapper dashboardWrapperTestVal={5} />);
    expect(screen.getByText(/Your security deposit is/iu)).toBeInTheDocument();
  });
  it('renders the Dashboard Wrapper Component StripePayment', () => {
    render(<DashboardWrapper dashboardWrapperTestVal={6} />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
