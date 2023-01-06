import { Button, Grid, styled } from '@mui/material';

import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledDiv = styled('div')`
  display: block;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    display: flex;
    flex-grow: 1;
  }
`;

export const StyledProfileDiv = styled('div')`
  flex: 1 1 40%;
  margin: 0px 6px 0px 20px;
`;

export const StyledProfilePrintDiv = styled('div')`
  padding-bottom: 30px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding-bottom: 15px;
  }
`;

export const StyledCongTypography = styled(Typography)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.darkGray};
  padding-bottom: 50px;
`;

export const StyledCityCon = styled(Grid)`
  flex: 1 1 50%;
  margin: 0px 6px 31px 20px;
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const StyledCityTypography = styled(Typography)`
  font-size: 16px;
  word-wrap: break-word;
  line-height: 1.63;
`;

export const StyledCityGrid = styled(Grid)`
  display: flex;
  justify-content: center;
`;

export const StyledMoreTypography = styled(Typography)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.accessibleGreen};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  padding-top: 3px;
`;

export const StyledHomesEditDiv = styled('div')`
  flex: '1 1 10%';
  margin: 0px 2px 30px 10px;
`;

export const StyledHomesButton = styled(Button)`
  padding: 15px;
  margin-bottom: 10px;
`;

export const StyledEditButton = styled(Button)`
  padding: 15px;
`;
