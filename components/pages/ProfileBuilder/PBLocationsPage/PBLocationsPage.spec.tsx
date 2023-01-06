jest.mock('#auth/UseProfile');
jest.mock('#auth/UseRouteUnauthenticated');
jest.mock('#services/profile/getLocation');
jest.mock('next/router');
jest.mock('use-debounce');

import userEvent from '@testing-library/user-event';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import { useDebouncedCallback } from 'use-debounce';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import type { IProfile } from '#auth/IProfile';
import { PortalUser } from '#auth/PortalUser';
import { useProfile } from '#auth/UseProfile';
import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { getLocation } from '#services/profile/getLocation';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';
import { act, render, screen } from '#utils/testing-library';

import { PBLocationsPageComponent } from './PBLocationsPage';

type IRouter = ReturnType<typeof useRouter>;

const mockUseRouter = jest.mocked(useRouter);
const mockPrefetch = jest.fn<Promise<void>, Parameters<IRouter['prefetch']>>();
const mockPush = jest.fn<Promise<boolean>, Parameters<IRouter['push']>>();
const mockRouter = { prefetch: mockPrefetch, push: mockPush } as unknown as NextRouter;
const mockUseProfile = jest.mocked(useProfile);
const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);
const mockGetLocation = jest.mocked(getLocation);
const mockUseDebouncedCallback = jest.mocked(useDebouncedCallback);
const mockPatchProfile = jest.spyOn(PortalUser.prototype, 'patchProfile');
const mockGetProfile = jest.spyOn(PortalUser.prototype, 'getProfile');

const longRunningTest = 20000;
jest.setTimeout(longRunningTest);

