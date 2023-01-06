import { InputBase, styled } from '@mui/material';

export const Search = styled('div')`
  color: ${({ theme }) => theme.colors.accessibleGreen};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  position: relative;
  width: 250px;
  height: 50px;
  margin: 0 17px 0 0;
`;

export const SearchIconWrapper = styled('div')`
  padding: 0 2;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledInputBase = styled(InputBase)`
  color: inherit;
  border-radius: 10px;
  padding-left: calc(3em + 12px);
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  width: 250px;
  height: 50px;
  .MuiInputBase-input {
    &::placeholder {
      opacity: 1;
    }
  }
`;

export const StyledSearchIcon = styled('div')`
  padding-left: 3px;
  margin-top: 13px;
  margin-bottom: 13px;
  margin-left: 18px;
`;
