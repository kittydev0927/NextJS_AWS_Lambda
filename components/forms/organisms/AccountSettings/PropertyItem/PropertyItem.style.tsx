import { css, styled, Typography } from '@mui/material';

import type { PropertyItemProps } from './PropertyItem.types';

export const StyledPropertyTitle = styled(Typography)`
  font-weight: bold;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.carbon};
  letter-spacing: 0;
  ${props => props.theme.breakpoints.up('sm')} {
    font-size: 14px;
  }
`;

export const StyledPropertyValue = styled(Typography)<{ $valueUnderTitle: PropertyItemProps['valueUnderTitle'] }>`
  font-size: 14px;
  text-align: right;
  color: ${({ theme }) => theme.colors.carbon};
  letter-spacing: 0;
  ${({ $valueUnderTitle, theme }) =>
    $valueUnderTitle &&
    css`
      text-align: left;
      margin-top: ${theme.spacing(2)};
    `}
`;
