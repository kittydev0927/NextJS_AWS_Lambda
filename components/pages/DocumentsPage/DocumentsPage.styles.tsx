import { styled } from '@mui/material';

import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledSolidBackground = styled(Typography)`
  background-color: ${({ theme }) => theme.colors.softPeach};
  padding: 23px 39px 63px 37px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 67px 77px 131px 82px;
  }
`;

export const StyledDocHeader = styled(Typography)`
  height: 63px;
  letter-spacing: 0.02px;
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  line-height: 2.71;
  margin: 0 0 27px 0;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 20px;
    line-height: 3.8;
    margin: 0 0 12px 0;
  }
`;

export const StyledHeaderLinks = styled(Typography)`
  width: 100%;
  text-align: center;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    text-align: start;
    width: auto;
    height: 29px;
    float: right;
    padding: 25px 0 9px 0;
  }
`;

export const StyledAllDoc = styled(Typography)`
  padding: 16px 0 0 0;
  div:not(:first-child) {
    background-color: ${({ theme }) => theme.colors.white};
  }
  div:nth-child(2):not(.MuiGrid-root) {
    padding: 0 27px 0 27px;
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    box-shadow: 21px 19px 40px 0 rgba(0, 0, 0, 0.09);
  }
  div.MuiGrid-container:last-child {
    border-radius: ${({ theme }) => theme.borderRadius.primary};
  }

  div.document {
    font-family: ${({ theme }) => theme.fonts.Raleway};
  }

  div.detail {
    font-family: ${({ theme }) => theme.fonts.Roboto};
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 43px 0 0 0;
    div:nth-child(3):not(.MuiGrid-root) {
      border-radius: 0 0 15px 15px;
    }

    div.cell1 {
      font-family: ${({ theme }) => theme.fonts.Raleway};
    }

    div.cell3 {
      font-family: ${({ theme }) => theme.fonts.Roboto};
    }
  }
`;
