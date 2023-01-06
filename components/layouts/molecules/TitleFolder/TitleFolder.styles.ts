import { css, Grid, Link, styled, Typography } from '@mui/material';

import type { TitleFolderStyleType } from './TitleFolder.types';
import { TitleFolderVariant } from './TitleFolder.types';

// Justification: Pre-existing code.
/* eslint-disable @typescript-eslint/no-magic-numbers */

export const StyledTitleHeader = styled(Typography)<TitleFolderStyleType>`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGray};
  letter-spacing: 0;

  ${props => props.theme.breakpoints.up('sm')} {
    font-size: 20px;
    padding-left: ${({ type }) => (type === TitleFolderVariant.Primary ? '14px' : '21px')};
  }

  ${({ theme, type }) =>
    type === TitleFolderVariant.Secondary &&
    css`
      font-size: 16px;
      font-weight: normal;
      ${theme.breakpoints.up('sm')} {
        font-size: 22px;
      }
    `}
`;

export const StyledGridContainer = styled(Grid)<TitleFolderStyleType>`
  margin-bottom: ${({ theme, type }) => theme.spacing(type === TitleFolderVariant.Primary ? 3 : 2)};
  width: 100%;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-bottom: ${({ theme, type }) => theme.spacing(type === TitleFolderVariant.Primary ? 4 : 3)};
  }
`;

export const StyledChildrenContainer = styled('div')`
  ${props => props.theme.breakpoints.up('sm')} {
    padding-right: 21px;
    padding-left: 19px;
  }
`;

export const StyledDivider = styled('div')<TitleFolderStyleType>`
  height: ${({ type }) => (type === TitleFolderVariant.Primary ? '2px' : '1px')};
  background: ${({ theme }) => theme.colors.lightGray};
  width: 100%;
`;

export const StyledRightButtonContainer = styled(Grid)`
  display: flex;
  justify-content: flex-end;
  align-self: center;

  > a {
    font-family: ${({ theme }) => theme.fonts.Raleway};
  }
`;

export const StyledRightButton = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGreen};
  svg {
    font-size: 18px;
    padding-left: 8px;
  }
`;
