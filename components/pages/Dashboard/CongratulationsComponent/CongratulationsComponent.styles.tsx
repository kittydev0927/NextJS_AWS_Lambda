import { Button, styled } from '@mui/material';

import { Typography } from '#components/layouts/atoms/Typography/Typography';
import { theme } from '#styles/styles';

export const StyledDiv = styled(Typography)`
  display: block;
  padding: 0px;
  ${theme.breakpoints.up('sm')} {
    padding: 0px 23px 0px 38px;
  }
`;

export const StyledLeaseDiv = styled(Typography)`
  display: flex;
  justify-content: space-between;
  .symbol {
    display: none;
  }
  ${theme.breakpoints.down('sm')} {
    display: block;
  }
`;

export const StyledLeasePrintDiv = styled(Typography)`
  padding-bottom: 40px;
  ${theme.breakpoints.up('sm')} {
    padding-bottom: 15px;
    padding-top: 25px;
    .title {
      font-size: 22px;
    }
  }
`;

export const StyledVideoButton = styled(Typography)`
  display: flex;
  align-items: center;
  flex-flow: column-reverse;
  padding-bottom: 4px;
  .lease-faq {
    margin-top: 32px;
  }
  ${theme.breakpoints.up('sm')} {
    justify-content: end;
    flex-flow: row;
    align-items: center;
    width: 100%;
    padding-bottom: 11px;
  }
  .lease-faq {
    margin-right: 25px;
    margin-top: 0px;
    span {
      font-size: 18px;
      font-weight: ${theme.fontWeight.medium};
      line-height: 1.22;
      color: ${theme.colors.accessibleGreen};
      width: 212px;
    }
  }
`;

export const StyledSideTypography = styled(Typography)`
  padding-top: 35px;
  padding-bottom: 20.5px;
  text-align: -webkit-right;
  font-size: 16px;
  line-height: 1.22;
  ${theme.breakpoints.down('sm')} {
    padding-top: 20px;
  }
`;

export const StyledHomesEditDiv = styled(Typography)`
  display: flex;
  flex-flow: column-reverse;
  margin-top: 32px;
  align-items: center;
  margin: 18.5px 0px 0px;
  ${theme.breakpoints.up('sm')} {
    flex-flow: row;
    flex-grow: 1;
  }
`;

export const StyledHomesButton = styled(Button)`
  width: 238px;
  height: 51px;
  text-transform: none;
  font-size: 16px;
  font-weight: ${theme.fontWeight.medium};
  background-color: ${theme.colors.teal};
  border-radius: ${theme.borderRadius.primary};
  line-height: 1.38;
  padding: 15px;
  letter-spacing: 0.36px;
  color: ${theme.colors.white};
  ${theme.breakpoints.down('sm')} {
    width: 255px;
  }
`;

export const LeaseTitle = styled(Typography)`
  .title {
    width: 200px;
    height: 35px;
    font-size: 24px;
    font-weight: ${theme.fontWeight.extraBold};
    color: ${theme.colors.darkGray};
    ${theme.breakpoints.down('sm')} {
      margin-left: 15%;
      margin-top: 15%;
    }
  }
`;

export const LeaseDescription = styled(Typography)`
  margin-top: 6px;
  width: 75%;
  max-width: 649px;
  font-size: 18px;
  margin-left: 11px;
  ${theme.breakpoints.down('sm')} {
    font-size: 16px;
    width: 73%;
    padding-top: 1%;
    text-align: left;
    line-height: 1.63;
    margin-left: 0px;
  }
`;

export const StyledContactButton = styled(Button)`
  width: 243px;
  height: 49px;
  font-size: 16px;
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.38;
  color: ${theme.colors.accessibleGreen};
  letter-spacing: 0.36px;
  ${theme.breakpoints.down('sm')} {
    width: 100%;
  }
`;

export const StyledTotalSigning = styled('div')`
  width: 100%;
  height: 72px;
  font-size: 21px;
  text-align: right;
  color: ${theme.colors.carbon};
`;

export const StyledTotalPrice = styled('div')`
  margin-top: 7px;
  font-size: 33px;
  font-weight: ${theme.fontWeight.bold};
`;
