import { styled } from '@mui/material';

import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledMonthlyText = styled(Typography)`
  font-size: 50px;
  margin-left: 0;
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.darkGreen};
`;

export const StyledPerMonthText = styled(Typography)`
  font-size: 24px;
  padding-bottom: 8px;
  margin-top: 20px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding-bottom: 24px;
    line-height: 1;
    font-size: 30px;
    margin-top: 10px;
  }
`;

export const StyledMonthlyTextCon = styled('div')`
  display: flex;
  margin: 24px 0 37px 28px;
  .MuiTypography-root:first-child {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 1;
    letter-spacing: -1.65px;
    font-family: ${({ theme }) => theme.fonts.RobotoCondensed};
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    justify-content: center;
  }
`;

export const StyledHeader = styled(Typography)`
  margin: 21px 16px 21px 24px;
  padding: 0;
  font-size: 22px;
  line-height: normal;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 24px;
    padding: 112px 0 13px;
  }
`;

export const StyledToolTipContainer = styled('div')`
  margin-left: 4px;
  display: flex;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-top: 2px;
  }
`;

export const StyledText = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  margin: 0px 35px 28px 26px;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 16px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-bottom: 45px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const StyledHeaderHousing = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  margin: 41px 0px 21px 0px;
  padding: 0;
  font-size: 24px;
  line-height: normal;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 145px 0 13px;
  }
`;

export const StyledTextHousing = styled(Typography)`
  margin: 0px 20px 10px 20px;
  text-align: center;
  font-size: 16px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    line-height: 1.38;
    margin-bottom: 45px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
