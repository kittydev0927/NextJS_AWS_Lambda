import { styled } from '@mui/material';

import { Link } from '#components/layouts/atoms/Link/Link';

export const StyledHeaderContainer = styled('div')`
  background-color: ${({ theme }) => theme.colors.accessibleGreen};
  padding: 24px 30px 20px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 32px 81px 32px 81px;
  }
`;

export const StyledHeaderLogoCon = styled('div')`
  cursor: pointer;
  margin-top: 3px;
`;

export const StyledHeaderGrid = styled('div')`
  display: grid;
  grid-template-columns: 7fr 1fr 1fr 1fr;
  align-items: center;
  ${({ theme }) => theme.breakpoints.up('md')} {
    grid-template-columns: 2.3fr 8fr 1.5fr 44px;
  }
`;

export const StyledPhone = styled('div')`
  display: flex;
  justify-content: center;
  img {
    min-width: 26px;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    justify-content: flex-start;
    margin-left: 20px;
  }
  ${({ theme }) => theme.breakpoints.up('lg')} {
    margin-left: unset;
    padding-left: 5px;
    margin-top: 7px;
  }
`;

export const StyledLink = styled(Link)`
  display: none;
  ${({ theme }) => theme.breakpoints.up('md')} {
    display: block;
    margin-top: -3px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    margin-left: 16px;
    text-decoration: underline;
  }
`;

export const StyledProfile = styled('div')`
  .dropdown-container.MuiBox-root {
    margin-right: 15px;
    margin-left: 15px;
    ${({ theme }) => theme.breakpoints.up('md')} {
      margin-right: 0;
    }
    .dropdown-button {
      width: fit-content;
    }
  }
  .MuiBox-root {
    justify-content: flex-end;
    padding-bottom: 3px;
  }
  .MuiTypography-root {
    display: inline-flex;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    &.username {
      display: none;
      ${({ theme }) => theme.breakpoints.up('md')} {
        display: inline-flex;
      }
    }
  }
}
.MuiButtonBase-root {
  line-height: unset;
}
`;

export const StyledNotification = styled('div')`
display: flex
align-items: center;
justify-content: center;
${({ theme }) => theme.breakpoints.up('md')} {
  display: flex;
  justify-content: flex-end;
  padding-right: 13px;
}
.notification-bell-con {
  padding: 0 0 0 2px;
  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: 1px 0 0 0;
  }
}
`;
