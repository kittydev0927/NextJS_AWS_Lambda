import { styled } from '@mui/material';

export const StyledContainer = styled('div')`
  margin: 4rem;
`;

export const StyledTable = styled('table')`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  font-family: ${({ theme }) => theme.fonts.Raleway};

  thead tr {
    background-color: ${({ theme }) => theme.colors.jade};
    color: #ffffff;
    text-align: left;
  }

  th,
  td {
    padding: 12px 15px;
  }

  tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  tbody tr:last-of-type {
    border-bottom: 2px solid ${({ theme }) => theme.colors.jade};
  }
`;
