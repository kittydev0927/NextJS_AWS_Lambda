import CloseIcon from '@mui/icons-material/Close';
import { Box, Dialog } from '@mui/material';
import React, { useContext, useEffect } from 'react';

import { UserContext } from '#auth/UserContext';
import { Button } from '#components/forms/atoms/Button/Button';
import { StyledModal } from '#components/forms/molecules/Modal/Modal.styles';

import {
  defBackdropStyles,
  StyledButton,
  StyledContent,
  StyledDiv,
  StyledModalDescription,
  StyledModalTitle,
} from './RemoveApplicantModal.styles';
import type ExitAppModalProps from './RemoveApplicantModal.types';

const RemoveApplicantModal: React.FC<ExitAppModalProps> = ({
  applicationId,
  applicantId,
  openModal = true,
  onModalCloseCallback,
}) => {
  const [open, setOpen] = React.useState(openModal);
  const portalUser = useContext(UserContext);

  const handleClose = () => {
    setOpen(false);
    if (onModalCloseCallback) {
      onModalCloseCallback();
    }
  };

  const handleRemoveApplicant = async () => {
    await portalUser?.deleteApplicant(applicationId, applicantId);
    handleClose();
  };

  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  return (
    <StyledModal data-testid="modal">
      <Dialog open={open} onClose={handleClose} sx={defBackdropStyles}>
        <StyledContent>
          <Box>
            <StyledDiv>
              <StyledModalTitle data-testid="modalTitle">Remove applicant</StyledModalTitle>
              <StyledModalDescription data-testid="modalDescription">
                By clicking below this applicant will be removed from the application.
              </StyledModalDescription>
              <Button
                variant="primary"
                fullWidth
                color="secondary"
                data-testid="removeApplicantButton"
                className="remove-app-button"
                onClick={() => void handleRemoveApplicant()}
              >
                Remove Applicant
              </Button>
              <Button className="cancel" variant="text" data-testid="cancelBtn" fullWidth onClick={handleClose}>
                Cancel
              </Button>
            </StyledDiv>
          </Box>
          <StyledButton>
            <Button data-testid="close-modal-button" onClick={handleClose}>
              <CloseIcon />
            </Button>
          </StyledButton>
        </StyledContent>
      </Dialog>
    </StyledModal>
  );
};

export default RemoveApplicantModal;
