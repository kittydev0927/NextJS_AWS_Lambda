jest.mock('#auth/UseRouteUnauthenticated');
jest.mock('#auth/UseProfile');
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
import { act, fireEvent, render } from '#utils/testing-library';

import { PBRentRange } from './PBRentRange';

type IRouter = ReturnType<typeof useRouter>;

const mockUseRouter = jest.mocked(useRouter);
const mockPrefetch = jest.fn<Promise<void>, Parameters<IRouter['prefetch']>>();
const mockPush = jest.fn<Promise<boolean>, Parameters<IRouter['push']>>();
const mockRouter = { prefetch: mockPrefetch, push: mockPush } as unknown as NextRouter;
const mockUseProfile = jest.mocked(useProfile);
const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);
const mockPatchProfile = jest.spyOn(PortalUser.prototype, 'patchProfile');
const mockGetProfile = jest.spyOn(PortalUser.prototype, 'getProfile');
const defaultMaxRent = 2000;
const defaultMinRent = 900;

describe('PBRentRange', () => {
  let maxRent: number | undefined;
  let minRent: number | undefined;

  let profile:
    | {
        -readonly [K in keyof IProfile]: IProfile[K];
      }
    | undefined;

  beforeEach(() => {
    maxRent = defaultMaxRent;
    minRent = defaultMinRent;
    profile = { maxRent, minRent };
    jest.clearAllMocks();
    jest.resetAllMocks();
    mockUseProfile.mockReturnValue(profile);
    mockUseRouter.mockReturnValue(mockRouter);
    mockUseRouteUnauthenticated.mockReturnValue(true);
    mockPatchProfile.mockResolvedValue({});
    mockGetProfile.mockResolvedValue(profile);
  });

  it('navigates to number-of-bedrooms when the previous button is pressed', async () => {
    // Arrange
    const component = render(<PBRentRange userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);

    // Act
    await act(async () => {
      userEvent.click(await component.findByTestId('previous button'));
    });

    // Assert
    expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('number-of-bedrooms'));
  });

  it('handles a profile that does not yet have maxRent or minRent set', async () => {
    // Arrange
    delete profile!.maxRent;
    delete profile!.minRent;

    // Act
    const component = render(<PBRentRange userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);

    // Assert
    const [minSlider] = await component.findAllByRole('slider');
    const hasValue = (o: HTMLElement): o is HTMLInputElement => o.tagName.toLowerCase() === 'input';

    if (!hasValue(minSlider)) {
      throw new Error('Could not resolve slider');
    }

    expect(minSlider.value).not.toBe('0');
  });

  it('patches the user profile and routes to the completion page when the next button is pressed', async () => {
    // Arrange
    const component = render(<PBRentRange userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);
    const newMinValue = 1000;

    // Act
    await act(async () => {
      const [minSlider] = await component.findAllByRole('slider');
      fireEvent.change(minSlider, { target: { value: newMinValue } });
      userEvent.click(await component.findByTestId('next button'));
    });

    // Assert
    expect(mockPatchProfile).toHaveBeenCalledWith({ maxRent, minRent: newMinValue });

    expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('complete'));
  });

  it("does not patch the user if the user's choices have not changed", async () => {
    // Arrange
    const component = render(<PBRentRange userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);
    const newMinValue = 1000;

    // Act
    await act(async () => {
      const [minSlider] = await component.findAllByRole('slider');
      fireEvent.change(minSlider, { target: { value: newMinValue } });
      fireEvent.change(minSlider, { target: { value: minRent } });
      userEvent.click(await component.findByTestId('next button'));
    });

    // Assert
    expect(mockPatchProfile).not.toHaveBeenCalled();
    expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('complete'));
  });
});
