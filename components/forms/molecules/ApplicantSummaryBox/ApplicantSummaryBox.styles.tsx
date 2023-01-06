import { styled } from '@mui/material';

import { Button } from '#components/forms/atoms/Button/Button';
import { Typography } from '#components/layouts/atoms/Typography/Typography';
import { theme } from '#styles/styles';

export const StyledApplicantSummaryBox = styled('div')`
  background-color: ${theme.colors.isabelline};
  border-radius: ${theme.borderRadius.primary};
  padding: 15px 11px 11px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  max-width: 412px;
`;

export const StyledLeft = styled('div')`
  display: flex;
  align-items: center;
`;

export const StyledRight = styled('div')`
  display: flex;
  align-items: center;
`;

export const StyledName = styled(Typography)`
  font-size: 14px;
  color: ${theme.colors.black};
  line-height: 1.29;
`;

export const StyledContact = styled(Typography)`
  font-size: 12px;
  color: ${theme.colors.black};
  line-height: 1.5;
`;

export const StyledStatusDescription = styled(Typography)`
  font-size: 12px;
  color: ${theme.colors.darkGray};
  line-height: 1.5;
`;

export const StyledResend = styled(Button)`
  text-transform: none;
  color: ${theme.colors.jade};
  font-weight: ${theme.fontWeight.bold};
  min-width: 30px;
  padding-right: 14px;
  padding-bottom: 8px;
`;

export const StyledImage = styled('div')`
  margin-right: 13px;
`;

export const StyledRemove = styled('div')`
  margin-right: 9px;
`;

export const StyledButtonText = styled('span')`
  margin-right: 8px;
`;

export const StyledHeading = styled(Typography)`
  font-size: 24px;
  color: ${theme.colors.darkGray};
  margin-bottom: 26px;
`;

export const StyledButton = styled(Button)`
  background-color: ${theme.colors.teal};
  text-transform: none;
  height: 49px;
  font-size: 16px;
  width: 100%;
  border-radius: ${theme.borderRadius.primary};
  box-shadow: none;
  &:hover {
    background-color: ${theme.colors.teal};
  }
`;

export const StyledModalCon = styled('div')`
  margin-right: 10px;
`;

export const StyledResendLimit = styled(Typography)`
  color: ${theme.colors.thunderbird};
  max-width: 412px;
  text-align: right;
  padding-top: 6px;
`;
