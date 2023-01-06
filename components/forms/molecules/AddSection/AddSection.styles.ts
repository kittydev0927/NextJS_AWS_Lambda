import { Grid, styled } from '@mui/material';

import { DatePicker } from '#components/forms/atoms/DatePicker/DatePicker';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledSection = styled('div')`
  display: flex;
  justify-content: space-between;
  border: solid 1px ${({ theme }) => theme.colors.lightGray};
  border-width: 1px 0;
  color: ${({ theme }) => theme.colors.jade};
  align-items: center;
  cursor: pointer;
  margin-bottom: 50px;
  margin-top: 36px;
  & .addIcon {
    width: 13px;
    height: 13px;
    margin-right: 25px;
    display: flex;
  }
`;

export const StyledAddButton = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  flex: 1;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const StyledFieldsSection = styled('div')`
  display: grid;
  grid-row-gap: 17px;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const StyledDatePicker = styled(DatePicker)`
  .MuiTextField-root {
    width: 100%;
    label {
      padding-left: 20px;
    }
  }
`;

export const StyledFieldTitle = styled(Typography)`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const StyledGridContainer = styled(Grid)`
  justify-content: space-between;
  padding-bottom: 14px;
`;

export const StyledGridField = styled(Grid)`
  &.MuiGrid-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const StyledGridButton = styled(Grid)`
  &.MuiGrid-item {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  button {
    text-transform: capitalize;
  }
`;
