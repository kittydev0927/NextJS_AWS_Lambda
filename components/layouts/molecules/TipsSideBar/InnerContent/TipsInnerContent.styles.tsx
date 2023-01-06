import { styled } from '@mui/material';

import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledTips = styled('div')`
  .MuiTypography-root {
    padding-bottom: 5px;
  }
`;

export const StyledTitle = styled(Typography)`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const StyledText = styled(Typography)`
  font-size: 14px;
  padding-bottom: 10px;
  a {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.accessibleGreen};
  }
`;

export const StyledList = styled('ul')`
  padding-top: 8px;
  margin-top: 0;
`;
