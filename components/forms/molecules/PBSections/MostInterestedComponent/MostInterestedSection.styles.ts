import { styled, Typography } from '@mui/material';

import { Button } from '#components/forms/atoms/Button/Button';
import { TextField } from '#components/forms/atoms/TextField/TextField';

export const StyledCheckboxWrapper = styled('div')`
  .MuiTypography-root {
    text-transform: none;
    color: ${({ theme }) => theme.colors.darkGray};
  }
  .MuiFormControlLabel-root {
    margin-right: 0;
  }
`;

export const StyledNextButton = styled(Button)`
  max-width: 248px;
  width: 100%;
  padding: 0 30px 1px 37px;
`;

export const StyledBuilderHeader = styled(Typography)`
  margin: 16px 0 31px 0;
`;

export const StyledMainRight = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const StyledTopRight = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex;
  height: fit-content;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    justify-content: flex-start;
  }
`;

export const StyledAdditionAnswerSelect = styled('div')`
  max-width: 268px;

  & .MuiInputBase-root {
    width: 100%;
    color: ${({ theme }) => theme.colors.darkGray};
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    max-width: 213px;
  }
`;

export const StyledAdditionAnswerInput = styled(TextField)`
  margin: 5px 0 0 32px;
  max-width: 268px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    max-width: 216px;

    & .MuiFormControl-root {
      width: 100%;
    }
  }

  .MuiFormLabel-root {
    display: none;
  }

  .MuiInputAdornment-root {
    margin-right: 8px;
  }
`;
