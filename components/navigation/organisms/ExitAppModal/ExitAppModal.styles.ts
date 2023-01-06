import { styled } from '@mui/material';
import type { ModalProps } from 'components/forms/molecules/Modal/Modal.types';

export const StyledButton = styled('div')`
  position: absolute;
  top: 5px;
  right: 5px;
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
    color: #3a383c;
    font-size: 14px;
  }
  .cancel-button {
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

export const ModalTitle = styled('div')`
  width: 100%;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  @media screen and (max-width: 600px) {
    font-size: 22px;
  }
`;

export const ModalDescription = styled('p')`
  margin-top: 24px;
  font-size: 18px;
  height: 121px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  @media screen and (max-width: 600px) {
    font-size: 16px;
    margin-top: 28px;
    height: 132px;
  }
`;

export const defBackdropStyles = {
  // default Backdrop styles
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

export const StyledContent = styled('div')<ModalProps>`
  ${({ paddingTop }) => (paddingTop ? `padding-top: ${paddingTop}` : 'padding-top: 65px')};
  ${({ paddingBottom }) => (paddingBottom ? `padding-bottom: ${paddingBottom}` : 'padding-bottom: 35px')};
  ${({ paddingLeft }) => (paddingLeft ? `padding-left: ${paddingLeft}` : 'padding-left: 60px')};
  ${({ paddingRight }) => (paddingRight ? `padding-right: ${paddingRight}` : 'padding-right: 60px')};

  @media screen and (max-width: 600px) {
    padding-top: 34.3px;
    padding-bottom: 35px;
    padding-left: 33px;
    padding-right: 33px;
  }
  .MuiSvgIcon-root {
    color: ${({ theme }) => theme.colors.teal};
  }
`;
