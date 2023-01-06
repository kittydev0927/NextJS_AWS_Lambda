import { styled, Typography } from '@mui/material';

import { TextField } from '#components/forms/atoms/TextField/TextField';

export const StyledAdditionalInfoContainer = styled('div')`
  margin: 25px;
  margin-top: 2px;
  max-width: 412px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin: 25px;
    margin-top: 25px;
  }
`;

export const StyledHeader = styled(Typography)`
  line-height: 0.92;
`;

export const StyledYesNoContainer = styled('div')`
  h6 {
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: 16px;
    margin-bottom: 8px;
    margin-top: 26px;
  }

  > .MuiFormControl-root > .MuiFormGroup-root {
    display: flex;
    flex-direction: row;
    gap: 25px;
  }

  margin-bottom: 26px;
`;

export const StyledInput = styled(TextField)`
  margin-bottom: 14px;
  height: 50px;
`;

export const TextFieldContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${props => props.theme.breakpoints.up('sm')} {
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;

export const StyledTypography = styled(Typography)`
  margin-top: 12px;
`;
