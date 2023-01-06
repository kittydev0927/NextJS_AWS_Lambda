jest.mock('next/router');

import userEvent from '@testing-library/user-event';
import { StatusCodes } from 'http-status-codes';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import React from 'react';

import { OktaAuthError } from '#auth/OktaAuthError';
import type { PortalUser } from '#auth/PortalUser';
import { UserContext } from '#auth/UserContext';
import { theme } from '#styles/styles';
import { createMatchMedia } from '#tests/createMatchMedia';
import { act, render } from '#utils/testing-library';

import { EditPasswordForm } from './EditPasswordForm';

type IRouter = ReturnType<typeof useRouter>;

const mockUseRouter = jest.mocked(useRouter);
const mockPrefetch = jest.fn<Promise<void>, Parameters<IRouter['prefetch']>>();
const mockPush = jest.fn<Promise<boolean>, Parameters<IRouter['push']>>();
const mockRouter = { prefetch: mockPrefetch, push: mockPush, query: { origin: '/' } } as unknown as NextRouter;
const mockChangePassword = jest.fn<Promise<void>, unknown[]>();
const mockPortalUser = { changePassword: mockChangePassword } as unknown as PortalUser;

describe('Edit Password Form', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
    mockUseRouter.mockReturnValue(mockRouter);
  });

  it('links to the account settings page', async () => {
    // Arrange
    window.matchMedia = createMatchMedia(theme.breakpoints.values.sm);
    const component = render(<EditPasswordForm />);

    // Act
    const rightButton = await component.findByText('Account Settings');

    // Assert
    expect(rightButton).toHaveAttribute('href', '/settings');
  });

  it('displays a warning if the confirmation does not match', async () => {
    // Arrange
    const component = render(
      <UserContext.Provider value={mockPortalUser}>
        <EditPasswordForm />
      </UserContext.Provider>,
    );

    const [newPassword, confirmPassword] = await component.findAllByLabelText(/New Password/u);

    // Act
    await act(async () => {
      userEvent.type(newPassword, '1');
      userEvent.type(confirmPassword, '2');
      userEvent.tab();
      await smallDelay();
    });

    // Assert
    const helperText = await component.findByText("passwords don't match");
    expect(helperText).toBeInTheDocument();
  });

  it('submits the form', async () => {
    // Arrange
    mockChangePassword.mockResolvedValue(undefined);

    const component = render(
      <UserContext.Provider value={mockPortalUser}>
        <EditPasswordForm />
      </UserContext.Provider>,
    );

    const currentPassword = await component.findByLabelText(/Current Password/u);
    const [newPassword, confirmPassword] = await component.findAllByLabelText(/New Password/u);
    const saveButton = await component.findByRole('button', { name: /Save Changes/i });

    // Act
    await act(async () => {
      userEvent.type(currentPassword, 'current password');
      userEvent.type(newPassword, 'new password');
      userEvent.type(confirmPassword, 'new password');
      userEvent.tab();
      await smallDelay();
      userEvent.click(saveButton);
    });

    // Assert
    expect(mockChangePassword).toHaveBeenCalled();
  });

  it('shows Okta messages to the user', async () => {
    // Arrange
    mockChangePassword.mockRejectedValue(
      new OktaAuthError(
        {
          errorCode: 'errorCode',
          errorId: 'errorId',
          errorLink: 'errorLink',
          errorSummary: 'errorSummary',
          errorCauses: [{ errorSummary: 'cause 1' }, { errorSummary: 'cause 2' }],
        },
        StatusCodes.BAD_REQUEST,
      ),
    );

    const component = render(
      <UserContext.Provider value={mockPortalUser}>
        <EditPasswordForm />
      </UserContext.Provider>,
    );

    const currentPassword = await component.findByLabelText(/Current Password/u);
    const [newPassword, confirmPassword] = await component.findAllByLabelText(/New Password/u);
    const saveButton = await component.findByRole('button', { name: /Save Changes/i });

    // Act
    await act(async () => {
      userEvent.type(currentPassword, 'current password');
      userEvent.type(newPassword, 'new password');
      userEvent.type(confirmPassword, 'new password');
      userEvent.tab();
      await smallDelay();
      userEvent.click(saveButton);
    });

    // Assert
    const cause1 = await component.findByText('cause 1');
    expect(mockPush).not.toHaveBeenCalled();
    expect(cause1).toBeInTheDocument();
  });
});

const smallDelay = async () =>
  new Promise(resolve => {
    const delay = 100;
    setTimeout(resolve, delay);
  });
