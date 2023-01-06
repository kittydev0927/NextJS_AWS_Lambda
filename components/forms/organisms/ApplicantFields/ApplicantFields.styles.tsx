import { styled } from '@mui/material';

import { DatePicker } from '#components/forms/atoms/DatePicker/DatePicker';
import { ControlledTextField } from '#components/forms/atoms/profile/ControlledTextField';

export const StyledContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const StyledDatePicker = styled(DatePicker)`
  height: 50px;
  width: 100%;
  .MuiFormLabel-root {
    padding-left: 10px;
    font-family: ${({ theme }) => theme.fonts.Roboto};
    width: 100%;
  }
  .MuiInputBase-input {
    padding-left: 23px;
    font-family: ${({ theme }) => theme.fonts.Roboto};
    width: 100%;
  }
  .MuiFormControl-root {
    width: 100%;
  }
  .MuiInputBase-root {
    width: 100%;
  }
`;

export const StyledControlledTextField = styled(ControlledTextField)`
  margin-bottom: 29px;
  height: 50px;
  .MuiFormLabel-root {
    font-family: ${({ theme }) => theme.fonts.Roboto};
  }
  .MuiInputBase-input {
    font-family: ${({ theme }) => theme.fonts.Roboto};
    font-size: 14px;
  }
`;

export const StyledCheckboxContainer = styled('div')`
  margin-bottom: -10px;
  p {
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-family: ${({ theme }) => theme.fonts.Raleway};
  }
`;

export const StyledLinkContainer = styled('div')`
  margin-bottom: 25px;
`;

export const StyledFileExplorerContainer = styled('div')`
  margin-top: 34px;
  margin-bottom: 0px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-bottom: 14px;
  }
  width: 100%;
  label {
    margin: 4px 0 0 9px;
  }
`;
