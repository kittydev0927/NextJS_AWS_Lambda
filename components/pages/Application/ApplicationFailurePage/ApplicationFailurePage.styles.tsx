import { styled } from '@mui/material';

import { Button } from '#components/forms/atoms/Button/Button';
import { Typography } from '#components/layouts/atoms/Typography/Typography';
import { Paper } from '#components/layouts/organisms/Paper/Paper';

export const StyledSolidBackground = styled('div')`
  background-color: ${({ theme }) => theme.colors.softPeach};
`;

export const StyledPaper = styled(Paper)`
  padding: 50px 32px 64px 32px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 77px 86px 102px 86px;
  }
  .inner-paper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

export const StyledHeader = styled(Typography)`
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 22px;
  color: ${({ theme }) => theme.colors.darkGray};
  padding: 0;
  margin: 0 30px 0 23px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 24px;
  }
`;

export const StyledText = styled(Typography)`
  text-align: center;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.43;
  color: ${({ theme }) => theme.colors.accessibleGray};
  margin: 31px 26px 63px 26px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    margin: 31px 26px 24px 26px;
  }
  max-width: 650px;
`;

export const StyledButton = styled(Button)`
  text-transform: none;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.38;
  text-align: center;
  color: ${({ theme }) => theme.colors.jade};
  height: 50px;
  padding-left: 16px;
  padding-right: 16px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 18px;
  }
  &:hover {
    background-color: unset;
  }
`;

export const StyledContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 41px;
  padding-bottom: 27px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding-top: 107px;
    padding-bottom: 87px;
  }
`;
