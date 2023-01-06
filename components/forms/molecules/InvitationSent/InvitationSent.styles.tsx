import { css, styled } from '@mui/material';

import { Typography } from '#components/layouts/atoms/Typography/Typography';
import { theme } from '#styles/styles';

const textStyles = css`
  color: ${theme.colors.black};
  line-height: 1.1;
`;
export const StyledSentIcon = styled('div')`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${theme.colors.lime};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInvitationSent = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.isabelline};
  border-radius: ${theme.borderRadius.primary};
  padding: 9px 17px 6px 20px;
`;

export const StyledName = styled(Typography)`
  ${textStyles}
  font-size: 14px;
  line-height: 1.29;
`;
export const StyledContact = styled(Typography)`
  ${textStyles}
  font-size: 12px;
`;
export const StyledStatus = styled(Typography)`
  ${textStyles}
  font-size: 12px;
  color: ${theme.colors.darkGray};
`;
