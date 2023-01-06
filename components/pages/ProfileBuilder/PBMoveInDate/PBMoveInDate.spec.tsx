jest.mock('next/router');
jest.mock('#auth/UseProfile');
jest.mock('#auth/UseRouteUnauthenticated');
jest.mock('#auth/PortalUser');

import userEvent from '@testing-library/user-event';
import type { NextRouter } from 'next/dist/shared/lib/router/router';
import { useRouter } from 'next/router';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import type { IProfile } from '#auth/IProfile';
import { PortalUser } from '#auth/PortalUser';
import { useProfile } from '#auth/UseProfile';
import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';
import { act, render } from '#utils/testing-library';

import { PBMoveInDate } from './PBMoveInDate';

type IRouter = ReturnType<typeof useRouter>;

const mockUseRouter = jest.mocked(useRouter);
const mockPrefetch = jest.fn<Promise<void>, Parameters<IRouter['prefetch']>>();
const mockPush = jest.fn<Promise<boolean>, Parameters<IRouter['push']>>();
const mockRouter = { prefetch: mockPrefetch, push: mockPush } as unknown as NextRouter;
const mockUseProfile = jest.mocked(useProfile);
const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);
const mockPatchProfile = jest.spyOn(PortalUser.prototype, 'patchProfile');
const mockGetProfile = jest.spyOn(PortalUser.prototype, 'getProfile');

describe('PBMoveInDate', () => {
  let moveInDate: Date | undefined;

  let profile:
    | {
        -readonly [K in keyof IProfile]: IProfile[K];
      }
    | undefined;

  beforeEach(() => {
    // Justifcation: Meaning is obvious
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    moveInDate = new Date(2022, 2, 12);
    moveInDate.setMilliseconds(0);
    profile = { moveInDate };
    jest.clearAllMocks();
    jest.resetAllMocks();
    mockUseProfile.mockReturnValue(profile);
    mockUseRouteUnauthenticated.mockReturnValue(true);
    mockUseRouter.mockReturnValue(mockRouter);
    mockPatchProfile.mockResolvedValue({});
    mockGetProfile.mockResolvedValue(profile);
  });

  const buttonActions = [
    { button: 'previous button', destination: 'home-location' },
    { button: 'next button', destination: 'number-of-bedrooms' },
  ];

  buttonActions.forEach(x =>
    it(`navigates to ${x.destination} when the ${x.button} is pressed`, async () => {
      // Act
      profile!.moveInDate?.setFullYear(profile!.moveInDate.getFullYear() + 1);
      const component = render(<PBMoveInDate userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);

      await act(async () => {
        userEvent.click(await component.findByTestId(x.button));
      });

      // Assert
      expect(mockPush).toHaveBeenCalledWith(expect.stringContaining(x.destination));
    }),
  );

  it('sets the move-in date from the profile upon load', async () => {
    // Act
    const component = render(<PBMoveInDate userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);

    // Assert
    const datePicker = await component.findByTestId('date-picker');
    const input = datePicker.querySelector('input');
    expect(input).toHaveValue('03/12/2022');
  });

  it('profiles without a move-in date default to today', async () => {
    // Arrange
    delete profile?.moveInDate;

    // Act
    const component = render(<PBMoveInDate userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);

    // Assert
    const datePicker = await component.findByTestId('date-picker');
    const input = datePicker.querySelector('input');
    expect(input).toHaveValue(formatDateLikeDatePicker(new Date()));
  });

  it("saves the user's chosen date when the Next button is pressed", async () => {
    // Arrange
    const nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    nextYear.setHours(0, 0, 0, 0);
    const component = render(<PBMoveInDate userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);

    // Act
    await act(async () => {
      const datePicker = await component.findByTestId('date-picker');
      const input = datePicker.querySelector('input');

      if (!input) {
        throw new Error('Could not type in date picker.');
      }

      userEvent.clear(input);
      userEvent.type(input, formatDateLikeDatePicker(nextYear));
      userEvent.tab();

      userEvent.click(await component.findByTestId('next button'));
    });

    expect(mockPatchProfile).toHaveBeenCalledWith({ moveInDate: nextYear });
  });

  it('does not patch the user if the user does not change their data', async () => {
    // Arrange
    const component = render(<PBMoveInDate userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);

    // Act
    await act(async () => {
      const datePicker = await component.findByTestId('date-picker');
      const input = datePicker.querySelector('input');

      if (!input) {
        throw new Error('Could not type in date picker.');
      }

      userEvent.clear(input);
      userEvent.type(input, formatDateLikeDatePicker(profile!.moveInDate!));
      userEvent.tab();

      userEvent.click(await component.findByTestId('next button'));
    });

    expect(mockGetProfile).toHaveBeenCalled();
    expect(mockPatchProfile).not.toHaveBeenCalled();
  });
});

function formatDateLikeDatePicker(date: Date) {
  const mm = (date.getMonth() + 1).toString().padStart(2, '0');
  const dd = date.getDate().toString().padStart(2, '0');
  const yyyy = date.getFullYear().toString();
  return `${mm}/${dd}/${yyyy}`;
}
