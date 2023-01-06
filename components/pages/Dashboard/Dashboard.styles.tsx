import { styled } from '@mui/material';

import { LinksList } from '#components/layouts/molecules/LinksList/LinksList';
import { LinksListSmall } from '#components/layouts/molecules/LinksListSmall/LinksListSmall';

export const StyledDashboardContainer = styled('div')`
  .page-layout {
    overflow-x: hidden;
    height: 100vh;
  }
`;

export const StyledSolidBackground = styled('div')`
  background-color: ${({ theme }) => theme.colors.softPeach};
  padding-bottom: 90px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 48px 60px 180px;
  }
  .sort-filter-option {
    .select-option {
      ${({ theme }) => theme.breakpoints.up('md')} {
        max-width: 311px;
      }
    }
  }
`;

export const ProfileCardContainer = styled('div')`
  width: 100%;
  max-width: 1276px;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  color: ${({ theme }) => theme.colors.darkGray};
  margin: 20px 0px 0px 0px;
`;
export const ProfileCardBody = styled('div')`
  max-width: 1276px;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background-image: radial-gradient(circle at 8% 97%, #fcf4f4, #fff 17%);
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 40px 54px 20px 51px;
  }
`;

export const StyledProfileContainer = styled('div')`
  ${({ theme }) => theme.breakpoints.up('xs')} {
    padding: 30px;
  }
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 30px 0px;
  }
`;

export const StyledContentContainer = styled('div')`
  max-width: 1300px;
  margin: 0 auto;
`;

export const LoadingProfile = styled('div')`
  min-height: 196px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    min-height: 240px;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    min-height: 512px;
  }
`;

export const LinksContainer = styled('div')`
  padding-left: 31px;
  padding-right: 31px;
  margin-top: 95px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-top: 47px;
    padding-left: 77px;
    padding-right: 77px;
  }
`;

export const StyledLinksList = styled(LinksList)`
  p {
    font-size: 28px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    padding: 0 77px 30px 0;
    border-bottom: 6px solid ${({ theme }) => theme.colors.izamal};
    margin-bottom: 30px;
  }
  div {
    span {
      color: ${({ theme }) => theme.colors.darkGray};
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const StyledLinksListSmall = styled(LinksListSmall)`
  color: ${({ theme }) => theme.colors.darkGray};
  h6 {
    font-size: 28px;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    padding: 0 77px 30px 0;
    border-bottom: 6px solid ${({ theme }) => theme.colors.izamal};
    margin-bottom: 28px;
  }
  div {
    div {
      line-height: 2;
      &:hover {
        text-decoration: underline;
      }
      div {
        div {
          span {
            color: ${({ theme }) => theme.colors.darkGray};
            font-size: 14px;
          }
        }
      }
    }
  }
`;
