import { styled } from '@mui/material';

import { Link } from '#components/layouts/atoms/Link/Link';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledContainer = styled('div')`
  padding: 45px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 112px 0 0 0;
  }
`;

export const StyledHeaderContainer = styled('div')`
  width: 415px;
  height: 45px;
  text-align: center;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 247px;
    height: 61px;
  }
`;

export const StyledHeaderText = styled('span')`
  font-family: ${({ theme }) => theme.fonts.Raleway};
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 28px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 34px;
  }
`;

export const StyledSubtextContainer = styled('div')`
  width: 247px;
  height: 44px;
  text-align: center;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 412px;
    height: 44px;
  }
`;

export const StyledSubText = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.body1}
  line-height: 1.57;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const StyledApplicantsContainer = styled('div')`
  margin-top: 40px;
  width: 85%;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 100%;
  }
`;

export const StyledApplicantContainer = styled('div')`
  margin-bottom: 15px;
`;

export const StyledLink = styled(Link)`
  border-top: solid 1px ${({ theme }) => theme.colors.lightGray};
  border-bottom: solid 1px ${({ theme }) => theme.colors.lightGray};
  width: 245px;
  height: 50px;
  margin-top: 40px;
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

// IncomeTips Styled Components

export const StyledLeaseTips = styled('div')`
  .MuiTypography-root {
    padding-bottom: 5px;
  }
`;

export const StyledTipsTitle = styled(Typography)`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.38;
`;

export const StyledTipsText = styled(Typography)`
  padding-bottom: 10px;
  margin: 0 0 12px 0;
  line-height: 1.43;
`;

export const StyledTipsBullet = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.body1}
  line-height: 1;
`;
