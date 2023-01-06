import { styled } from '@mui/material';

import { Button } from '#components/forms/atoms/Button/Button';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledNotification = styled('div')`
  padding-top: 10px;
  padding-bottom: 12px;
  .MuiTypography-root {
    font-size: 14px;
    line-height: 1.43;
  }
`;

export const StyledTop = styled('div')`
  display: flex;
  justify-content: space-between;
`;

export const StyledTitle = styled(Typography)`
  font-weight: normal;
  padding-bottom: 7px;
  width: 100%;
  padding-top: 3px;
  &.unread {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

export const StyledContent = styled('div')`
  min-width: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const StyledDate = styled(Typography)`
  text-transform: uppercase;
  &.MuiTypography-root {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

export const StyledCloseButton = styled(Button)`
  min-width: unset;
  padding: 0;
  height: 12px;
  width: 12px;
  color: ${({ theme }) => theme.colors.black};
  padding-top: 5px;
  .MuiSvgIcon-root {
    font-size: 1.3rem;
  }
`;

export const StyledDetails = styled(Typography)`
  padding-right: 60px;
`;

export const StyledCTAButton = styled(Button)`
  width: 199px;
  height: 35px;
  text-transform: capitalize;
  margin-top: 12px;
  box-shadow: none;
  &.upload {
    background-color: ${({ theme }) => theme.colors.teal};
    &:hover {
      background-color: ${({ theme }) => theme.colors.teal};
    }
  }
  &.redirect {
    background-color: ${({ theme }) => theme.colors.jade};
    &:hover {
      background-color: ${({ theme }) => theme.colors.jade};
    }
  }
`;
