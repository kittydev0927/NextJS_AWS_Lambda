import { styled } from '@mui/material';

import { Button } from '#components/forms/atoms/Button/Button';
import { ControlledTextField } from '#components/forms/atoms/profile/ControlledTextField';
import { Modal } from '#components/forms/molecules/Modal/Modal';
import { muiCustomShadow } from '#styles/styles';

import type { BottomContainerProps, InviteContainerProps, StyledButtonProps } from './InviteApplicantsModal.types';

export const StyledModal = styled(Modal)`
  .MuiPaper-root {
    width: 312px;
    box-shadow: ${({ theme }) => theme.shadows[muiCustomShadow]};
    ${({ theme }) => theme.breakpoints.up('sm')} {
      width: 453px;
    }
    svg {
      width: 30px;
      height: 30px;
      color: ${({ theme }) => theme.colors.black};
    }
  }
  .MuiPaper-root > div {
    padding: 40px 32px 45px 23px;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      padding: 67px 30px 57px 30px;
    }
  }
`;

export const TopContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const StyledHeader = styled('h3')`
  font-size: 22px;
  padding: 0 0 15px 0;
  margin: 0;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.darkGray};
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 24px;
  }
`;

export const StyledDarkSubHeader = styled('p')`
  width: 242px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 348px;
  }
  padding: 0 0 15px 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 16px;
`;

export const StyledLightSubHeader = styled('p')`
  padding: 0 0 5px 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.accessibleGray};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 1.38;
  font-size: 14px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 16px;
  }
`;

export const StyledInvitation = styled('div')`
  margin-bottom: 10px;
`;

export const StyledInviteContainer = styled('div')<InviteContainerProps>`
  border-bottom: ${({ theme, applicants }) => applicants.length > 0 && `1px solid ${theme.colors.lightGray}`};
  padding: ${({ applicants }) => (applicants.length > 0 ? '10px 0 30px 0' : '10px 0 0 0')};
`;

export const BottomContainer = styled('div')<BottomContainerProps>`
  padding-top: ${({ breakpoint }) => (!breakpoint ? '54px' : '31px')};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledText = styled('p')`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.accessibleGray};
  margin: 0 0 26px 0;
`;

export const StyledControlledTextField = styled(ControlledTextField)`
  margin-bottom: 14px;
  height: 50px;
  .MuiInputBase-input {
    &:focus {
      ::placeholder {
        visibility: hidden;
      }
    }
  }
`;

export const StyledButton = styled(Button)<StyledButtonProps>`
  background-color: ${({ enabled, theme }) => (enabled ? theme.colors.teal : theme.colors.lightGray)};
  margin-top: 34px;
  width: 193px;
  height: 50px;
  text-align: center;
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
