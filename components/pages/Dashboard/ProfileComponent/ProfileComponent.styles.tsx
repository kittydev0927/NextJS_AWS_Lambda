import { styled } from '@mui/material';

export const LoadingProfile = styled('div')`
  height: 512px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    height: 240px;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    height: 196px;
  }
`;
