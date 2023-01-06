import { styled } from '@mui/material';

import { Link } from '#components/layouts/atoms/Link/Link';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledHeader = styled(Typography)`
  margin: 0;
  padding: 45px 0 0 0;
  font-size: 22px;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGray};
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 34px;
    padding: 112px 0 0 0;
  }
`;

export const StyledText = styled(Typography)`
  padding: 22px 34px 15px 31px;
  font-size: 14px;
  line-height: 1.57;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGray};
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 16px;
    padding: 22px 34px 23px 31px;
  }
`;

export const StyledLinkContainer = styled('div')`
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

export const StyledLink = styled(Link)`
  border-top: solid 1px ${({ theme }) => theme.colors.lightGray};
  border-bottom: solid 1px ${({ theme }) => theme.colors.lightGray};
  width: 184px;
  height: 50px;
  margin-bottom: 27px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.57;
  color: ${({ theme }) => theme.colors.jade};
  padding-left: 16px;
  padding-right: 12px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 417px;
    margin-bottom: 68px;
    padding-left: 20px;
    padding-right: 12px;
  }
`;

export const StyledContainer = styled('div')`
  max-width: 462px;
  &.coapplicant {
    text-align: center;
    padding: 0 36px;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      padding: unset;
    }
  }
`;

export const StyledBold = styled(Typography)`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.accessibleGray};
  padding-top: 20px;
  padding-bottom: 2px;
  font-size: 14px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 16px;
  }
`;

export const StyledCoApplicantText = styled(Typography)`
  color: ${({ theme }) => theme.colors.accessibleGray};
  font-size: 14px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 16px;
  }
  padding-bottom: 25px;
  &:last-child {
    padding-bottom: 34px;
  }
`;

export const StyledApplicantsContainer = styled('div')`
  margin: 40px 0 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 100%;
  }
`;

export const StyledApplicantContainer = styled('div')`
  margin-bottom: 15px;
  min-width: 85%;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    min-width: 100%;
    div {
      max-width: 600px;
    }
  }
`;
