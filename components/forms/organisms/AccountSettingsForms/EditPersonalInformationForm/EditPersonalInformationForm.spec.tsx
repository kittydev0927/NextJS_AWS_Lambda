jest.mock('next/router', () => {
  return { useRouter: jest.fn().mockReturnValue({ route: '/edit-personal-information' }) };
});
jest.mock('#auth/UseProfile');
jest.mock('#services/profile/getLocations');

import userEvent from '@testing-library/user-event';
import { StatusCodes } from 'http-status-codes';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import type { IProfile } from '#auth/IProfile';
import { OktaAuthError } from '#auth/OktaAuthError';
import type { PortalUser } from '#auth/PortalUser';
import { useProfile } from '#auth/UseProfile';
import { UserContext } from '#auth/UserContext';
import { getLocations } from '#services/profile/getLocations';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';
import { act, render, screen } from '#utils/testing-library';

import { EditPersonalInformationForm } from './EditPersonalInformationForm';

type IRouter = ReturnType<typeof useRouter>;

const mockUseRouter = jest.mocked(useRouter);
const mockPrefetch = jest.fn<Promise<void>, Parameters<IRouter['prefetch']>>();
const mockPush = jest.fn<Promise<boolean>, Parameters<IRouter['push']>>();
const mockRouter = { prefetch: mockPrefetch, push: mockPush } as unknown as NextRouter;
const mockPatchProfile = jest.fn<Promise<void>, unknown[]>();
const mockPortalUser = { patchProfile: mockPatchProfile } as unknown as PortalUser;
const mockUseProfile = jest.mocked(useProfile);
const mockGetLocations = jest.mocked(getLocations);

const profile: IProfile = {
  firstName: 'Leslie',
  lastName: 'Knope',
  emailAddress: 'lknope@pawneeparksandrec1.com',
  phoneNumber: '1111111111',
};

const smallDelay = async () =>
  new Promise(resolve => {
    const delay = 100;
    setTimeout(resolve, delay);
  });

describe('Edit Personal Information Form', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
    mockUseProfile.mockReturnValue(profile);
    mockUseRouter.mockReturnValue(mockRouter);
    mockGetLocations.mockResolvedValue([
      { locality: 'Minas Anor', region: 'Gondor' },
      { locality: 'Minas Ithil', region: 'Gondor' },
      { locality: 'Minas Tirith', region: 'Gondor' },
    ]);
  });

  it('renders the form', () => {
    // Arrange
    render(<EditPersonalInformationForm userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);

    // Assert
    expect(screen.getByText(/edit personal information/i)).toBeVisible();
  });

  it('submits the form when all fields are valid', async () => {
    // Arrange
    mockPatchProfile.mockResolvedValue(undefined);

    render(
      <UserContext.Provider value={mockPortalUser}>
        <EditPersonalInformationForm userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />
      </UserContext.Provider>,
    );

    const saveButton = screen.getByRole('button', { name: /Save Changes/i });
    const checkbox = screen.getByRole('checkbox', {
      name: /By checking here you are agreeing to Progress Residential/i,
    });

    // Act
    await act(async () => {
      userEvent.type(screen.getByLabelText('First Name'), 'Jean Luc');
      userEvent.type(screen.getByLabelText('Last Name'), 'Picard');
      userEvent.type(screen.getByLabelText('Phone Number'), '1234567890');
      userEvent.type(screen.getByLabelText('Email Address'), 'jlpicard@starfleet.gov');
      userEvent.click(checkbox);
      await smallDelay();
      userEvent.click(saveButton);
    });

    // Assert
    expect(mockPatchProfile).toHaveBeenCalled();
  });

  it('shows loading screen when no profile is available', async () => {
    // Arrange
    jest.clearAllMocks();
    mockUseProfile.mockReturnValue(undefined);
    render(<EditPersonalInformationForm userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);

    // Assert
    expect(screen.getByRole('progressbar')).toBeVisible();
  });

  describe('submits form and receives duplicate email error from okta', () => {
    beforeEach(() => {
      const agreedProfile = {
        ...profile,
        privacyConsent: true,
      };
      mockUseProfile.mockReturnValue(agreedProfile);
      mockPatchProfile.mockClear();
      mockPatchProfile.mockRejectedValue(
        new OktaAuthError(
          {
            errorCode: 'errorCode',
            errorId: 'errorId',
            errorLink: 'errorLink',
            errorSummary: 'Api validation failed: login',
            errorCauses: [
              { errorSummary: 'login: An object with this field already exists in the current organization' },
            ],
          },
          StatusCodes.BAD_REQUEST,
        ),
      );
    });

    it('shows error when unavailable email is submitted', async () => {
      render(
        <UserContext.Provider value={mockPortalUser}>
          <EditPersonalInformationForm userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />
        </UserContext.Provider>,
      );

      const saveButton = screen.getByRole('button', { name: /Save Changes/i });

      await act(async () => {
        // submit the form:
        userEvent.click(saveButton);
      });

      expect(
        screen.getByText(/There is already an existing user with this email address. Please try again./i),
      ).toBeVisible();
    });
  });
});
