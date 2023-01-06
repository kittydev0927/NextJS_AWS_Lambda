import { FormControl, FormGroup, styled } from '@mui/material';

import { Checkbox } from '#components/forms/atoms/Checkbox/Checkbox';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledTypography = styled(Typography)`
  line-height: 22px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  padding: 0 0 17px 0;
`;

export const StyledFormGroup = styled(FormGroup)`
  padding: 0;
  margin: 0;
  .MuiTypography-root {
    padding-right: 8px;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      padding-right: 16px;
    }
    font-family: ${({ theme }) => theme.fonts.Raleway};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: 14px;
  }
`;
export const StyledFormControl = styled(FormControl)`
  padding: 0 0 44px 0;
`;

export const StyledCheckbox = styled(Checkbox)`
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
`;
