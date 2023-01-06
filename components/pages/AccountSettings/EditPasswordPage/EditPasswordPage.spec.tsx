jest.mock('#auth/UseRouteUnauthenticated');
jest.mock('next/router');

import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import type { PortalUser } from '#auth/PortalUser';
import { UserContext } from '#auth/UserContext';
import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { createMatchMedia } from '#tests/createMatchMedia';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';
import { render } from '#utils/testing-library';

import { EditPasswordPage } from './EditPasswordPage';

type IRouter = ReturnType<typeof useRouter>;

const mockUseRouter = jest.mocked(useRouter);
const mockPrefetch = jest.fn<Promise<void>, Parameters<IRouter['prefetch']>>();
const mockPush = jest.fn<Promise<boolean>, Parameters<IRouter['push']>>();
const mockRouter = { prefetch: mockPrefetch, push: mockPush } as unknown as NextRouter;
const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);

describe('EditPasswordPage', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
    window.matchMedia = createMatchMedia();
    mockUseRouter.mockReturnValue(mockRouter);
    mockUseRouteUnauthenticated.mockReturnValue(true);
  });

  it('renders the complete Page', async () => {
    // Arrange
    const mockChangePassword = jest.fn<Promise<void>, unknown[]>();
    const mockPortalUser = {
      changePassword: mockChangePassword,
      isAuthenticated: mockChangePassword,
    } as unknown as PortalUser;

    // Act
    const component = render(
      <UserContext.Provider value={mockPortalUser}>
        <EditPasswordPage userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />
      </UserContext.Provider>,
    );

    // Assert
    const [accountSettings, currentPassword] = await Promise.all([
      component.findByText('Account Settings'),
      component.findByLabelText(/Current Password/u),
    ]);

    expect(accountSettings).toBeInTheDocument();
    expect(currentPassword).toBeInTheDocument();
  });
});
