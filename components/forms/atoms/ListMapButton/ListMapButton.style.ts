import { styled } from '@mui/material';

export const StyledSavedHomeDisplay = styled('div')`
  .MuiToggleButtonGroup-root {
    width: 106px;
    height: 50px;
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    background-color: ${({ theme }) => theme.colors.gray91};
  }
  .list-button {
    width: 53px;
    height: 50px;
    padding: 11px 0 14px 18px;
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    :hover {
      background-color: ${({ theme }) => theme.colors.teal};
    }
  }
  .map-button {
    width: 53px;
    height: 50px;
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    :hover {
      background-color: ${({ theme }) => theme.colors.teal};
    }
  }
  button {
    background-color: ${({ theme }) => theme.colors.gray91};
    opacity: 0.3;
  }
  button.Mui-selected {
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 1 !important;
  }
`;

export const StyledListIcon = styled('div')`
  width: 15px;
  height: 15px;
  margin: 18px 17px 17px 0;
  object-fit: contain;
`;

export const StyledMapIcon = styled('div')`
  width: 17px;
  height: 27px;
  object-fit: contain;
`;
