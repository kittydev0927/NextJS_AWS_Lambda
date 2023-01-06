jest.mock('#auth/UseProfile');
jest.mock('next/router');

import { MenuItem } from '@mui/material';
import userEvent from '@testing-library/user-event';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import React from 'react';

import type { PortalUser } from '#auth/PortalUser';
import { useProfile } from '#auth/UseProfile';
import { UserContext } from '#auth/UserContext';
import { theme } from '#styles/styles';
import { createMatchMedia } from '#tests/createMatchMedia';
import { authUserMenu } from '#utils/placeholderLinks';
import { user } from '#utils/sampleUserData';
import { render, screen } from '#utils/testing-library';

import { Dropdown } from './Dropdown';
import { StyledMenu } from './Dropdown.styles';
import type { DropdownProps } from './Dropdown.types';

type IButton = NonNullable<DropdownProps['button']>;

type IRouter = ReturnType<typeof useRouter>;

const mockUseRouter = jest.mocked(useRouter);
const mockPrefetch = jest.fn<Promise<void>, Parameters<IRouter['prefetch']>>();
const mockPush = jest.fn<Promise<boolean>, Parameters<IRouter['push']>>();
const mockRouter = { prefetch: mockPrefetch, push: mockPush } as unknown as NextRouter;
const mockUseProfile = jest.mocked(useProfile);
const mockSignOut = jest.fn();
const mockPortalUser = { signOut: mockSignOut } as unknown as PortalUser;
describe('Dropdown', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
    mockUseRouter.mockReturnValue(mockRouter);
    mockUseProfile.mockReturnValue(undefined);
  });

  it('Finds rendered Dropdown component.', async () => {
    render(<Dropdown />);
    expect(await screen.findByTestId('dropdown-container')).toBeInTheDocument();
  });

  const sm = theme.breakpoints.values.sm;
  const sizes = [sm - 1, sm + 1];

  sizes.forEach(size => {
    it(`renders a dropdown button text at ${size}px`, () => {
      window.matchMedia = createMatchMedia(size);
      render(<Dropdown button={{ ...authUserMenu[0], text: 'Find Your Home' }} />);
      expect(screen.getByText('Find Your Home')).toBeInTheDocument();
    });

    it(`can handle dropdowns with no options at ${size}px`, () => {
      window.matchMedia = createMatchMedia(size);
      const button: IButton = { ...authUserMenu[0], text: 'Find Your Home' };
      delete button.options;
      render(<Dropdown button={button} />);
      expect(screen.getByText('Find Your Home')).toBeInTheDocument();
    });
  });

  it('shows the profile icon button when user is provided', () => {
    render(<Dropdown userName={user.userName.firstName} />);
    expect(screen.getByTestId('IconButton-Container')).toBeInTheDocument();
  });

  it('displays the down arrow when showDownArrow is set to "true"', () => {
    render(<Dropdown showDownArrow />);
    expect(screen.queryByTestId('styled-down-arrow')).toBeInTheDocument();
  });

  it('displays the mobile menu at the mobile breakpoint', () => {
    window.matchMedia = createMatchMedia();
    render(<Dropdown showDownArrow />);
    userEvent.click(screen.getByTestId('dropdown-button'));
    expect(screen.getByText(/log out/i)).toBeInTheDocument();
  });

  it('signs out when log out is selected for mobile', () => {
    window.matchMedia = createMatchMedia(theme.breakpoints.values.xs);
    render(
      <UserContext.Provider value={mockPortalUser}>
        <Dropdown showDownArrow />
      </UserContext.Provider>,
    );
    userEvent.click(screen.getByTestId('dropdown-button'));
    userEvent.click(screen.getByTestId('log-out-button'));
    expect(mockSignOut).toHaveBeenCalledTimes(1);
  });

  it('signs out when log out is selected for desktop', () => {
    window.matchMedia = createMatchMedia(theme.breakpoints.values.md);
    render(
      <UserContext.Provider value={mockPortalUser}>
        <Dropdown showDownArrow />
      </UserContext.Provider>,
    );
    userEvent.click(screen.getByTestId('dropdown-button'));
    userEvent.click(screen.getByText(/log out/i));
    expect(mockSignOut).toHaveBeenCalledTimes(1);
  });

  it('shows list of button options', async () => {
    const mockCallback = jest.fn();
    const { getByTestId } = render(
      <StyledMenu
        id="basic-menu"
        data-testid="basic-menu"
        onClose={mockCallback}
        open
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem key="1" onClick={mockCallback} value="1">
          1
        </MenuItem>
        <MenuItem key="2" onClick={mockCallback} value="2">
          2
        </MenuItem>
        <MenuItem key="3" onClick={mockCallback} value="3">
          3
        </MenuItem>
      </StyledMenu>,
    );
    const basicMenu = getByTestId('basic-menu');
    userEvent.click(basicMenu);
    expect(basicMenu).toBeVisible();
  });
});
