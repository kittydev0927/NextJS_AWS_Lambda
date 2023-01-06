import { Button, styled } from '@mui/material';

import { theme } from '#styles/styles';

export const StyledDiv = styled('div')`
  display: block;
  padding: 0px;
  ${theme.breakpoints.up('sm')} {
    padding: 0px 23px 0px 38px;
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

export const StyledLeasePrintDiv = styled('div')`
  padding-bottom: 40px;
  ${theme.breakpoints.up('sm')} {
    padding-bottom: 15px;
    .title {
      font-size: 22px;
    }
  }
`;

export const StyledEditButtons = styled('div')`
  display: flex;
  align-items: center;
  flex-flow: column-reverse;
  .lease-faq {
    margin-top: 32px;
  }
  ${theme.breakpoints.up('sm')} {
    justify-content: space-between;
    flex-flow: row;
    align-items: center;
    width: 100%;
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

export const StyledSideTypography = styled('div')`
  padding-top: 35px;
  padding-bottom: 20.5px;
  text-align: -webkit-right;
  font-size: 16px;
  line-height: 1.22;
  color: ${theme.colors.darkGray};
  ${theme.breakpoints.down('sm')} {
    border-top: 2px ${theme.colors.lightGray} solid;
    padding-top: 20px;
  }
`;

export const StyledHomesEditDiv = styled('div')`
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

export const NoteDiv = styled('div')`
  max-width: 517px;
  height: 53px;
  font-size: 16px;
  color: ${theme.colors.darkGray};
  font-family: ${theme.fonts.Roboto};
  ${theme.breakpoints.down('sm')} {
    margin: 34px 0;
    font-size: 14px;
  }
`;

export const StyledHomesButton = styled(Button)`
  width: 238px;
  padding: 15px;
  font-family: ${theme.fonts.Roboto};
  font-size: 16px;
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.38;
  letter-spacing: 0.36px;
  color: ${theme.colors.white};
`;

export const LeaseTitle = styled('div')`
  .title {
    height: 32px;
    font-size: 22px;
    font-weight: ${theme.fontWeight.extraBold};
    font-family: ${theme.fonts.Raleway};
    color: ${theme.colors.darkGray};
    ${theme.breakpoints.down('sm')} {
      font-size: 20px;
    }
  }
`;

export const LeaseDescription = styled('div')`
  width: 100%;
  max-width: 508px;
  font-size: 18px;
  color: ${theme.colors.darkGray};
  font-family: ${theme.fonts.Roboto};
  ${theme.breakpoints.down('sm')} {
    width: 99%;
    padding-top: 3%;
    font-size: 16px;
  }
`;

export const StyledFaqsButton = styled(Button)`
  height: 50px;
  width: 248px;
  margin-top: 23px;
  font-size: 18px;
  font-weight: ${theme.fontWeight.medium};
  font-family: ${theme.fonts.Roboto};
  line-height: 1.22;
  text-align: right;
  color: ${theme.colors.jade};
  text-transform: none;
  ${theme.breakpoints.down('sm')} {
    width: 228px;
  }
`;

export const StyledTotalSigning = styled('div')`
  width: 100%;
  height: 72px;
  font-size: 21px;
  text-align: right;
  color: ${theme.colors.carbon};
  font-family: ${theme.fonts.Roboto};
`;

export const StyledTotalPrice = styled('div')`
  margin-top: 7px;
  font-size: 33px;
  font-weight: ${theme.fontWeight.bold};
`;
