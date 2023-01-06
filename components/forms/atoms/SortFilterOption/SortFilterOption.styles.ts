import { styled } from '@mui/material';

export const StyledSortFilterOption = styled('div')`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  ${({ theme }) => theme.breakpoints.up('sm')} {
    grid-template-columns: repeat(2, 1fr);
  }

  .select-option {
    height: 50px;
    margin-bottom: 16px;
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    background-color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.breakpoints.up('md')} {
      min-width: 250px;
    }
    ${({ theme }) => theme.breakpoints.up('lg')} {
      min-width: 311px;
      margin-bottom: initial;
    }
  }

  div.MuiInputBase-input {
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.darkGray};
    padding-top: 20px;
  }

  .MuiSelect-icon {
    width: 16px;
    height: 10px;
    margin: 9px 10px 11px 6px;
  }
`;
