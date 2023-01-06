import { styled } from '@mui/material';
import Image from 'next/image';

import { TextField } from '#components/forms/atoms/TextField/TextField';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledContainer = styled('form')`
  max-width: 412px;
  .MuiOutlinedInput-root {
    padding-top: 0;
    padding-bottom: 0;
    min-height: 50px;
  }
  .MuiAutocomplete-endAdornment {
    top: inherit;
  }
  .MuiFormControl-root .MuiOutlinedInput-root .MuiAutocomplete-input {
    padding-left: 18px;
  }
`;

export const StyledHeading = styled(Typography)`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const StyledIcon = styled(Image)`
  filter: brightness(0) saturate(100%) invert(29%) sepia(11%) saturate(4302%) hue-rotate(143deg) brightness(91%)
    contrast(85%);
  transform: rotate(90deg);
`;

export const StyledTextField = styled(TextField)`
  margin-top: 15px;
`;
export const StyledStateAutocompleteContainer = styled('div')`
  margin-top: 15px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-right: 21px;
  }
`;
