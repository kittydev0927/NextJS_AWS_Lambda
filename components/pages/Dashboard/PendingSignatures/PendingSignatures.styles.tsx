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
  .title {
    span {
      display: block;
    }
  }
  ${theme.breakpoints.up('sm')} {
    padding-bottom: 15px;
    .title {
      font-size: 22px;
      span {
        display: inline;
      }
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
  color: #3a383c;
  ${theme.breakpoints.down('sm')} {
    margin: 34px 0;
    font-size: 14px;
  }
`;

export const StyledHomesButton = styled(Button)`
  width: 238px;
  height: 51px;
  text-transform: none;
  font-size: 16px;
  font-weight: ${theme.fontWeight.semiBold};
  background-color: ${theme.colors.teal};
  border-radius: ${theme.borderRadius.primary};
  line-height: 1.38;
  padding: 15px;
  letter-spacing: 0.36px;
  color: ${theme.colors.white};
`;

export const LeaseTitle = styled('div')`
  .title {
    width: 100%;
    height: 32px;
    font-size: 22px;
    ${theme.breakpoints.down('sm')} {
      font-size: 20px;
      height: auto;
    }
  }
`;

export const LeaseDescription = styled('div')`
  width: 100%;
  max-width: 623px;
  font-size: 18px;

  ${theme.breakpoints.down('sm')} {
    width: 99%;
    padding-top: 3%;
    font-size: 16px;
  }
`;

export const StyledFaqsButton = styled(Button)`
  height: 50px;
  width: 100%;
  font-size: 18px;
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.22;
  color: ${theme.colors.accessibleGreen};
  text-transform: none;
  span {
    text-align: right;
  }
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
`;

export const StyledTotalPrice = styled('div')`
  margin-top: 7px;
  font-size: 33px;
  font-weight: ${theme.fontWeight.bold};
  ${theme.breakpoints.down('sm')} {
    font-size: 32px;
  }
`;

export const StyledTypography = styled('div')`
  max-width: 428px;
  font-size: 16px;
  line-height: 1.22;
  text-decoration: none;
  .applicant {
    font-size: 14px;
    padding-top: 22px;
    div {
      display: block;
      padding-top: 3px;
    }
    .pending-status {
      color: #b3b3b3;
      font-weight: ${theme.fontWeight.bold};
    }
    .resend {
      color: #136069;
      font-weight: ${theme.fontWeight.bold};
    }
  }
  ${theme.breakpoints.up('sm')} {
    font-size: 16px;
    padding-bottom: 7px;
    .applicant {
      font-size: 16px;
      padding-top: 12px;
      div {
        padding-top: 0;
        display: inline;
      }
    }
  }
`;

export const StyledLink = styled('a')``;
