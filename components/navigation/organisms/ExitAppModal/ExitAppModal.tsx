import CloseIcon from '@mui/icons-material/Close';
import { Box, Dialog } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { Button } from '#components/forms/atoms/Button/Button';
import { StyledModal } from '#components/forms/molecules/Modal/Modal.styles';

import {
  defBackdropStyles,
  ModalDescription,
  ModalTitle,
  StyledButton,
  StyledContent,
  StyledDiv,
} from './ExitAppModal.styles';
import type ExitAppModalProps from './ExitAppModal.types';

export const ExitAppModal: React.FC<ExitAppModalProps> = ({
  openModal = true,
  onModalCloseCallback,
  backdropStyles = defBackdropStyles,
}) => {
  const [open, setOpen] = React.useState(openModal);
  const handleClose = () => {
    setOpen(false);
    if (onModalCloseCallback) {
      onModalCloseCallback();
    }
  };

  const router = useRouter();
  const handleCancel = () => {
    void router.push('/dashboard');
  };
  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  return (
    <>
      <StyledModal data-testid="modal">
        <Dialog open={open} onClose={handleClose} sx={backdropStyles}>
          <StyledContent>
            <Box>
              <StyledDiv>
                <ModalTitle>Exit Application?</ModalTitle>
                <ModalDescription>
                  Are you sure you want to exit your application? You can complete it later without losing progress.
                </ModalDescription>
                <Button
                  variant="primary"
                  fullWidth
                  color="secondary"
                  data-testid="cancel button"
                  className="cancel-button"
                  onClick={handleCancel}
                >
                  Exit Application
                </Button>
                <Button className="cancel" variant="text" fullWidth onClick={handleClose}>
                  Cancel
                </Button>
              </StyledDiv>
            </Box>
            <StyledButton>
              <Button data-testid="close-modal-button" onClick={() => handleClose()}>
                <CloseIcon />
              </Button>
            </StyledButton>
          </StyledContent>
        </Dialog>
      </StyledModal>
    </>
  );
};

export default ExitAppModal;
