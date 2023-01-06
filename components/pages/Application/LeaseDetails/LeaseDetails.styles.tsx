import { FormControl, InputLabel, styled } from '@mui/material';

import { Button } from '#components/forms/atoms/Button/Button';
import { DatePicker } from '#components/forms/atoms/DatePicker/DatePicker';
import { Select } from '#components/forms/atoms/Select/Select';
import { Link } from '#components/layouts/atoms/Link/Link';
import { Typography } from '#components/layouts/atoms/Typography/Typography';
import { PageLayoutApplication } from '#components/layouts/organisms/PageLayoutApplication/PageLayoutApplication';

export const StyledPageLayoutApplication = styled(PageLayoutApplication)`
  display: flex;
  flex-direction: column;
  position: relative;
  .MuiPaper-root.outer-paper {
    padding: 0;
  }
`;

export const StyledContainer = styled('div')`
  padding: 45px 27px 0;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 88px 0 0;
  }
`;

export const StyledText = styled(Typography)`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.darkGray};
  padding: 12px 0;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 18px;
    padding: 22px 0;
  }
`;

export const StyledDT = styled('dt')`
  float: left;
`;

export const StyledDD = styled('dd')`
  overflow-y: hidden;
  margin: 0;
`;

export const StyledVertDiv = styled('div')`
  vertical-align: top;
  display: inline;
`;

export const StyledDatePicker = styled(DatePicker)`
  margin: 5px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin: 5px 5px 5px 25px;
  }
  .MuiTextField-root {
    width: 100%;
  }
`;

export const StyledInputLabel = styled(InputLabel)`
  margin-left: 24px;
  top: 6px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  color: ${({ theme }) => theme.colors.darkGray};
  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-left: 5px;
  }
`;

export const StyledFormControl = styled(FormControl)`
  width: 100%;
`;

export const StyledLeaseSelect = styled(Select)`
  margin: 5px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin: 5px 5px 5px 25px;
  }
  div {
    width: 100%;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const StyledSubTextContainer = styled('div')`
  max-width: 238px;
  margin: 5px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: 350px;
    margin: 0 0 0 27px;
  }
`;

export const StyledAdditionalSubTextContainer = styled('div')`
  max-width: 238px;
  margin: 4.4px 0 19.5px 34px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: 350px;
    margin: 4.4px 0 63px 128px;
  }
`;

export const StyledSubText = styled('span')`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 1.5;
  font-size: 12px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.darkGray};
    line-height: 1.83;
  }
`;

export const StyledEnrollTextContainer = styled('div')`
  p > svg {
    margin-bottom: -5px;
    width: 22px;
    height: 23px;
  }
`;

export const StyledEnrollCheckboxContainer = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 22px;
`;

export const StyledVoucherContainer = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 6px 46px 0 22px;
  font-size: 14px;
  line-height: 1.57;
  color: ${({ theme }) => theme.colors.darkGray};

  span {
    font-family: ${({ theme }) => theme.fonts.Roboto};
  }
`;

export const StyledLinkWrapper = styled('div')`
  margin-top: 17px;
  display: inline;
  div {
    display: inline;
  }
`;

export const StyledVoucherLink = styled(Link)`
  span {
    color: ${({ theme }) => theme.colors.accessibleGreen};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

export const StyledCheckboxWrapper = styled('div')`
  margin: 25px 0 42px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-top: 60px;
  }
`;

export const StyledCheckboxTextContainer = styled('div')`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.5;
  padding-top: 34px;
  color: ${({ theme }) => theme.colors.darkGray};
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding-top: 0;
    font-size: 14px;
    svg {
      width: 31px;
    }
`;
export const StyledTermsLink = styled(Button)`
  color: ${({ theme }) => theme.colors.accessibleGreen};
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  text-decoration: underline;
  padding: 0;
  padding-bottom: 3px;
  margin: 0;
  font-size: 12px;
  background-color: transparent;
  &:hover {
    background-color: transparent;
    text-decoration: underline;
  }
  height: 0;
    ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 14px;
`;
// Additional Applicant Styled Components

export const StyledHeader = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.darkGray};

  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin: 50px 0 2px 20px;
    font-size: 18px;
  }
`;

export const StyledDetailsContainer = styled('div')`
  margin: 20px 0 22.4px 34px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.darkGray};
  span {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    margin-left: 32px;
  }
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin: 20px 0 22.4px 20px;
    font-size: 14px;
    span {
      margin-left: 26px;
    }
  }
`;

// LeaseDetailsTips Styled Components

export const StyledLeaseTips = styled('div')`
  .MuiTypography-root {
    padding-bottom: 5px;
  }
`;
