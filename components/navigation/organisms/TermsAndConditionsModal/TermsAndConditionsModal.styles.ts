import { styled } from '@mui/material';

import { Button } from '#components/forms/atoms/Button/Button';
import { Modal } from '#components/forms/molecules/Modal/Modal';
import { Typography } from '#components/layouts/atoms/Typography/Typography';
import type { StyledButtonProps } from '#components/navigation/organisms/InviteApplicantsModal/InviteApplicantsModal.types';

export const StyledModalBodyDiv = styled('div')`
  width: 100%;
  height: 100%;
  border-bottom: ${({ theme }) => theme.colors.white};
`;

export const StyledModalTitle = styled(Typography)`
  width: 100%;
  margin: 0 184px 13px 0;
  color: ${({ theme }) => theme.colors.darkGray};
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 22px;
  }
`;

export const StyledModalContent = styled('div')`
  margin: 13px 0 0 6px;
  color: ${({ theme }) => theme.fonts.Roboto};
  height: 411px;
  overflow: auto;
  font-size: 12px;
  line-height: 1.33;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 14px;
    line-height: 1.43;
  }
`;

export const defBackdropStyles = {
  '.MuiBackdrop-root': {
    backdropFilter: 'blur(15px)',
    backgroundColor: 'rgba(17, 94, 103, 0.6)',
  },
  '.MuiDialog-paper': {
    borderRadius: '15px',
    maxWidth: '453px',
    boxShadow: '21px 19px 40px 0 rgba(0, 0, 0, 0.09)',
    overflowY: 'hidden',
  },
};

export const StyledButton = styled(Button)<StyledButtonProps>`
  background-color: ${({ enabled, theme }) => (enabled ? theme.colors.teal : theme.colors.lightGray)};
  width: 100%;
  height: 50px;
  text-align: center;
  margin-top: 21px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ enabled, theme }) => (enabled ? theme.colors.white : theme.colors.darkGray)};
  line-height: 1.38;
  letter-spacing: 0.36px;
  font-size: 16px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  text-transform: none;
  &:hover {
    background-color: ${({ enabled, theme }) => (enabled ? theme.colors.teal : theme.colors.lightGray)};
  }
`;

export const StyledText = styled(Typography)`
  font-size: 12px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 14px;
  }
`;

export const StyledModal = styled(Modal)`
  button {
    color: black;
    &:hover {
      background-color: transparent;
    }
  }
`;
