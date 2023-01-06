import { styled } from '@mui/material';

import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledTypography = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  margin-top: 2px;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    margin-top: 26px;
  }
`;
