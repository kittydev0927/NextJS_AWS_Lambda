import { styled } from '@mui/material';

import type { ModalProps } from './Modal.types';

export const StyledModal = styled('div')<ModalProps>`
  .MuiDialog-paper.MuiDialog-paperScrollPaper {
    ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth}` : '')};
  }
`;

export const StyledContent = styled('div')<ModalProps>`
  ${({ paddingTop }) => (paddingTop ? `padding-top: ${paddingTop}` : 'padding-top: 80px')};
  ${({ paddingBottom }) => (paddingBottom ? `padding-bottom: ${paddingBottom}` : 'padding-bottom: 100px')};
  ${({ paddingLeft }) => (paddingLeft ? `padding-left: ${paddingLeft}` : 'padding-left: 140px')};
  ${({ paddingRight }) => (paddingRight ? `padding-right: ${paddingRight}` : 'padding-right: 140px')};

  @media screen and (max-width: 600px) {
    padding-top: 64px;
    padding-bottom: 50px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;
export const StyledButton = styled('div')`
  position: absolute;
  top: 5px;
  right: 5px;
  .MuiButton-root {
    min-width: unset;
    &:hover {
      background-color: none;
    }
  }
`;

export const StyledDialog = {
  // default Backdrop styles
  '.MuiBackdrop-root': {
    backdropFilter: 'blur(15px)',
    backgroundColor: 'rgba(17, 94, 103, 0.6)',
  },
};

export const StyledDialogWithScroll = {
  // default Backdrop styles
  '.MuiBackdrop-root': {
    backdropFilter: 'blur(15px)',
    backgroundColor: 'rgba(17, 94, 103, 0.6)',
  },

  // Added custom scrollbar css for MacOS system
  '.MuiDialog-paperScrollPaper::-webkit-scrollbar': {
    '-webkit-appearance': 'none',
    width: '7px',
  },

  '.MuiDialog-paperScrollPaper::-webkit-scrollbar-thumb': {
    'border-radius': '4px',
    'background-color': 'rgba(0, 0, 0, 0.5)',
    'box-shadow': '0 0 1px rgba(255, 255, 255, 0.5)',
  },
};
