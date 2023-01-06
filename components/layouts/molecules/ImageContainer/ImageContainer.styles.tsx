import { Grid, styled } from '@mui/material';

import { Link } from '#components/layouts/atoms/Link/Link';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledImageContainer = styled(Grid)`
  min-height: 354px;
`;

export const StyledImageCard = styled(Grid)`
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  position: relative;
  color: ${({ theme }) => theme.colors.nightRider};
  min-height: 394px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    min-height: 354px;
  }
  &.being-prepared {
    box-shadow: 3px 2px 19px 0 ${({ theme }) => theme.colors.boxShadow};
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: stretch;
    margin-bottom: 32px;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      margin-right: 26px;
      margin-bottom: 0;
    }
    .being-prepared-img {
      width: 100%;
      position: absolute;
      bottom: 0;
      display: inherit;
      border-radius: ${({ theme }) => theme.borderRadius.primary};
      overflow: hidden;
    }
    .secondary-bg {
      width: 100%;
      margin: 16px;
      background-color: ${({ theme }) => theme.colors.lightBlue};
      border-radius: ${({ theme }) => theme.borderRadius.primary};
      .text-con {
        padding: 32px 8%;
        ${({ theme }) => theme.breakpoints.up('sm')} {
          padding: 22px 8%;
        }
      }
    }
  }

  &.moving-tips {
    ${({ theme }) => theme.breakpoints.up('md')} {
      padding-right: 15px;
    }
    .secondary-bg {
      background-color: ${({ theme }) => theme.colors.selectiveYellow};
      display: flex;
      border-radius: ${({ theme }) => theme.borderRadius.primary};
      height: 100%;
      box-shadow: 3px 2px 19px 0 ${({ theme }) => theme.colors.boxShadow};
      ${({ theme }) => theme.breakpoints.up('sm')} {
        margin-right: 16px;
      }
    }
    .moving-tips-img {
      img {
        object-fit: none;
      }

      ${({ theme }) => theme.breakpoints.up('md')} {
        transform: translateX(22px);
        display: flex;
        align-items: flex-end;
        padding-bottom: 22px;
        img {
          object-fit: unset;
        }
      }
    }
    .text-con {
      padding: 24px 36px;
      display: flex;
      flex-direction: column;
      ${({ theme }) => theme.breakpoints.up('sm')} {
        padding: 34px 50px 0 56px;
      }
      ${({ theme }) => theme.breakpoints.up('md')} {
        padding: 34px 0 0 56px;
      }
      ${({ theme }) => theme.breakpoints.up('lg')} {
        padding: 82px 50px 0 56px;
      }
    }
  }
`;

export const StyledCardTitle = styled(Typography)`
  font-weight: 800;
  font-size: 30px;
`;

export const StyledCardDescText = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  &.moving-tips-desc-text {
    padding-top: 10px;
  }
`;

export const StyledLink = styled(Link)`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.nightRider};
  font-size: 18px;
`;
