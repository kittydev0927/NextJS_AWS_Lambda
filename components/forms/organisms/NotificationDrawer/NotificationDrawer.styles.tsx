import { styled } from '@mui/material';

import { Button } from '#components/forms/atoms/Button/Button';

export const Drawer = styled('div')`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: 375px;
    max-height: 868px;
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    box-shadow: 12px 14px 53px 0 rgba(0, 0, 0, 0.16);
  }
`;

export const DrawerHeader = styled('div')`
  padding: 0 25px;
  display: flex;
`;

export const DrawerHeaderIcon = styled('div')`
  padding: 28px 14px 52px 1px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding-top: 46px;
  }
`;

export const DrawerHeaderText = styled('div')`
  width: 100%;
  height: 28px;
  padding: 30px 0px 0px 0px;
  vertical-align: top;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.22;
  color: ${({ theme }) => theme.colors.darkGray};
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding-top: 48px;
  }
`;

export const StyledCloseButton = styled(Button)`
  min-width: unset;
  margin: 30px 4px 0px 0px;
  height: 17px;
  width: 17px;
  color: ${({ theme }) => theme.colors.black};
  .MuiSvgIcon-root {
    font-size: 1.854rem;
  }
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-top: 48px;
  }
`;

export const NotificationContainer = styled('div')`
  overflow-y: auto;
  padding: 0 25px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-height: 743px;
  }
`;

export const NotificationWrapper = styled('div')`
  padding: 12px 0 9px 0;
`;
