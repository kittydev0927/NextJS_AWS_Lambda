import { styled } from '@mui/material';

import { DatePicker } from '#components/forms/atoms/DatePicker/DatePicker';

export const StyledPBMoveInDateWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding-bottom: 35px;
`;
export const StyledDatePicker = styled(DatePicker)`
  margin-top: 60px;
  max-width: 484px;
  .MuiTextField-root {
    width: 100%;
  }
`;
