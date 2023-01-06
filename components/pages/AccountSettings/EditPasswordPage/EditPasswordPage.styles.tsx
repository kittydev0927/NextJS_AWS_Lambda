import { styled } from '@mui/material';

import { Paper } from '#components/layouts/organisms/Paper/Paper';

export const StyledPaper = styled(Paper)`
  padding: 40px 31px 90px 31px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 65px 79px 150px 79px;
  }
`;

export const StyledWrapper = styled('div')`
  padding: 30px 21px 73px 21px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding-right: 0;
    padding-left: 0;
  }
  display: flex;
  justify-content: center;
`;
