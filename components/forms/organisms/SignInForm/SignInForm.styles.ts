import { styled } from '@mui/material';

import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledFormContainer = styled('div')`
  color: ${({ theme }) => theme.colors.darkGray};
  h6 {
    line-height: normal;
  }
  .MuiGrid-grid-xs-12 {
    padding-top: 24px;
  }
`;

export const StyledTypography = styled(Typography)`
  a {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.accessibleGreen};
  }
`;
