import { styled } from '@mui/material';
import type { ModalProps } from 'components/forms/molecules/Modal/Modal.types';

import { Button } from '#components/forms/atoms/Button/Button';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

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
      font-size: 30px;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const StyledBrowseButton = styled(Button)`
  margin-top: 16px;
`;

export const StyledDiv = styled('div')`
  width: 100%;
  height: 100%;
  max-width: 350px;
`;

export const StyledModalTitle = styled(Typography)`
  font-size: 22px;
  width: 100%;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 24px;
  }
`;

export const StyledModalDescription = styled(Typography)`
  font-size: 16px;
  margin-top: 28px;
  margin-bottom: 22px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 18px;
    margin-top: 14px;
    margin-bottom: 20px;
  }
`;

export const StyledContent = styled('div')<ModalProps>`
  padding: 60px 33px 35px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 78px 60px 82px;
  }
`;
