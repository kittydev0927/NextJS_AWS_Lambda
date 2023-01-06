import { styled } from '@mui/material';
import Image from 'next/image';

import { Button } from '#components/forms/atoms/Button/Button';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledInnerPaper = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SmallBackButton = styled('div')`
  background-color: ${({ theme }) => theme.colors.accessibleGreen};
`;

export const StyledButton = styled(Button)`
  margin-left: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
`;

export const StyledImage = styled(Image)`
  color: ${({ theme }) => theme.colors.white};
  margin-right: 14px;
`;
export const StyledTypography = styled(Typography)`
  margin-left: 10px;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
`;
