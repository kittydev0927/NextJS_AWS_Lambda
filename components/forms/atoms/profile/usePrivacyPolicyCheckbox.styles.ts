import { styled } from '@mui/material';

import { Link } from '#components/layouts/atoms/Link/Link';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledPrivacyLink = styled('div')`
  display: inline;
  div {
    display: inline;
    a {
      font-weight: 500;
    }
  }
`;

export const StyledLink = styled(Link)`
  span {
    color: ${({ theme }) => theme.colors.accessibleGreen};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }
`;

export const StyledText = styled(Typography)`
  font-size: 12px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 14px;
  }
  a {
    color: ${({ theme }) => theme.colors.accessibleGreen};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }
`;
