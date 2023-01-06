import { styled } from '@mui/material';

import { Button } from '#components/forms/atoms/Button/Button';
import { Typography } from '#components/layouts/atoms/Typography/Typography';
import { theme } from '#styles/styles';

export const StyledContainer = styled('div')`
  padding: 45px 0 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 112px 0 128px 0;
  }
`;

export const StyledHeaderText = styled('div')`
  font-family: ${({ theme }) => theme.fonts.Raleway};
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 22px;
  margin-bottom: 25px;
  width: 72%;
  align-self: center;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    text-align: center;
    width: 100%;
    font-size: 24px;
    margin-left: -55px;
    margin-bottom: 25px;
  }
`;

export const StyledScrollBox = styled('div')`
  height: 291px;
  margin: 0 37px 0 37px;
  border: 1px solid ${theme.colors.isabelline};
  border-radius: 15px;
  overflow-y: scroll;
  background-color: ${theme.colors.isabelline};
  ${({ theme }) => theme.breakpoints.up('sm')} {
    height: 343px;
    max-width: 412px;
    margin: 0;
  }
`;

export const StyledBoxContainer = styled('div')`
  padding: 27px 29px 8px 29px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 19px 35px 8px 35px;
  }
`;

export const StyledBoxText = styled(Typography)`
  margin: 0 0 12px 0;
  font-size: 12px;
  line-height: 1.5;

  span {
    font-weight: ${theme.fontWeight.bold};
  }
`;

export const StyledFeeContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 25px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-top: 16px;
    margin-bottom: 33px;
  }
`;

export const StyledFeeDetails = styled(Typography)`
  margin: 0 50px 0 50px;
  text-align: center;
  font-size: 18px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin: 0;
    span {
      font-weight: ${theme.fontWeight.bold};
    }
  }
`;

export const StyledFeeText = styled(Typography)`
  margin: 12px 0 12px 0;
  font-size: 26px;
  font-weight: ${theme.fontWeight.bold};
`;

export const StyledButtonContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled(Button)`
  width: 243px;
  height: 50px;
  margin: 0 0 12px;
  font-weight: ${theme.fontWeight.bold};
  font-size: 14px;
  span span :first-child {
    margin-right: 15px !important;
  }
`;
