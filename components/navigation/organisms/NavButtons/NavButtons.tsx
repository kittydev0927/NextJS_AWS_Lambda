import { LoadingButton } from '@mui/lab';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';

import { UserContext } from '#auth/UserContext';
import { Typography } from '#components/layouts/atoms/Typography/Typography';
import CancelAppModalComp from '#components/navigation/organisms/CancelAppModal/CancelAppModal';

import {
  StyledButtonComponent,
  StyledButtonContainer,
  StyledButtonsWrapper,
  StyledCancelComponent,
  StyledPreviousButton,
} from './NavButtons.styles';
import type { NavButtonsProps } from './NavButtons.types';

// I split the "onSave" functionality out from "nextPage" even though they
// are currently tightly related. My reasoning is that I anticipate a desire
// to save when using "prevPage" as well.
export const NavButtons: React.FC<NavButtonsProps> = ({
  contextType,
  isNextButtonDisabled,
  isPreviousButtonHidden,
  nextPage,
  onSave,
  prevPage,
  primaryApplicant,
}) => {
  const [showLoader, setShowLoader] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const portalUser = useContext(UserContext);
  const router = useRouter();

  const handleCancelClick = async () => {
    setOpenModal(true);
  };

  const closeModal = async () => {
    setOpenModal(false);
  };
  const handleNextClick = async () => {
    if (onSave && portalUser) {
      setShowLoader(true);

      try {
        await onSave(portalUser);
      } finally {
        setShowLoader(false);
      }
    }

    if (nextPage) {
      await nextPage();
    }
  };

  return (
    <StyledButtonsWrapper className="pb-buttons-wrapper">
      <StyledButtonContainer>
        <StyledButtonComponent>
          <StyledPreviousButton
            variant="secondary"
            fullWidth
            data-testid="previous button"
            className="button-previous"
            isHidden={isPreviousButtonHidden}
            onClick={() => void prevPage?.()}
          >
            Previous
          </StyledPreviousButton>
        </StyledButtonComponent>
        <StyledButtonComponent>
          <LoadingButton
            variant="primary"
            fullWidth
            color="secondary"
            data-testid="next button"
            className="button-next"
            disabled={isNextButtonDisabled}
            loading={showLoader}
            onClick={() => void handleNextClick()}
          >
            Next
          </LoadingButton>
        </StyledButtonComponent>
      </StyledButtonContainer>
      {contextType === 'application' && (
        <>
          {primaryApplicant && (
            <>
              <StyledCancelComponent>
                <Typography className="cancel" onClick={() => void handleCancelClick()} data-testid="cancel button">
                  Cancel
                </Typography>
              </StyledCancelComponent>

              <CancelAppModalComp openModal={openModal} onModalCloseCallback={() => void closeModal()} />
            </>
          )}
          {!primaryApplicant && (
            <StyledCancelComponent>
              <Button variant="noBackground" onClick={() => void router.push('/dashboard')}>
                Finish Later
              </Button>
            </StyledCancelComponent>
          )}
        </>
      )}
      {contextType === 'profile' && (
        <>
          <StyledCancelComponent>
            <Button variant="text" fullWidth onClick={() => void router.push('/dashboard')} data-testid="cancel button">
              Cancel
            </Button>
          </StyledCancelComponent>
        </>
      )}
    </StyledButtonsWrapper>
  );
};
