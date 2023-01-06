import { Button, Link, styled } from '@mui/material';

import { Typography } from '#components/layouts/atoms/Typography/Typography';
import { theme } from '#styles/styles';

export const StyledDiv = styled('div')`
  display: block;
  padding: 0px;
  ${theme.breakpoints.up('sm')} {
    padding: 0px 23px 0px 38px;
  }
`;

export const StyledSecurityDiv = styled('div')`
  .symbol {
    display: none;
  }
  ${theme.breakpoints.up('sm')} {
    min-height: 200px;
    border-bottom: 2px solid ${theme.colors.lightGray};
    .symbol {
      display: inline-block;
    }
  }
`;

export const StyledSecurityPrintDiv = styled('div')`
  padding-bottom: 20px;
  .title {
    font-size: 20px;
    color: ${theme.colors.darkGray};
    span {
      font-weight: ${theme.fontWeight.bold};
    }
  }
  ${theme.breakpoints.up('sm')} {
    padding-bottom: 15px;
    .title {
      font-size: 22px;
    }
  }
`;

export const StyledDescriptionDiv = styled('div')`
  max-width: 604px;
  margin: 24px 0 0 14px;
  font-size: 14px;
  line-height: 1.38;
  margin-top: 24px;
  color: ${theme.colors.darkGray};
  ${theme.breakpoints.up('sm')} {
    margin: 0px;
    font-size: 16px;
  }
`;

export const StyledEditButtons = styled('div')`
  display: flex;
  align-items: center;
  flex-flow: column-reverse;
  .security-faq {
    margin-top: 32px;
  }
  ${theme.breakpoints.up('sm')} {
    justify-content: end;
    flex-flow: row;
    align-items: center;
    width: 100%;
  }
  .security-faq {
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
export const StyledCongTypography = styled(Typography)`
  max-width: 732px;
  font-size: 16px;
  line-height: 1.22;
  color: ${theme.colors.darkGray};
  ${theme.breakpoints.up('sm')} {
    font-size: 18px;
    padding-bottom: 50px;
  }
`;

export const StyledHomesEditDiv = styled('div')`
  display: flex;
  flex-flow: column-reverse;
  font-family: ${theme.fonts.Roboto}
  margin-top: 32px;
  align-items: center;
  ${theme.breakpoints.up('sm')} {
    flex-flow: row;
    flex-grow: 1;
    margin: 6.5px 0px 0px;
  }
`;

export const StyledHomesButton = styled(Button)`
  width: 238px;
  padding: 15px;
`;

export const StyledFaqsButton = styled(Link)`
  margin-right: 0px;
  text-transform: none;
  width: 212px;
  height: 50px;
  padding: 0px;
  margin-top: 24px;
  font-size: 18px;
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.22;
  color: ${theme.colors.accessibleGreen};
  border: none;
  ${theme.breakpoints.up('sm')} {
    margin-top: 0px;
    margin-right: 25px;
  }
`;
