import { styled } from '@mui/material';

export const StyledPaper = styled('div')`
  max-width: 88%;
  padding: 72px 0 146px;
  margin: 0 auto;
  .inner-paper {
    padding: 0;
  }
  @media screen and (max-width: 600px) {
    padding: 32px 5%;
  }
  form {
    max-width: 400px;
    margin: 0 auto;
  }
  .MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12 {
    padding: 10px 0 0 8px;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      padding: 24px 24px 0;
    }
  }
`;
