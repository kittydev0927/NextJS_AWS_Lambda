import { styled } from '@mui/material';
import type { ModalProps } from 'components/forms/molecules/Modal/Modal.types';

export const defBackdropStyles = {
  '.MuiBackdrop-root': {
    backdropFilter: 'blur(15px)',
    backgroundColor: 'rgba(17, 94, 103, 0.6)',
  },
  '.MuiDialog-paper': {
    borderRadius: '15px',
    maxWidth: '453px',
    boxShadow: '21px 19px 40px 0 rgba(0, 0, 0, 0.09)',
  },
};

export const StyledButton = styled('div')`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  .MuiButton-root {
    min-width: unset;
    &:hover {
      background-color: none;
    }
    .MuiSvgIcon-root {
      font-size: 29.67px;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const StyledDiv = styled('div')`
  width: 100%;
  height: 100%;
  max-width: 350px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  .select {
    width: 100%;
    height: 52px;
    margin: 0;
    margin-bottom: 100px;
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: 14px;
  }
  .remove-app-button {
    border-radius: 15px;
    height: 49px;
    text-transform: none;
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 1.7;
    letter-spacing: 1px;
    box-shadow: none;
  }

  .cancel {
    margin-top: 16px;
    height: 52px;
    font-size: 16px;
    text-transform: none;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: normal;
    text-align: center;
    color: ${({ theme }) => theme.colors.jade};
  }
`;

export const StyledModalTitle = styled('div')`
  width: 100%;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 22px;
  }
`;

export const StyledModalDescription = styled('p')`
  margin: 25px auto;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  margin-bottom: 100px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 16px;
  }
`;

export const StyledContent = styled('div')<ModalProps>`
  padding-top: 65px;
  padding-bottom: 35px;
  padding-left: 60px;
  padding-right: 60px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding-top: 34.3px;
    padding-bottom: 35px;
    padding-left: 33px;
    padding-right: 33px;
  }
  .MuiSvgIcon-root {
    color: ${({ theme }) => theme.colors.teal};
  }
`;
