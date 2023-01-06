import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Children, forwardRef, useContext, useState } from 'react';

import { UserContext } from '#auth/UserContext';
import { BASE_URL } from '#constants/constants';
import DownArrow from '#public/down-arrow.svg';
import { theme } from '#styles/styles';

import { IconButton } from '../../atoms/IconButton/IconButton';
import {
  DropdownButton,
  StyledDownArrow,
  StyledDropdownContainer,
  StyledMenu,
  StyledMenuItem,
} from './Dropdown.styles';
import type { DropdownProps } from './Dropdown.types';

export const Dropdown: React.FC<DropdownProps> = ({
  button,
  children,
  disabled,
  disableRipple,
  variant = 'primary',
  userName,
  showDownArrow,
  ...props
}) => {
  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const portalUser = useContext(UserContext);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSignOut = async () => {
    await portalUser?.signOut();
    // clears the current profile builder step
    localStorage.removeItem('cpp_user_profile_completed_step');
    return router.push(`${BASE_URL}?q=logout`);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <StyledDropdownContainer
      data-testid="dropdown-container"
      className="dropdown-container"
      userName={userName}
      {...props}
    >
      <DropdownButton
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        className="dropdown-button"
        onClick={handleClick}
        disabled={disabled}
        disableRipple={disableRipple}
        variant={variant}
        data-testid="dropdown-button"
        {...(open && { 'aria-controls': 'basic-menu' })}
      >
        {button ? button.text : null}{' '}
        {showDownArrow && (
          <StyledDownArrow data-testid="styled-down-arrow">
            <Image src={DownArrow as string} width={16} height={10} alt="Dropdown Arrow" />
          </StyledDownArrow>
        )}
        {/* {smallBreakpoint && <IconButton userName={userName ? userName : undefined} />} */}
        <IconButton userName={userName ? userName : undefined} />
      </DropdownButton>

      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={
          smallBreakpoint ? { vertical: 'bottom', horizontal: 'left' } : { vertical: 'bottom', horizontal: 'center' }
        }
        transformOrigin={
          smallBreakpoint ? { vertical: 'top', horizontal: 'left' } : { vertical: 'top', horizontal: 'right' }
        }
        sx={smallBreakpoint ? { top: '0px' } : { top: '11px', left: '-16px' }}
      >
        {button?.options?.map(option => (
          <StyledMenuItem
            key={option.text}
            onClick={handleClose}
            {...(option.url && { component: MenuItemAnchor, href: option.url })}
          >
            {option.text}
          </StyledMenuItem>
        )) ?? null}
        <StyledMenuItem className="logout-button" data-testid="log-out-button" onClick={() => void handleSignOut()}>
          Log Out
        </StyledMenuItem>
        {children}
      </StyledMenu>
    </StyledDropdownContainer>
  );
};

interface IMenuItemAnchorProps {
  readonly children?: React.ReactNode;
  readonly href: string;
}

const MenuItemAnchor = forwardRef<HTMLAnchorElement, IMenuItemAnchorProps>(function MenuItemAnchor(
  { children, href, ...attributes }: IMenuItemAnchorProps,
  ref,
) {
  const [firstChild, ...others] = Children.toArray(children);
  return (
    <li {...attributes}>
      <Link href={href} prefetch={false}>
        <a ref={ref}>{firstChild}</a>
      </Link>
      {others}
    </li>
  );
});
