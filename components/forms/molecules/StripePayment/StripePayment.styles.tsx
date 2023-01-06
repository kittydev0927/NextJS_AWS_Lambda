import { styled } from '@mui/material';
import Image from 'next/image';

import { Button } from '#components/forms/atoms/Button/Button';
import { Typography } from '#components/layouts/atoms/Typography/Typography';
import { theme } from '#styles/styles';

export const StyledStripeContainer = styled('div')`
  padding: 0 33px 0 34px;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 0;
    width: 100%;
  }
`;

export const StyledButtonContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled(Button)`
  width: 243px;
  height: 50px;
  margin: 0 0 12px;
  font-weight: ${theme.fontWeight.bold};
  font-size: 14px;
  img {
    margin-right: 12px;
  }
`;

export const StyledPaymentIcon = styled(Image)`
  margin-right: 12px;

  span {
    margin-right: 12px;
  }

  img {
    margin-right: 12px;
  }
`;

export const StyledNavTypography = styled(Typography)`
  font-size: 16px;
  color: ${theme.colors.accessibleGreen};
  font-weight: ${theme.fontWeight.bold};
  margin-bottom: 30px;
`;

export const StyledTitle = styled(Typography)`
  font-family: ${theme.fonts.Raleway};
  font-weight: ${theme.fontWeight.bold};
  font-size: 22px;
`;

export const StyledAcknowledgementContainer = styled('div')`
  max-width: 245px;
  height: 357px;
  .MuiTypography-root {
    padding-bottom: 10px;
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: 420px;
    height: 225px;
  }
`;

export const StyledAcknowledgementText = styled(Typography)`
  font-size: 14px;
  padding-bottom: 10px;
  margin: 0 0 12px 0;
  line-height: 1.57;
`;