describe('PBLocationsPage', () => {
  let preferredLocations: Set<string> | undefined;

  let profile:
    | {
        -readonly [K in keyof IProfile]: IProfile[K];
      }
    | undefined;

  const localStorageMock = (() => {
    const store = new Map();
    return {
      getItem(key: string) {
        return store.get(key);
      },
      setItem(key: string, value: string) {
        store.set(key, value);
      },
      clear() {
        store.clear();
      },
      removeItem(key: string) {
        store.delete(key);
      },
    };
  })();
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });
  beforeAll(() => {
    window.localStorage.setItem(
      'okta-token-storage',
      '{"idToken":{"idToken":"eyJraWQiOiIySWFfbmFBOHo0T3NpOU5wYkN4MFcwZzB3LUpBVVhQRUZ0b1hIcEN0cF6zIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHUzZWI2OXh4b3ZtUXBJRDFkNyIsIm5hbWUiOiJOYXJlbmRyYSBLdW1hciIsImVtYWlsIjoic2hhcm1hLnJhamVzaDAwNzg5QGdtYWlsLmNvbSIsInZlciI6MSwiaXNzIjoiaHR0cHM6Ly9yZW50cHJvZ3Jlc3Mub2t0YXByZXZpZXcuY29tL29hdXRoMi9kZWZhdWx0IiwiYXVkIjoiMG9hMXd1cThzbWh3Q2NpdjQxZDciLCJpYXQiOjE2NTM3MTY2OTIsImV4cCI6MTY1MzcyMDI5MiwianRpIjoiSUQuTi13ZkZpeU5TWlVrVGkyelVuRVVVMUI3ZUF4QW5XUmRmUS1NZEJPT1RITSIsImFtciI6WyJwd2QiXSwiaWRwIjoiMDBvMWh5d2Qwa1NnN2t3ZWYxZDciLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzaGFybWEucmFqZXNoMDA3ODlAZ21haWwuY29tIiwiYXV0aF90aW1lIjoxNjUzNzEzMTE4LCJhdF9oYXNoIjoiOUxBTEtJbHZDaUFNcGNxSTBYd0dlUSJ9.Q3uVnPDHGMUJ4zc6_D-coYBx_Ucy_LoDM74hnKOGD4X-4hqxgcBxwPCCsPPCGbLadVSJq1sPxLDfCKtv_FF86IXLKvbT6AUqj9rm6sOqNb6sgCE7SsUgcBG3I4patPt-TzU1XeddR9u3ZSEQflKKxvQXPoIBSwEkt1TGt8YIOMjfvlsox6bC0qofV2Ciyg-T69gZ73qgLji1kquDwa2gwGNTN587f9WQ1tt1qBsXpyRpeuc18db699YbwStTqgmuyvzXNOVyZIM3poqhvFU2-ZNfuQnfof9u6XcFUtt7zlNVJmZ8NMdn1Cf2wBXB2_H_iB99tUWOUSg6oBbaI_mv8w","claims":{"sub":"00u3eb69xxovmQpID1d7","name":"a b","email":"a.b@test.com","ver":1,"iss":"https://rentprogress.oktapreview.com/oauth2/default","aud":"0oa1wuq8smhwCciv41d7","iat":1653716692,"exp":3653720292,"jti":"ID.N-wfFiyNSZUkTi2zUnEUU1B7eAxAnWRdfQ-MdBOOTHM","amr":["pwd"],"idp":"00o1hywd0kSg7kwef1d7","preferred_username":"sharma.rajesh00789@gmail.com","auth_time":1653713118,"at_hash":"9LALKIlvCiAMpcqI0XwGeQ"},"expiresAt":3653720292,"scopes":["offline_access","openid","profile","email"],"authorizeUrl":"https://logondev.rentprogress.com/oauth2/default/v1/authorize","issuer":"https://logondev.rentprogress.com/oauth2/default","clientId":"0oa5wuq1smhwCciv41d9"},"accessToken":{"accessToken":"eyJraWQiOiIySWFfbmFBOHo4T3NpOU5wYkN4MFcwZzB8LUpBVVhQRUZ6b1hIcEN0cF9zIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULjB3TXhWaUxVUEcwalpZS0piU2NRT0h3OUlEZGYtNktfTFpoTTh4cXlDeWsub2FyanI0dG44YTEzN1JHS2sxZDYiLCJpc3MiOiJodHRwczovL3JlbnRwcm9ncmVzcy5va3RhcHJldmlldy5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNjUzNzE2NjkyLCJleHAiOjE2NTM3MjAyOTIsImNpZCI6IjBvYTF3dXE4c21od0NjaXY0MWQ3IiwidWlkIjoiMDB1M2ViNjl4eG92bVFwSUQxZDciLCJzY3AiOlsib2ZmbGluZV9hY2Nlc3MiLCJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiXSwiYXV0aF90aW1lIjoxNjUzNzEzMTE4LCJzdWIiOiJzaGFybWEucmFqZXNoMDA3ODlAZ21haWwuY29tIn0.QnIyBz_movbOjFdhP1-ffuag_RVHlAFF3GSLPl1P6x0NXMaJjS1LUuEgTxtNEMbHz87OnqBTHioLygX2n7TQ1kgx7SmDr9UtqkaeVyCZ5ESCLIQ_nnycBVtGOHmK0v7ymqbGlsIHSx8Vs2O6668VFBw6_nR_U__rTiV147ZNJVxhpVDJpUkwfJc1CNkDGo-ac-g7jDxuwiyZeYBBUaxDxKRBYhJD_TpQvzkWn7MJFpOZ-KWuyK0FEu18A16DXgFfgsJjn85OuY6P0gX6ayi8o2YDO3xBq7EZflgZq8ioZcV1SRokSdSOm7Y2MvFbqOPW5st3YV9b7s6LNKLnL97_rg","claims":{"ver":1,"jti":"AT.0wMxViLUPG0jZYKJbScQOHw9IDdf-6K_LZhM8xqyCyk.oarjr7tn8a469RGKk1d6","iss":"https://rentprogress.oktapreview.com/oauth2/default","aud":"api://default","iat":1653716692,"exp":3653720292,"cid":"0oa3wuq8smhwCciv41d2","uid":"00u7eb49xxovmQpID1d2","scp":["offline_access","openid","profile","email"],"auth_time":1653713118,"sub":"a.b@test.com"},"expiresAt":1653720292,"tokenType":"Bearer","scopes":["offline_access","openid","profile","email"],"authorizeUrl":"https://logondev.rentprogress.com/oauth2/default/v1/authorize","userinfoUrl":"https://logondev.rentprogress.com/oauth2/default/v1/userinfo"},"refreshToken":{"refreshToken":"qf2IQCk_JHM0ojxVErt9aPOBSNHyP9jYg4dmlUQjAWM","expiresAt":3653720292,"scopes":["offline_access","openid","profile","email"],"tokenUrl":"https://logondev.rentprogress.com/oauth2/default/v1/token","authorizeUrl":"https://logondev.rentprogress.com/oauth2/default/v1/authorize","issuer":"https://logondev.rentprogress.com/oauth2/default"}}',
    );
  });

  beforeEach(() => {
    preferredLocations = new Set(['Atlanta, GA']);
    profile = { preferredLocations };
    jest.clearAllMocks();
    jest.resetAllMocks();
    mockUseProfile.mockReturnValue(profile);
    mockUseRouteUnauthenticated.mockReturnValue(true);
    mockUseRouter.mockReturnValue(mockRouter);
    mockPatchProfile.mockResolvedValue({});
    mockGetProfile.mockResolvedValue(profile);

    mockGetLocation.mockResolvedValue([
      { locality: 'Minas Anor', region: 'Gondor' },
      { locality: 'Minas Ithil', region: 'Gondor' },
      { locality: 'Minas Tirith', region: 'Gondor' },
    ]);

    mockUseDebouncedCallback.mockImplementation(
      func => ((...args: unknown[]) => func(...args)) as unknown as ReturnType<typeof useDebouncedCallback>,
    );
  });

  afterAll(() => {
    window.localStorage.removeItem('okta-token-storage');
  });

  it('navigates to "estimated-move-in-date" when the "next" button is pressed', async () => {
    // Act
    const component = render(
      <PBLocationsPageComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />,
    );

    await act(async () => {
      userEvent.click(await component.findByTestId('next button'));
    });

    // Assert
    expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('estimated-move-in-date'));
  });

  it('sets the locations from the profile upon load', async () => {
    // Act
    const component = render(
      <PBLocationsPageComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />,
    );

    // Assert
    const autocomplete = await component.findByRole('combobox');

    const chips = Array.from(autocomplete?.parentElement?.querySelectorAll('.MuiChip-label') ?? []).map(
      node => node.textContent,
    );

    expect(chips).toEqual(expect.arrayContaining(['Atlanta, GA']));
  });

  it('can handle a profile that has no preferred locations', async () => {
    // Arrange
    delete profile!.preferredLocations;

    // Act
    const component = render(
      <PBLocationsPageComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />,
    );

    // Assert
    const autocomplete = await component.findByRole('combobox');

    const chips = Array.from(autocomplete?.parentElement?.querySelectorAll('.MuiChip-label') ?? []);

    expect(chips).toHaveLength(0);
  });

  it('displays type-ahead options', async () => {
    // Arrange
    const component = render(
      <PBLocationsPageComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />,
    );

    // Act
    await act(async () => {
      const autocomplete = await component.findByRole('combobox');
      userEvent.type(autocomplete, ' ');

      // Assert
      expect(await screen.findByText('Minas Ithil, Gondor')).toBeInTheDocument();
    });
  });

  it('controls the value of the autocomplete', async () => {
    // Arrange
    const component = render(
      <PBLocationsPageComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />,
    );

    // Act
    await act(async () => {
      const autocomplete = await component.findByRole('combobox');
      userEvent.type(autocomplete, ' ');
      userEvent.click(await screen.findByText('Minas Anor, Gondor'));
      userEvent.click(await component.findByTestId('next button'));
    });

    // Assert
    expect(mockPatchProfile).toHaveBeenCalledWith({
      preferredLocations: new Set(['Atlanta, GA', 'Minas Anor, Gondor']),
    });
  });

  it("does not patch the user if the user's locations have not changed", async () => {
    // Arrange
    const component = render(
      <PBLocationsPageComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />,
    );

    // Act
    await act(async () => {
      const autocomplete = await component.findByRole('combobox');
      userEvent.type(autocomplete, ' ');
      userEvent.click(await screen.findByText('Minas Anor, Gondor'));

      const paper = await component.findByTestId('innerPaper');
      const minas = await component.findAllByText('Minas Anor, Gondor');
      const minasChip = minas.find(e => paper.contains(e));
      const minasClose = minasChip?.parentElement?.querySelector('[data-testid="CloseIcon"]');

      if (!minasClose) {
        throw new Error('Could not resolve close icon');
      }

      userEvent.click(minasClose);
      userEvent.click(await component.findByTestId('next button'));
    });

    // Assert
    expect(mockPatchProfile).not.toHaveBeenCalled();
  });
});
