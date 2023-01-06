import { LoadingButton } from '@mui/lab';
import { Button, styled } from '@mui/material';

import { theme } from '#styles/styles';

// Justification: Pre-existing code.
/* eslint-disable @typescript-eslint/no-magic-numbers */

export const StyledSaveChangesButton = styled(LoadingButton)`
  margin-top: ${theme.spacing(7)};
  background-color: ${theme.colors.teal};
  ${theme.breakpoints.up('sm')} {
    margin-top: 41px;
  }
`;

export const StyledCancelButton = styled(Button)`
  margin-top: ${theme.spacing(2)};
`;
