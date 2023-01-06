import { styled } from '@mui/material';

import { Button } from '#components/forms/atoms/Button/Button';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledWelcomeContainer = styled(Typography)`
  width: 100%;
  text-align: center;
  height: 42px;
  line-height: 42px;
  padding-top: 52px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 30px;
    height: 31px;
    line-height: 35px;
    padding-top: 36px;
  }
`;

export const StyledOptionText = styled(Typography)`
  margin-top: 11.89px;
  width: 100%;
  height: 74px;
  font-size: 16px;
  text-align: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-top: 18px;
  }
`;

export const StyledOptionContainer = styled(`div`)`
  margin: auto;
  width: 750px;
  height: 446px;
  padding-bottom: 92px;
  .new-app {
    float: right;
    margin-left: 25px;
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 248px;
    height: 480px;
    padding-bottom: 46px;
    .new-app {
      float: left;
      margin-left: 0px;
      position: unset;
      margin-top: 30px;
    }
  }
`;

export const StyledOption = styled(`div`)`
  width: 350px;
  float: left;
  filter: drop-shadow(12px 14px 53px rgba(0, 0, 0, 0.16));
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background: ${({ theme }) => theme.colors.white};
  .new-user {
    background: ${({ theme }) => theme.colors.seaFantasy};
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 248px;
    padding: 0 0 0 0;
    box-shadow: 12px 14px 53px rgba(0, 0, 0, 0.16);
    display: block;
  }
`;

export const StyledOptionHeader = styled(`div`)`
  clear: both;
  width: 350px;
  height: 156px;
  border-radius: ${({ theme }) => theme.borderRadius.primary} ${({ theme }) => theme.borderRadius.primary} 0 0;
  background: ${({ theme }) => theme.colors.caribbeanSwim};
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 248px;
    height: 24px;
    padding: 0 0 0 0;
    box-shadow: 12px 14px 53px rgba(0, 0, 0, 0.16);
`;

export const StyledResImgWrapper = styled(`div`)`
  padding: 32px 137.27px 36.47px 132.5px;
  display: block;
  ${({ theme }) => theme.breakpoints.down('md')} {
    display: none;
    padding: 0 0 0 0;
  }
`;

export const StyledNewAppImgWrapper = styled(`div`)`
  padding: 40px 126.79px 40.43px 128.5px;
  display: block;
  ${({ theme }) => theme.breakpoints.down('md')} {
    display: none;
    padding: 0 0 0 0;
  }
`;

export const StyledOptionContent = styled(`div`)`
  clear: both;
  width: 350px;
  height: 290px;
  border-radius: 0 0 ${({ theme }) => theme.borderRadius.primary} ${({ theme }) => theme.borderRadius.primary};
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 248px;
    height: 220px;
  }
`;

export const StyledOptionContentTitle = styled(`div`)`
  font-family: ${({ theme }) => theme.fonts.Raleway};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 20px;
  line-height: 23px;
  width: 210px;
  height: 47px;
  padding: 31px 66px 12px 74px;
  color: ${({ theme }) => theme.colors.darkGray};
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 18px;
    line-height: 21px;
    padding: 17px 14px 3px 23px;
  }
`;

export const StyledOptionContentText = styled(`div`)`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 18px;
  line-height: 22px;
  padding: 0 71px 8.82px 74px;
  width: 205px;
  height: 102px;
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 16px;
    padding: 17px 14px 3px 23px;
    height: 88px;
  }
`;

export const StyledLink = styled(`a`)`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 16px;
  letter-spacing: 0.363636px;
  display: block;
  width: 213.42px;
  height: 49.18px;
  background: ${({ theme }) => theme.colors.caribbeanSwim};
  margin: 8.82px 70.58px 40px 66px;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  line-height: 49px;
  &:hover {
    background-color: rgba(22, 130, 129, 0.04);
    color: ${({ theme }) => theme.colors.caribbeanSwim};
  }
`;

export const StyledOptionButton = styled(Button)`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  background-color: ${({ theme }) => theme.colors.seaFantasy};
  font-size: 16px;
  line-height: 22px;
  margin: 8.82px 70.58px 40px 66px;
  width: 213.42px;
  height: 49.18px;
  &:hover {
    color: ${({ theme }) => theme.colors.seaFantasy};
  }
`;

export const StyledMobileLink = styled(`a`)`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 16px;
  line-height: 22px;
  display: block;
  width: 69.21px;
  height: 22px;
  padding: 6px 19.82px 17px 158px;
  color: ${({ theme }) => theme.colors.caribbeanSwim};
  text-decoration: none;
`;

export const StyledMobileLoginButton = styled(`div`)`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  color: ${({ theme }) => theme.colors.seaFantasy};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 16px;
  line-height: 22px;
  padding: 6px 22.15px 17px 84px;
  width: 143.21px;
  height: 22px;
  cursor: pointer;
`;
