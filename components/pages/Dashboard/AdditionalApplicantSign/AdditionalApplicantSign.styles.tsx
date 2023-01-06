import { Button, styled } from '@mui/material';

import { theme } from '#styles/styles';

export const StyledDiv = styled('div')`
  padding: 2% 0 20%;
  ${theme.breakpoints.up('sm')} {
    padding: 0 2% 0 5%;
  }
`;

export const StyledLeaseDiv = styled('div')`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px ${theme.colors.lightGray} solid;
  .symbol {
    display: none;
  }
  ${theme.breakpoints.down('sm')} {
    border-bottom: none;
    display: block;
  }
`;

export const StyledButtonsDiv = styled('div')`
  display: flex;
  flex-flow: column;
  justify-content: end;
  align-items: center;
  margin: 0 2%;
  ${theme.breakpoints.up('sm')} {
    flex-flow: row;
    flex-grow: 1;
    margin: 2% 2%;
  }
`;

export const StyledSignButton = styled(Button)`
  width: 238px;
  padding: 15px;
  margin-top: 0.5%;
`;

export const LeaseDescription = styled('div')`
  width: 100%;
  max-width: 649px;
  font-size: 22px;
  margin-bottom: 13%;
  color: ${theme.colors.darkGray};
  ${theme.breakpoints.down('sm')} {
    width: 99%;
    padding-top: 7%;
    margin-bottom: 3%;
  }
`;

export const StyledViewButton = styled(Button)`
  width: 222px;
  height: 30px;
  margin: 10px 40px 0;
  font-size: 18px;
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.22;
  text-align: right;
  color: ${theme.colors.accessibleGreen};
  text-transform: none;
`;
