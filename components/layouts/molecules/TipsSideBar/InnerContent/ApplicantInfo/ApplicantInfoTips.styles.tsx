import { styled } from '@mui/material';

import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledSubHeader = styled(Typography)`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fonts.Raleway};
  color: ${({ theme }) => theme.colors.darkGray};
  margin: 0px 0px 8px 0px;
`;

export const StyledText = styled(Typography)`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.Raleway};
  margin: 0px 0px 12px 0px;
  line-height: 1.43;
`;

export const StyledContainer = styled('div')``;

export const StyledHyperLink = styled('a')`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.accessibleGreen};
  font-family: ${({ theme }) => theme.fonts.Raleway};
  margin-left: 3px;
  margin-right 3px;
`;
