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
  .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colors.lime};
  }
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
  margin-bottom: 21px;
  height: 50px;
  .MuiFormLabel-root {
    font-family: ${({ theme }) => theme.fonts.Roboto};
  }

  .MuiInputBase-input {
    font-family: ${({ theme }) => theme.fonts.Roboto};

    &:focus {
      ::placeholder {
        visibility: hidden;
      }
    }
  }
`;

export const ExampleContainer = styled('div')`
  padding-top: 50px;
  padding-bottom: 50px;
  max-width: 246px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: 411px;
  }
`;
