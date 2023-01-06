import { Box, Button, Divider, Menu, MenuItem, styled } from '@mui/material';

import { HeaderLogo } from '#components/layouts/atoms/HeaderLogo/HeaderLogo';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

import type { DropdownProps } from './Dropdown.types';

export const DropdownButton = styled(Button)`
  &.dropdown-button {
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    background-color: ${({ theme }) => theme.colors.accessibleGreen};
    text-transform: none;
    height: 27px;
    width: fit-content;
    min-width: unset;
    padding: 0;
    &:hover {
      background-color: ${({ theme }) => theme.colors.accessibleGreen};
    }
  }
`;

export const StyledDownArrow = styled('div')`
  font-size: 14px;
  text-transform: none;
  margin: 17px 0 15px 11px;
  display: flex;
  width: 16px;
  height: 10px;
  img {
    // override for NextJS image optimization styles
    max-width: unset !important;
  }
`;

export const StyledMenu = styled(Menu)`
  backdrop-filter: none;
  background-color: unset;
  border-radius: 0;
  .MuiPaper-root {
    width: 100%;
    max-width: 100%;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      border-radius: ${({ theme }) => theme.borderRadius.primary};
      width: initial;
      max-width: initial;
    }
  }
`;

export const StyledDropdownContainer = styled(Box)<DropdownProps>`
  display: flex;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    display: flex;
    margin-right: 15px;
  }
`;

export const StyledAvatarIcon = styled('div')`
  position: relative;
  height: 27px;
  width: 27px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-left: 11px;
    padding: 0 0 0;
    object-fit: contain;
  }
`;

export const StyledCloseButton = styled(Button)`
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  padding: 0;
  justify-content: flex-end;
  height: unset;
  width: unset;
`;

export const StyledMenuItem = styled(MenuItem)`
  color: ${({ theme }) => theme.colors.accessibleGreen};
  font-family: ${({ theme }) => theme.fonts.Raleway};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 16px;
  padding: 26px 30px 26px 28px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    color: ${({ theme }) => theme.colors.darkGray};
    font-family: ${({ theme }) => theme.fonts.Roboto};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    padding: 6px 44px;
    font-size: 14px;
  }
  &:first-of-type {
    padding-top: 42px;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      padding-top: 28px;
    }
  }
  &.logout-button {
    padding-bottom: 42px;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      padding-bottom: 28px;
    }
  }
  a {
    color: ${({ theme }) => theme.colors.accessibleGreen};
    font-family: ${({ theme }) => theme.fonts.Raleway};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    text-decoration: none;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      color: ${({ theme }) => theme.colors.darkGray};
      font-family: ${({ theme }) => theme.fonts.Roboto};
      font-weight: ${({ theme }) => theme.fontWeight.regular};
    }
  }
`;

export const StyledDivider = styled(Divider)`
  border-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 18px;
  opacity: 0.15;
  &.bottom-divider {
    margin-top: auto;
  }
  ${({ theme }) => theme.breakpoints.up('sm')} {
    display: none;
  }
`;

export const StyledTypography = styled(Typography)`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Raleway};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: underline;
  text-align: right;
  margin-top: -4px;
  margin-right: 10px;
`;

export const StyledHeaderLogo = styled(HeaderLogo)`
  max-width: 118px;
  &.header-logo {
    height: unset;
    width: 100%;
  }
`;

export const StyledArrow = styled('div')`
  position: absolute;
  bottom: -12px;
  right: 8px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid ${({ theme }) => theme.colors.white};
`;

export const StyledHeaderGrid = styled('div')`
  display: grid;
  width: 100%;
  grid-template-columns: 7fr 2fr;
  grid-template-rows: 1fr;
`;

export const StyledProfileCon = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
