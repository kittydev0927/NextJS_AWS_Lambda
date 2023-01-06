import { styled } from '@mui/material';

import { Button } from '#components/forms/atoms/Button/Button';
import { Modal } from '#components/forms/molecules/Modal/Modal';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const StyledModal = styled(Modal)`
  div.MuiPaper-root[role='dialog'] {
    width: 312px;
    height: 528px;
    margin: 0 0 0 0;
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    ${({ theme }) => theme.breakpoints.up('sm')} {
      width: 600px;
      height: 683px;
    }
  }

  div.MuiPaper-root[role='dialog'] > div > div:nth-child(2) button {
    color: ${({ theme }) => theme.colors.black};
  }

  div.MuiPaper-root[role='dialog'] > div:nth-child(1) {
    padding: 62px 25px 0 25px;
    ${({ theme }) => theme.breakpoints.up('sm')} {
      padding: 82px 60px 0 60px;
    }
  }
`;

export const StyledVideoTitle = styled(Typography)`
  height: 26px;
  font-family: ${({ theme }) => theme.fonts.Raleway};
  font-size: 20px;
  padding-bottom: 32px;
  line-height: normal;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    height: 36px;
    padding-bottom: 17px;
  }
`;

export const StyledPlayerContainer = styled('div')`
  height: 270px;
  width: 480px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 147px;
    width: 262px;
    iframe {
      width: 262px;
    }
  }
`;

export const StyledCheckBoxContainer = styled(Typography)`
  padding: 23px 0;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 18px 0 0 0;
  }
  p.MuiTypography-body2 {
    font-size: 14px;
    line-height: 1.57;
  }
`;

export const StyledButtonContainer = styled('div')`
  position: relative;
  height: 88px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    height: 96px;
  }
`;
export const StyledAcceptanceButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 248px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accessibleGreen};
  &:disabled {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.alto};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.accessibleGreen};
  }
  ${({ theme }) => theme.breakpoints.up('sm')} {
    height: 50px;
    width: 332x;
  }
`;
