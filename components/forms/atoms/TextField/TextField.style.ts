import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

export const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    height: 50px;
    font-size: 14px;
    font-weight: normal;
    & fieldset {
      border: solid 1.5px ${({ theme }) => theme.colors.silver};
      legend {
        margin: 0 10px;
        span {
          margin-left: 10px;
        }
      }
    }
    &.Mui-focused {
      &.Mui-error {
        fieldset {
          border-color: ${({ theme }) => theme.colors.thunderbird};
        }
      }
      fieldset {
        border-color: ${({ theme }) => theme.colors.lime};
      }
    }
  }
  .MuiInputBase-input {
    padding-left: 23px;
  }
  .MuiFormLabel-root {
    padding-left: 10px;
  }
  .MuiInputLabel-shrink {
    padding-left: 20px;
  }
  label.Mui-error {
    color: ${({ theme }) => theme.colors.darkGray};
    .MuiOutlinedInput-notchedOutline {
      color: ${({ theme }) => theme.colors.thunderbird};
    }
  }
  label.Mui-focused {
    color: ${({ theme }) => theme.colors.darkGray};
  }
  .MuiFormHelperText-root {
    color: ${({ theme }) => theme.colors.thunderbird};
    font-size: 14px;
  }
` as typeof TextField;

export const StyledWarningSign = styled(ErrorOutlineIcon)`
  color: ${({ theme }) => theme.colors.roofTerracotta};
`;

export const StyledIconButton = styled(IconButton)`
  margin-right: 8px;
`;
