import { Alert, Grid, styled } from '@mui/material';

import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledRegistrationFormContainer = styled('div')`
  .MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4 {
    padding-top: 24px;
    margin-bottom: 24px;
    margin-left: 0;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      padding-top: 26px;
      margin-bottom: 40px;
    }
  }
  .MuiGrid-root.MuiGrid-item {
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export const StyledTextFieldsCon = styled('div')`
  display: flex;
  flex-direction: column;
  .MuiTextField-root {
    margin-bottom: 1rem;
  }
`;

export const StyledInterestAreaContainer = styled('div')`
  display: flex;
  flex-direction: column;

  .MuiFormControl-root {
    width: 100%;
  }

  .MuiInputBase-root {
    margin: 20px 0px 0px 0px;
  }

  .MuiOutlinedInput-root {
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    height: 50px;
    padding-left: 15px;
    color: ${({ theme }) => theme.colors.darkGray};

    & fieldset {
      border: solid 1.5px ${({ theme }) => theme.colors.silver};
    }

    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.colors.lime};
    }
  }
  .MuiFormLabel-root {
    padding-left: 20px;
  }
  .MuiOutlinedInput-notchedOutline {
    color: ${({ theme }) => theme.colors.thunderbird};
  }
`;

export const StyledInterestHeaderTypography = styled(Typography)`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-family: ${({ theme }) => theme.fonts.Raleway};
`;

export const StyledDivider = styled('div')`
  .MuiDivider-root {
    margin-top: 25px;
    margin-bottom: 16px;
  }
`;

export const StyledCheckbox = styled('div')`
  .MuiFormControlLabel-root {
    margin-bottom: 22px;
  }
  .MuiFormHelperText-root {
    margin-left: 0;
  }
  .MuiCheckbox-root {
    align-self: baseline;
  }
  p {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-family: ${({ theme }) => theme.fonts.Roboto};
  }
  span {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-family: ${({ theme }) => theme.fonts.Roboto};
    font-size: 14px;
  }
`;

export const StyledCheckboxCon = styled('div')`
  margin-bottom: 30px;
`;

export const StyledGrid = styled(Grid)`
  width: inherit;
`;

export const StyledValidationError = styled(Alert)`
  margin-bottom: 20px;
`;

export const StyledProgress = styled('div')`
  display: flex;
  justify-content: center;
`;

export const StyledTypography = styled(Typography)`
  font-family: Raleway;
  font-size: 18px;
  padding-top: 2px;
  padding-right: 5px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: 24px;
    padding-right: 0;
  }
`;
