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
`;
