jest.mock('#auth/UseProfile');
jest.mock('#auth/UseRouteUnauthenticated');
jest.mock('next/router');

import userEvent from '@testing-library/user-event';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import type { IProfile } from '#auth/IProfile';
import { PortalUser } from '#auth/PortalUser';
import { useProfile } from '#auth/UseProfile';
import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';
import { act, render } from '#utils/testing-library';

import { PBNumberOfBedrooms } from './PBNumberOfBedrooms';

type IRouter = ReturnType<typeof useRouter>;

const mockUseRouter = jest.mocked(useRouter);
const mockPrefetch = jest.fn<Promise<void>, Parameters<IRouter['prefetch']>>();
const mockPush = jest.fn<Promise<boolean>, Parameters<IRouter['push']>>();
const mockRouter = { prefetch: mockPrefetch, push: mockPush } as unknown as NextRouter;
const mockUseProfile = jest.mocked(useProfile);
const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);
const mockPatchProfile = jest.spyOn(PortalUser.prototype, 'patchProfile');
const mockGetProfile = jest.spyOn(PortalUser.prototype, 'getProfile');

describe('PBNumberOfBedrooms', () => {
  let desiredBedrooms: Set<number> | undefined;

  let profile:
    | {
        -readonly [K in keyof IProfile]: IProfile[K];
      }
    | undefined;

  beforeEach(() => {
    desiredBedrooms = new Set([1, 2]);
    profile = { desiredBedrooms };
    jest.clearAllMocks();
    jest.resetAllMocks();
    mockUseProfile.mockReturnValue(profile);
    mockUseRouter.mockReturnValue(mockRouter);
    mockUseRouteUnauthenticated.mockReturnValue(true);
    mockPatchProfile.mockResolvedValue({});
    mockGetProfile.mockResolvedValue(profile);
  });

  it('navigates to estimated-move-in-date when the previous button is pressed', async () => {
    // Arrange
    const component = render(
      <PBNumberOfBedrooms userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />,
    );

    // Act
    await act(async () => {
      userEvent.click(await component.findByTestId('previous button'));
    });

    // Assert
    expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('estimated-move-in-date'));
  });

  it('sets the locations from the profile upon load', async () => {
    // Act
    const component = render(
      <PBNumberOfBedrooms userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />,
    );

    // Assert
    const autocomplete = await component.findByRole('combobox');

    const chips = Array.from(autocomplete?.parentElement?.querySelectorAll('.MuiChip-label') ?? []).map(
      node => node.textContent,
    );

    expect(chips).toEqual(expect.arrayContaining(['1+ Bdrm', '2+ Bdrm']));
  });

  it('handles loading a profile that lacks the desired bedrooms', async () => {
    // Arrange
    delete profile!.desiredBedrooms;

    // Act
    const component = render(
      <PBNumberOfBedrooms userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />,
    );

    // Assert
    const autocomplete = await component.findByRole('combobox');

    const chips = Array.from(autocomplete?.parentElement?.querySelectorAll('.MuiChip-label') ?? []);

    expect(chips).toHaveLength(0);
  });

  it("saves the user's changes when navigating to the next page", async () => {
    // Arrange
    const component = render(
      <PBNumberOfBedrooms userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />,
    );

    // Act
    await act(async () => {
      const [closeIcon] = await component.findAllByTestId('CloseIcon');
      userEvent.click(closeIcon, undefined, { skipPointerEventsCheck: true });
      userEvent.click(await component.findByTestId('next button'));
    });

    // Assert
    expect(mockPatchProfile).toHaveBeenCalledWith({
      desiredBedrooms: new Set([2]),
    });

    expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('monthly-rent-range'));
  });
});
