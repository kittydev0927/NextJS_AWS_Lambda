import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { defBackdropStyles } from '../CancelAppModal/CancelAppModal.styles';
import {
  StyledBox,
  StyledBrowseHomesButton,
  StyledButtonContainer,
  StyledCloseButton,
  StyledHeader,
  StyledModal,
  StyledTypography,
  StyledUnderstandButton,
} from './HomeNoLongerAvailableModal.styles';
import type HomeNoLongerAvailableModalProps from './HomeNoLongerAvailableModal.types';

export const HomeNoLongerAvailableModal: React.FC<HomeNoLongerAvailableModalProps> = ({
  openModal = true,
  onModalCloseCallback,
  backdropStyles = defBackdropStyles,
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(openModal);
  const handleClose = () => {
    onModalCloseCallback?.();
    setOpen(false);
    void router.push('/dashboard');
  };

  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  return (
    <StyledModal open={open} onClose={handleClose} sx={backdropStyles}>
      <StyledBox>
        <StyledHeader variant="h2">Sorry, this home is no longer available</StyledHeader>
        <StyledTypography variant="body1">
          It looks like someone else just leased this home. We’ll cancel your application but please click “Browse
          Homes” to find another option.
        </StyledTypography>
        <StyledButtonContainer>
          <StyledUnderstandButton onClick={handleClose}>I Understand</StyledUnderstandButton>
          <StyledBrowseHomesButton href="https://rentprogress.com/">Browse Homes</StyledBrowseHomesButton>
        </StyledButtonContainer>
        <StyledCloseButton data-testid="close-modal-button" onClick={handleClose} className="close">
          <CloseIcon />
        </StyledCloseButton>
      </StyledBox>
    </StyledModal>
  );
};
