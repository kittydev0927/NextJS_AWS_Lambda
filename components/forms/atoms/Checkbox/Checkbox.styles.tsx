import { styled } from '@mui/material';

import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledTypography = styled(Typography)`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.Raleway};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }
`;
