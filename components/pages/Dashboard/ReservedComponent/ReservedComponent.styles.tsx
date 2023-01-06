import { Grid, styled } from '@mui/material';

import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledRequestInformationGrid = styled(Grid)`
  margin-bottom: 50px;
  ${({ theme }) => theme.breakpoints.up('xs')} {
    margin-bottom: 15px;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-bottom: 50px;
  }
`;

export const StyledRequestGrid = styled(Grid)`
  margin-top: 15px;
  ${({ theme }) => theme.breakpoints.up('xs')} {
    flex-direction: column-reverse;
  }
  ${({ theme }) => theme.breakpoints.up('sm')} {
    flex-direction: row;
  }
`;

export const StyledReservedText = styled(Typography)`
  font-size: 22px;
`;

export const StyledRequestButtonsGrid = styled(Grid)`
  ${({ theme }) => theme.breakpoints.up('xs')} {
    flex-direction: column-reverse;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row;
  }
`;
