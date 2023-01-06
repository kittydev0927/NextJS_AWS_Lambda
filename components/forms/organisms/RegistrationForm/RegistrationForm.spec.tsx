jest.mock('#auth/UseProfile');
jest.mock('#services/profile/getLocations');
jest.mock('next/router');

import userEvent from '@testing-library/user-event';
import { StatusCodes } from 'http-status-codes';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { OktaAuthError } from '#auth/OktaAuthError';
import type { PortalUser } from '#auth/PortalUser';
import { useProfile } from '#auth/UseProfile';
import { UserContext } from '#auth/UserContext';
import { getLocations } from '#services/profile/getLocations';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';
import { fireEvent, render, screen, waitFor } from '#utils/testing-library';

import { RegistrationForm } from './RegistrationForm';

type IRouter = ReturnType<typeof useRouter>;

const mockUseRouter = jest.mocked(useRouter);
const mockPrefetch = jest.fn<Promise<void>, Parameters<IRouter['prefetch']>>();
const mockPush = jest.fn<Promise<boolean>, Parameters<IRouter['push']>>();
const mockRouter = { prefetch: mockPrefetch, push: mockPush } as unknown as NextRouter;
const mockUseProfile = jest.mocked(useProfile);
const mockGetLocations = jest.mocked(getLocations);
const mockRegister = jest.fn<Promise<void>, unknown[]>();
let registerButton: HTMLElement;

describe('RegistrationForm', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
    mockUseProfile.mockReturnValue(undefined);
    mockUseRouter.mockReturnValue(mockRouter);
    mockGetLocations.mockResolvedValue([
      { locality: 'Minas Anor', region: 'Gondor' },
      { locality: 'Minas Ithil', region: 'Gondor' },
      { locality: 'Minas Tirith', region: 'Gondor' },
    ]);
  });

  it('renders the RegistrationForm', () => {
    render(<RegistrationForm userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);
    expect(screen.getByText("We haven't been officially introduced")).toBeInTheDocument();
  });

  it('user can enter first name', () => {
    render(<RegistrationForm userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);
    userEvent.type(getFirstName(), 'Jean Luc');
    expect(screen.getByLabelText(/first name/i)).toHaveValue('Jean Luc');
  });

  it('shows illustration when prop is set to true', () => {
    render(<RegistrationForm showIllustration userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);
    expect(screen.getByTestId('illustration-grid')).toBeInTheDocument();
  });

  describe('Form submission', () => {
    beforeEach(async () => {
      mockRegister.mockClear();
      const mockPortalUser = { register: mockRegister } as unknown as PortalUser;

      render(
        <UserContext.Provider value={mockPortalUser}>
          <RegistrationForm userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />
        </UserContext.Provider>,
      );

      const privacyCheckbox = screen.getByLabelText(/By checking here you are agreeing to Progress Residential/);
      registerButton = screen.getByRole('button', { name: /Register/i });

      await waitFor(() => {
        // populate text fields:
        fireEvent.change(screen.getByLabelText('First Name *'), { target: { value: 'Jean Luc' } });
        fireEvent.change(screen.getByLabelText('Last Name *'), { target: { value: 'Picard' } });
        fireEvent.change(screen.getByLabelText('Mobile Phone Number *'), { target: { value: '1234567890' } });
        fireEvent.change(screen.getByLabelText('Email *'), { target: { value: 'jlpicard@starfleet.gov' } });
        fireEvent.change(screen.getByLabelText('Password *'), { target: { value: 'password' } });

        // Checkbox must be checked before selecting a location for some reason:
        userEvent.click(privacyCheckbox);
      });

      // The following two (2) "waitFor" blocks must happen sequentially without other DOM interactions in between to make
      // sure the click of the option element succeeds because otherwise the select list will not be "visible"/clickable.
      await waitFor(() => {
        // reveal the dropdown:
        const locationSelect = screen.getByRole('button', { name: /Select area/i });
        userEvent.click(locationSelect);
      });

      await waitFor(() => {
        // click a location:
        const minasAnorOption = screen.getAllByRole('option').find(ele => ele.textContent === 'Minas Anor, Gondor');
        if (minasAnorOption) {
          userEvent.click(minasAnorOption);
        }
      });
    });

    it('submits the form when all fields are valid', async () => {
      mockRegister.mockResolvedValue(undefined);
      await waitFor(() => {
        // submit the form:
        userEvent.click(registerButton, undefined, { skipPointerEventsCheck: true });
      });

      expect(screen.getByRole('button', { name: 'Minas Anor' })).toBeVisible();
      expect(mockRegister).toHaveBeenCalled();
    });

    it('submits the form with a duplicate email address', async () => {
      mockRegister.mockRejectedValue(
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

      await waitFor(() => {
        // submit the form:
        userEvent.click(registerButton, undefined, { skipPointerEventsCheck: true });
      });

      expect(
        screen.getByText(
          /There is already an existing user with this email address. Please sign in or reset your password./i,
        ),
      ).toBeVisible();

      expect(mockRegister).toHaveBeenCalled();
    });

    it('submits the form with an unrecognized Okta error', async () => {
      mockRegister.mockRejectedValue(
        new OktaAuthError(
          {
            errorCode: 'errorCode',
            errorId: 'errorId',
            errorLink: 'errorLink',
            errorSummary: 'errorSummary',
            errorCauses: [{ errorSummary: 'There was an error.' }],
          },
          StatusCodes.BAD_REQUEST,
        ),
      );

      await waitFor(() => {
        // submit the form:
        userEvent.click(registerButton, undefined, { skipPointerEventsCheck: true });
      });

      expect(screen.getByText(/There was an error./i)).toBeVisible();

      expect(mockRegister).toHaveBeenCalled();
    });
  });
});

const getFirstName = () => screen.getByLabelText(/first name \*/i);
