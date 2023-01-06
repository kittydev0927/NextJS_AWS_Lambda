import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material';
import type { ModalProps } from 'components/forms/molecules/Modal/Modal.types';

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
  top: 15px;
  right: 15px;
  cursor: pointer;
  .MuiSvgIcon-root {
    font-size: 29.67px;
    color: ${({ theme }) => theme.colors.black};
  }
  .MuiButton-root {
    min-width: unset;
    &:hover {
      background-color: none;
    }
  }
`;

export const StyledRemoveButton = styled('div')`
  cursor: pointer;
  .MuiButton-root {
    .MuiSvgIcon-root {
      font-size: 29.67px;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  .MuiSvgIcon-root {
    font-size: 29.67px;
    color: ${({ theme }) => theme.colors.black};
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
    margin-bottom: 48px;
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: 14px;
  }
  .submit-button {
    font-family: ${({ theme }) => theme.fonts.Roboto};
    border-radius: 15px;
    height: 49px;
    text-transform: none;
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 1.7;
    letter-spacing: 1px;
    box-shadow: none;
  }
`;

export const StyledModalTitle = styled(Typography)`
  width: 100%;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.Raleway};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 24px;
  }
`;

export const StyledModalDescription = styled(Typography)`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 18px;
  }
`;

export const StyledContent = styled('div')<ModalProps>`
  padding-top: 61px;
  padding-bottom: 53px;
  padding-left: 33px;
  padding-right: 33px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding-top: 79px;
    padding-bottom: 103px;
    padding-left: 60px;
    padding-right: 60px;
  }
`;

export const StyledTypography = styled(Typography)`
  display: flex;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.accessibleGreen};
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 5px;
`;

export const StyledLabel = styled('label')`
  div {
    .MuiSvgIcon-root {
      font-size: 29.67px;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const StyledInput = styled('input')`
  display: none;
`;

export const StyledContainer = styled('div')`
  display: flex;
  flex-direction: row;
  text-align: center;
`;

export const StyledFileContainer = styled('div')`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 266px;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: 344px;
    margin-top: 20px;
  }
`;
