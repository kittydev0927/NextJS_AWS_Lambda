import { Grid, styled } from '@mui/material';

import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledGrid = styled(Grid)`
  padding-left: 21px;
  padding-top: 14px;
  padding-bottom: 14px;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.primary};
  border-top-right-radius: ${({ theme }) => theme.borderRadius.primary};
`;

export const StyledTypography = styled(Typography)`
  font-size: 16px;
`;

export const StyledLinkTypography = styled(Typography)`
  text-decoration: underline;
  padding-right: 26px;
`;

export const StyledSpan = styled('span')`
  margin-left: 14px;
`;

export const GridItemInfo = styled(Grid)`
  display: flex;
  align-items: center;
`;

export const GridItemLink = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: right;
`;
