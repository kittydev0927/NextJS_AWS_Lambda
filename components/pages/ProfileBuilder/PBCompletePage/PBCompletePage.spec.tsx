jest.mock('#auth/UseRouteUnauthenticated');
import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';
import { render, screen } from '#utils/testing-library';

import { PBCompletePageComponent } from './PBCompletePage';

const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);

describe('Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    mockUseRouteUnauthenticated.mockReturnValue(true);
  });

  it('renders the complete Page', () => {
    render(<PBCompletePageComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);
    expect(screen.getByText('Profile Complete')).toBeInTheDocument();
  });
});
