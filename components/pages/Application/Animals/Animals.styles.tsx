import { styled } from '@mui/material';

import { TextField } from '#components/forms/atoms/TextField/TextField';
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
  padding: 45px 0 0 0;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 112px 0 0 0;
  }
`;

export const StyledHeader = styled(Typography)`
  width: 244px;
  margin-left: 40px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 409px;
    height: 65px;
    margin-left: 15px;
  }
`;

export const StyledText = styled(Typography)`
  width: 278px;
  height: 28px;
  padding: 0 0 8.5px 0;
  margin-left: 40px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 417px;
    height: 41px;
    padding: 22px 34px 0px 0px;
    margin-left: 15px;
  }
`;

export const StyledCheckboxContainer = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 55px;
  margin-bottom: 30px;

  p {
    font-family: ${({ theme }) => theme.fonts.Raleway};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.darkGray};
  }

  div {
    padding: 0px;
  }

  h6 {
    padding-bottom: 5px;
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-left: 35px;
    margin-bottom: 25px;
  }
`;

export const StyledSubText = styled(Typography)`
  width: 218px;
  height: 54px;
  margin-left: 56px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 407px;
    height: 22px;
    margin-left: 35px;
    line-height: 1.57;
  }
`;

export const StyledTextField = styled(TextField)`
  margin-left: 55px;
  margin-bottom: 40px;
  .MuiOutlinedInput-root {
    width: 216px;
    height: 114px;
    border-radius: 15px;
  }

  fieldset {
    legend {
      width: 0px;
    }
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin: 10px 0px 35px 35px;
    .MuiOutlinedInput-root {
      width: 385px;
      height: 78px;
    }
    .MuiOutlinedInput-input {
      padding-top: 15px;
    }
  }
`;

export const StyledSupportCheckboxContainer = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 22px 0px 25px 55px;

  p {
    font-family: ${({ theme }) => theme.fonts.Raleway};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.darkGray};
  }

  div {
    padding-bottom: 0px;
  }

  h6 {
    padding-bottom: 5px;
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin: 0px 0px 25px 35px;
  }
`;

export const StyledUploadDescContainer = styled('div')`
  width: 216px;
  height: 114px;
  margin-left: 55px;
  margin-bottom: 100px;

  div {
    margin-top: 18px;
  }

  label {
    margin-left: 0px;
  }
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-left: 30px;
    margin-bottom: 80px;
    width: 395px;
    height: 70px;
  }
`;

export const StyledUploadDesc = styled('span')`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  line-height: 1.57;
  color: ${({ theme }) => theme.colors.darkGray};
`;

// LeaseDetailsTips Styled Components

export const StyledLeaseTips = styled('div')`
  .MuiTypography-root {
    padding-bottom: 5px;
  }
`;
