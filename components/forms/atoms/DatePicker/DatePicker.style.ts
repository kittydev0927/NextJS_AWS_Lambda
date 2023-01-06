import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { styled } from '@mui/material';

export const StyledPicker = styled('div')`
  .MuiOutlinedInput-root {
    font-size: 14px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.darkGray};
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    height: 50px;
    & fieldset {
      border: solid 1.5px ${({ theme }) => theme.colors.silver};
      & legend {
        display: none;
      }
    }
  }

  label.Mui-focused,
  label.MuiFormLabel-filled {
    display: none;
  }

  .MuiInputAdornment-root {
    margin-right: 8px;
  }

  .invalidDate {
    & fieldset {
      border: solid 1.5px ${({ theme }) => theme.colors.orangeRed};
    }
  }
`;

export const StyledIcon = styled(CalendarMonthOutlinedIcon)`
  width: 15px;
  height: 18px;
  color: ${({ theme }) => theme.colors.darkGreen};
`;
