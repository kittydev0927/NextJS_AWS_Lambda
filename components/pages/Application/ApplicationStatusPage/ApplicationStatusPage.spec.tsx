jest.mock('#auth/UseRouteUnauthenticated');
import React from 'react';

import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { render, screen } from '#utils/testing-library';

import { ApplicationStatusPage } from './ApplicationStatusPage';

const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);

describe('Status', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    mockUseRouteUnauthenticated.mockReturnValue(true);
  });

  it('renders the Application Status Page', () => {
    render(<ApplicationStatusPage currentAppStatus={'processing'} />);
    expect(screen.getByTestId('application-status-page')).toBeInTheDocument();
  });
});
