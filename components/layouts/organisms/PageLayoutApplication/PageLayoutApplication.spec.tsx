jest.mock('#auth/UseRouteUnauthenticated');
import React from 'react';

import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { render, screen } from '#utils/testing-library';

import { PageLayoutApplication } from './PageLayoutApplication';

const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);

describe('PageLayoutApplication', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    mockUseRouteUnauthenticated.mockReturnValue(true);
  });

  it('renders the PageLayoutApplication', () => {
    render(<PageLayoutApplication infoText={'test text'} />);
    expect(screen.getByText(/test text/i)).toBeInTheDocument();
  });

  it('renders the loader if loading', () => {
    mockUseRouteUnauthenticated.mockReturnValue(false);
    render(<PageLayoutApplication infoText={'test text'} />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
