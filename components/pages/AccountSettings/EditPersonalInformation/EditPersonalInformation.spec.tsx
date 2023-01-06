jest.mock('#auth/UseRouteUnauthenticated');
jest.mock('#auth/UseProfile');
jest.mock('#services/profile/getLocations');

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { useProfile } from '#auth/UseProfile';
import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { getLocations } from '#services/profile/getLocations';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';
import { render } from '#utils/testing-library';

import { EditPersonalInformation } from './EditPersonalInformation';

const mockUseProfile = jest.mocked(useProfile);
const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);
const mockGetLocations = jest.mocked(getLocations);

describe('Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    mockUseRouteUnauthenticated.mockReturnValue(true);
    mockGetLocations.mockResolvedValue([
      { locality: 'Minas Anor', region: 'Gondor' },
      { locality: 'Minas Ithil', region: 'Gondor' },
      { locality: 'Minas Tirith', region: 'Gondor' },
    ]);
  });

  it('renders the Edit Profile Settings Page', async () => {
    // Arrange
    mockUseProfile.mockReturnValue({ emailAddress: 'blah' });
    const component = render(
      <EditPersonalInformation userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />,
    );

    const pageTitle = await component.findByText('Edit Personal Information');

    expect(pageTitle).toBeInTheDocument();
  });
});
