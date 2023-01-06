import { Alert, styled } from '@mui/material';

// Justification: Pre-existing code.
/* eslint-disable @typescript-eslint/no-magic-numbers */

export const TextFieldContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${props => props.theme.breakpoints.up('sm')} {
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;

export const StyledListOfCheckboxes = styled('div')`
  margin-top: ${({ theme }) => theme.spacing(3)};
  & > .MuiFormGroup-root {
    &:not(:last-child) {
      margin-bottom: 11px;
      ${props => props.theme.breakpoints.up('sm')} {
        margin-bottom: 21px;
      }
    }
    .MuiCheckbox-root {
      align-self: baseline;
    }
    .MuiTypography-root {
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      font-size: 14px;
      font-family: ${({ theme }) => theme.fonts.Raleway};
    }
  }
`;

export const StyledValidationError = styled(Alert)`
  margin-bottom: 20px;
`;
