import { Card, Grid, styled } from '@mui/material';

export const StyledUpcomingTourWrapper = styled(Card)`
  width: 100%;
  position: relative;
  border-radius: 0;
  .center {
    align-items: center;
  }
  .action-con {
    padding-top: 0;
  }
  background-color: rgba(255, 255, 255, 0);
`;

export const StyledButtons = styled('div')`
  color: ${({ theme }) => theme.colors.accessibleGreen};
  text-align: left;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    text-align: right;
  }
  .action-item {
    font-size: 12px;
    padding: 0 4px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    text-transform: capitalize;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      padding: 0 10px;
      font-size: initial;
    }
  }
`;

export const StyledImg = styled('div')`
  border-radius: 10px;
  width: 78px;
  height: 78px;
  overflow: hidden;
  position: relative;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 96px;
    height: 96px;
  }
`;

export const StyledUpcomingTourImg = styled('div')`
  padding: 10px 15px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-right: 32px;
  }
`;

export const StyledGridInfo = styled(Grid)`
  .MuiTypography-root {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.darkGray};
    strong {
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    }
    &.address {
      display: inline;
      &:after {
        content: ' ';
      }
    }
  }
  ${({ theme }) => theme.breakpoints.up('sm')} {
    .MuiTypography-root {
      font-size: 14px;
      display: initial;
    }
  }
  .info-date {
    ${({ theme }) => theme.breakpoints.up('sm')} {
      padding-right: 10px;
    }
  }
`;

export const StyledActionGrid = styled(Grid)`
  padding-top: 4px;
  padding-left: 4px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding-top: 28px;
  }
`;
