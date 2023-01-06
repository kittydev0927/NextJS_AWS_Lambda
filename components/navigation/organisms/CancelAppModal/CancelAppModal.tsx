import CloseIcon from '@mui/icons-material/Close';
import type { SelectChangeEvent } from '@mui/material';
import { Box, Dialog } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { Button } from '#components/forms/atoms/Button/Button';
import { Select } from '#components/forms/atoms/Select/Select';
import { StyledModal } from '#components/forms/molecules/Modal/Modal.styles';
import { Link } from '#components/layouts/atoms/Link/Link';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

import {
  defBackdropStyles,
  StyledButton,
  StyledContent,
  StyledDiv,
  StyledModalDescription,
  StyledModalTitle,
} from './CancelAppModal.styles';
import type CancelAppModalProps from './CancelAppModal.types';
import { options } from './constants';

export const CancelAppModal: React.FC<CancelAppModalProps> = ({
  openModal = true,
  onModalCloseCallback,
  backdropStyles = defBackdropStyles,
}) => {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(openModal);
  const handleClose = () => {
    setOpen(false);
    onModalCloseCallback?.();
  };
  const router = useRouter();
  const handleCancel = () => {
    void router.push('/dashboard');
  };

  const handleOnChange = (e: SelectChangeEvent<unknown>) => {
    const { value } = e.target as HTMLInputElement;
    setValue(value);
  };

  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  return (
    <StyledModal data-testid="modal">
      <Dialog open={open} onClose={handleClose} sx={backdropStyles}>
        <StyledContent>
          <Box>
            <StyledDiv>
              <StyledModalTitle>Cancel Application</StyledModalTitle>
              <StyledModalDescription>
                You can resume later or cancel now. If canceling now, please select the reason.
              </StyledModalDescription>
              <Select
                onChange={e => handleOnChange(e)}
                options={options}
                value={value}
                placeholder="Select Reason"
                id="select-reason"
                data-testid="select-reason"
                className="select"
              />
              <Button
                variant="secondary"
                fullWidth
                color="secondary"
                data-testid="cancel-button"
                id="cancel-button"
                className="cancel-button"
                onClick={handleCancel}
                disabled={value ? false : true}
              >
                Cancel Application
              </Button>
              <Typography className="finish-later">
                <Link href="/dashboard" underline="hover">
                  Finish Later
                </Link>
              </Typography>
            </StyledDiv>
          </Box>
          <StyledButton data-testid="close-modal-button" onClick={handleClose} className="close">
            <CloseIcon />
          </StyledButton>
        </StyledContent>
      </Dialog>
    </StyledModal>
  );
};

export default CancelAppModal;
