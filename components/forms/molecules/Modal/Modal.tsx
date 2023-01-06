import CloseIcon from '@mui/icons-material/Close';
import { Box, Dialog } from '@mui/material';
import React from 'react';

import { Button } from '../../atoms/Button/Button';
import { StyledButton, StyledContent, StyledDialog, StyledDialogWithScroll, StyledModal } from './Modal.styles';
import type { ModalProps } from './Modal.types';

export const Modal: React.FC<ModalProps> = ({
  children,
  displayCloseButton = true,
  buttonContent,
  disabled,
  displayModalOnly = true,
  backdropStyles,
  maxWidth,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  showScroll,
  onModalCloseCallback,
  ...props
}) => {
  const [open, setOpen] = React.useState(displayModalOnly ? true : false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (onModalCloseCallback) {
      onModalCloseCallback();
    }
  };

  const styles = showScroll
    ? {
        ...StyledDialogWithScroll,
        // one-off custom Backdrop styles passed as props
        ...backdropStyles,
      }
    : {
        ...StyledDialog,
        // one-off custom Backdrop styles passed as props
        ...backdropStyles,
      };
  return (
    <>
      {!displayModalOnly && (
        <div data-testid="open-modal-button">
          <Button variant="outlined" onClick={() => handleClickOpen()} disabled={disabled}>
            {buttonContent}
          </Button>
        </div>
      )}
      <StyledModal data-testid="modal" {...props} maxWidth={maxWidth}>
        <Dialog open={open} onClose={handleClose} {...props} sx={{ ...styles }}>
          <StyledContent
            paddingTop={paddingTop}
            paddingBottom={paddingBottom}
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
          >
            <Box>{children}</Box>
            {displayCloseButton && (
              <StyledButton>
                <Button data-testid="close-modal-button" onClick={handleClose}>
                  <CloseIcon />
                </Button>
              </StyledButton>
            )}
          </StyledContent>
        </Dialog>
      </StyledModal>
    </>
  );
};
