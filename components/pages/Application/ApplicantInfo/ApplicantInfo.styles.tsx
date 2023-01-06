import { styled } from '@mui/material';

import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledContainer = styled('div')`
  padding: 44px 34px 31px 33px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding-top: 98px;
  }
`;

export const StyledHeader = styled(Typography)`
  margin-bottom: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 22px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 24px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;

export const StyledHyperLink = styled('a')`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  color: ${({ theme }) => theme.colors.accessibleGreen};
  margin-left: 3px;
  margin-right 3px;
`;

export const StyledBottomContainer = styled('div')`
  margin-bottom: 20px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-bottom: 77px;
  }
`;
