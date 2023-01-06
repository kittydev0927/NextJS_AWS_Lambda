import { styled } from '@mui/material';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';

export const StyledChip = styled(Chip)`
  min-height: 43px;
  background-color: ${({ theme }) => theme.colors.isabelline};
  border-radius: 10px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 14px;
  .MuiChip-deleteIcon {
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const CustomInput = styled(TextField)`
  .MuiOutlinedInput-root {
    border-radius: 15px;
    min-height: 60px;
    padding: 5px;
    .MuiAutocomplete-popupIndicator {
      transform: rotate(0);
    }
  }
  .MuiCircularProgress-root {
    color: ${({ theme }) => theme.colors.teal};
  }
`;
