import { styled } from '@mui/material';
import Button from '@mui/material/Button';

import { Tab } from '#components/navigation/molecules/Tab/Tab';
import { TabsContainer } from '#components/navigation/molecules/TabsContainer/TabsContainer';

import type { IStyles } from './LoginPage.types';

export const StyledModalComponent = styled('div')`
  padding: 0;
`;

export const StyledTabsCon = styled('div')`
  max-width: 702px;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-top: 0px;
  }
`;

export const StyledPaper = styled('div')`
  max-width: 88%;
  padding: 72px 0 146px;
  margin: 0 auto;
  .inner-paper {
    padding: 0;
  }
  @media screen and (max-width: 600px) {
    padding: 32px 5%;
  }
  form {
    max-width: 400px;
    margin: 0 auto;
  }
  .MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12 {
    padding: 10px 0 0 8px;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      padding: 24px 24px 0;
    }
  }
`;

export const StyledDivider = styled('div')`
  .MuiDivider-root {
    margin-top: 45px;
    margin-bottom: 40px;
  }
`;

export const StyledSignIn = styled('div')`
  @media screen and (max-width: 500px) {
    h6 {
      font-size: 18px;
    }
  }
`;

export const StyledSigninContainer = styled('div')`
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 20px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: 470px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
  }
`;

export const StyledIcon = styled('div')`
  margin-left: 25px;
  padding: 0px;
  object-fit: contain;
  position: absolute;
  left: 0;

  @media (max-width: 894px) {
    margin-left: 0px;
  }
`;

export const StyledButton = styled(Button)<IStyles>`
  border-radius: 15px;
  padding: 12px;
  margin: 9px 0px;
  background-color: ${({ buttoncolor }) => buttoncolor};
`;

export const StyledButtonSection = styled('div')`
  max-width: 400px;
  margin: 0 auto;
`;

export const StyledTab = styled(Tab)`
  font-size: 14px;
  margin-bottom: 0px;
  min-height: 28px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 20px;
    min-height: 48px;
  }
`;
export const StyledTabsContainer = styled(TabsContainer)`
  padding-left: 31px;
  padding-right: 31px;
  min-height: 28px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 20px;
    padding-bottom: 0px;
    min-height: 48px;
  }
`;
