import { AppBar, styled, Toolbar } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  z-index: 1201;
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.accessibleGreen};
  color: ${({ theme }) => theme.colors.white};
  padding: 34px 11px 6px 16px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 36px 79px 33px 84px;
    min-height: 121px;
  }
`;

export const StyledToolbar = styled(Toolbar)`
  min-height: unset;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    justify-content: space-between;
  }
  .menu {
    display: none;
    :hover {
      cursor: pointer;
    }
  }

  @media (max-width: 1205px) {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

    .menu {
      flex-grow: 1;
      flex: 33%;
      display: flex;
    }

    .logo {
      flex: 50%;
      text-align: center;
    }

    .icon {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex: 33%;
    }

    .options {
      display: none;
    }
    .search {
      display: none;
    }
  }
`;

export const StyledIcon = styled('div')`
  display: flex;
  justify-content: flex-end;
  .MuiTypography-root.username {
    padding-right: 12px;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      padding-right: 0;
    }
  }
`;
