jest.mock('#auth/UseRouteUnauthenticated');
import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { render, screen } from '#utils/testing-library';

import { ProfileBuilderWrapper } from './ProfileBuilderWrapper';

const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);

describe('Profile Wrapper', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    mockUseRouteUnauthenticated.mockReturnValue(true);
  });

  it('renders the Component', () => {
    render(<ProfileBuilderWrapper />);
    expect(screen.getByText('Profile Builder')).toBeInTheDocument();
  });
});
