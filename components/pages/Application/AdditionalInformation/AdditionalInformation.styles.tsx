import { styled } from '@mui/material';

export const StyledContainer = styled('div')`
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding-bottom: 24px;
    padding-top: 78px;
  }
`;
