import { styled } from '@mui/material';

export const StyledCheckboxWrapper = styled('div')`
  .MuiTypography-root {
    text-transform: none;
    color: ${({ theme }) => theme.colors.darkGray};
    width: 95%;
    text-align: center;
    font-size: 16px;
    font-weight: normal;
    line-height: normal;
    ${({ theme }) => theme.breakpoints.down('sm')} {
      font-size: 14px;
    }
  }
  .MuiFormControlLabel-root {
    height: 50px;
    margin: 0 0 16px;
    padding: 0 13px 0 9px;
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    background-color: ${({ theme }) => theme.colors.isabelline};
  }
  .MuiCheckbox-root {
    width: 5%;
    min-width: 48px;
    &:hover {
      background-color: transparent;
    }
    & svg {
      font-size: 2.5em;
      & rect {
        stroke: none;
        fill: none;
      }
      & path {
        fill: ${({ theme }) => theme.colors.mint};
      }
    }
  }

  .checkbox-checked {
    & div label {
      border: solid 2.5px ${({ theme }) => theme.colors.mint};
    }
  }
`;

export const StyledCheckbox = styled('div')`
  & div label {
    border: solid 2.5px transparent;
  }
`;
