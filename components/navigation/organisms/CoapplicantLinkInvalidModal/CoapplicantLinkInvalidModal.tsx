import CloseIcon from '@mui/icons-material/Close';
import { Box, Dialog } from '@mui/material';
import React, { useEffect } from 'react';

import { Button } from '#components/forms/atoms/Button/Button';

import {
  defBackdropStyles,
  StyledBrowseButton,
  StyledButton,
  StyledContent,
  StyledDiv,
  StyledModalDescription,
  StyledModalTitle,
} from './CoapplicantLinkInvalidModal.styles';
import type CoapplicantLinkInvalidModalProps from './CoapplicantLinkInvalidModal.types';

export const CoapplicantLinkInvalidModal: React.FC<CoapplicantLinkInvalidModalProps> = ({
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

  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  return (
    <Dialog open={open} onClose={handleClose} sx={backdropStyles} data-testid="modal">
      <StyledContent>
        <Box>
          <StyledDiv>
            <StyledModalTitle variant="h2">Application is no longer available</StyledModalTitle>
            <StyledModalDescription variant="body1">
              We are sorry, but this application has been canceled and is no longer available. Please check with the
              Primary Applicant.
            </StyledModalDescription>
            <Button
              variant="primary"
              fullWidth
              color="secondary"
              data-testid="cancel button"
              className="cancel-button"
              onClick={handleClose}
            >
              I Understand
            </Button>
            <StyledBrowseButton variant="noBackground" fullWidth href="https://www.rentprogress.com">
              Browse Homes
            </StyledBrowseButton>
          </StyledDiv>
        </Box>
        <StyledButton>
          <Button data-testid="close-modal-button" onClick={handleClose}>
            <CloseIcon />
          </Button>
        </StyledButton>
      </StyledContent>
    </Dialog>
  );
};

export default CoapplicantLinkInvalidModal;
