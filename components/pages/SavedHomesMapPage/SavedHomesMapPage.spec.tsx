jest.mock('#auth/UseRouteUnauthenticated');
import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';
import { render, screen } from '#utils/testing-library';

import { SavedHomesMapPage } from './SavedHomesMapPage';

const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);

describe('Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    mockUseRouteUnauthenticated.mockReturnValue(true);
  });

  it('renders the Saved homes Map Page', () => {
    render(<SavedHomesMapPage userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);
    expect(screen.getByText('Saved Homes')).toBeInTheDocument();
  });
});
