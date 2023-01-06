jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      propertyId: '100050',
    },
    push: jest.fn<Promise<void>, unknown[]>(),
  }),
}));
jest.mock('#auth/PortalUser');
jest.mock('#auth/UseRouteUnauthenticated');
import React from 'react';

import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { theme } from '#styles/styles';
import { createMatchMedia } from '#tests/createMatchMedia';
import { render, screen } from '#utils/testing-library';

import { AppWhatToExpect } from './AppWhatToExpect';
import { CurrentProperty } from './CurrentProperty';

const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);

describe('AppWhatToExpect', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    mockUseRouteUnauthenticated.mockReturnValue(true);
  });

  it('renders the AppWhatToExpect', () => {
    render(<AppWhatToExpect />);
    expect(screen.getByText(/what to expect/i)).toBeInTheDocument();
  });

  it('does render the first Divider for larger screens', () => {
    window.matchMedia = createMatchMedia(theme.breakpoints.values.md);
    render(<AppWhatToExpect />);
    expect(screen.getByTestId('divider-first')).toBeInTheDocument();
  });
});

describe('AppWhatToExpect - CurrentProperty component', () => {
  it('renders correctly', () => {
    render(<CurrentProperty />);
    expect(screen.queryByText(/application:/i)).toBeNull();
  });
});
