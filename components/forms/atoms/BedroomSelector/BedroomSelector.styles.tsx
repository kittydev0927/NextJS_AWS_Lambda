import { css, Paper, styled } from '@mui/material';

// Justification: Pre-existing code.
/* eslint-disable @typescript-eslint/no-magic-numbers */

export const StyledAutocompleteWrapper = styled('div')<{ open: boolean }>`
  .MuiAutocomplete-inputRoot {
    ${({ open }) =>
      open &&
      css`
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      `}
  }

  .Mui-disabled {
    opacity: 1;
    pointer-events: auto;
    padding-right: 8px !important;
  }

  .MuiAutocomplete-input {
    &::placeholder {
      font-size: 14px;
      opacity: 1;
      -webkit-text-fill-color: ${({ theme }) => theme.colors.darkGray};
    }
  }

  .MuiOutlinedInput-notchedOutline {
    ${({ open }) =>
      open &&
      css`
        border-bottom: 0;
      `}
  }

  .MuiChip-label {
    padding-right: 23px;
  }
`;

export const StyledPaper = styled(Paper)`
  &.MuiPaper-elevation {
    border-radius: 0 0 ${({ theme }) => theme.borderRadius.primary} ${({ theme }) => theme.borderRadius.primary};
    border: 1px solid ${({ theme }) => theme.colors.silver};
  }
`;

export const StyledList = styled('li')`
  background-color: inherit !important;
  &[aria-selected='true'] {
    background-color: inherit !important;
  }

  .MuiFormControlLabel-labelPlacementEnd {
    margin-right: 0;
  }
`;

export const StyledPlusButton = styled('div')`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.orangeRed};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.white};
    width: 33px;
    height: 33px;
  }

  &:after {
    content: '\\2715';
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
    transform: rotate(45deg);
  }
`;

export const StyledTitle = styled('div')`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.spacing(6)};
  padding-left: 14px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.silver};
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.darkGray};
`;
