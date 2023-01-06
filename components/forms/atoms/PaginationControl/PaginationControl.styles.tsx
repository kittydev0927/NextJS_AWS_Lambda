import { IconButton, styled } from '@mui/material';

import { theme } from '#styles/styles';

import type { StyledPageIconProps, StyledPaginationCenterProps } from './PaginationControl.types';

// Justification: Pre-existing code.
/* eslint-disable @typescript-eslint/no-magic-numbers */

export const StyledPrimaryContainer = styled('div')`
  display: flex;
  width: 100%;
  justify-content: end;
`;

export const StyledPaginationContainer = styled('div')`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const StyledPaginationCenter = styled('div')<StyledPaginationCenterProps>`
  height: 36px;
  width: ${({ count }) => (count > 1 ? `${count * 29}px` : '10px')};
  padding: 0px 20px 0px 20px;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledPageIcon = styled('div')<StyledPageIconProps>`
  background-color: ${({ index, currentpage }) => (index === currentpage ? theme.colors.darkGreen : theme.colors.alto)};
  border-radius: 50%;
  height: 10px;
  width: 10px;
  cursor: pointer;
`;

export const StyledPaginationButtons = styled('div')`
  width: 117px;
  display: flex;
  justify-content: space-between;
`;

export const StyledScrollButton = styled(IconButton)`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-items: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
`;
