import { useMediaQuery } from '@mui/material';
import Vimeo from '@u-wave/react-vimeo';
import type { SyntheticEvent } from 'react';
import React, { useState } from 'react';

import { Checkbox } from '#components/forms/atoms/Checkbox/Checkbox';
import { theme } from '#styles/styles';
import { useUpdateWidth } from '#utils/useUpdateWidth';

import {
  StyledAcceptanceButton,
  StyledButtonContainer,
  StyledCheckBoxContainer,
  StyledModal,
  StyledPlayerContainer,
  StyledVideoTitle,
} from './OrientationVideo.styles';
import type { OrientationVideoProps } from './OrientationVideo.types';

export const OrientationVideo: React.FC<OrientationVideoProps> = ({
  openModal = true,
  termAccepted = false,
  videoUrl,
  onTermAccepted,
}) => {
  const [isTermAccepted] = useState(termAccepted);
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(isTermAccepted);
  const [isCheckBoxDisabled, setIsCheckBoxDisabled] = useState(!isTermAccepted);
  const [isButtonDisabled, setIsButtonDisabled] = useState(isCheckBoxDisabled);
  const [showModal, setShowModal] = useState(openModal);
  const breakpoint = useMediaQuery(theme.breakpoints.up('sm'));

  const onVideoEnd = () => {
    setIsCheckBoxDisabled(false);
  };

  const onCheckBoxChange = (e: SyntheticEvent) => {
    const { checked } = e.target as HTMLInputElement;
    if (checked) {
      setIsCheckBoxChecked(true);
      setIsButtonDisabled(false);
    } else {
      setIsCheckBoxChecked(false);
      setIsButtonDisabled(true);
    }
  };

  const handleAccpetanceClick = () => {
    setShowModal(false);
    if (onTermAccepted) onTermAccepted(true);
  };

  useUpdateWidth();

  return (
    <>
      {showModal && (
        <StyledModal data-testid="orientation-video-modal">
          <StyledVideoTitle component="div">Orientation Video</StyledVideoTitle>
          {breakpoint ? (
            <StyledPlayerContainer>
              {videoUrl && <Vimeo video={videoUrl} showTitle={false} width="480px" height="262px" onEnd={onVideoEnd} />}
            </StyledPlayerContainer>
          ) : (
            <StyledPlayerContainer>
              {videoUrl && <Vimeo video={videoUrl} showTitle={false} width="383px" height="147px" onEnd={onVideoEnd} />}
            </StyledPlayerContainer>
          )}
          <StyledCheckBoxContainer component="div">
            <Checkbox
              name="term"
              checked={isCheckBoxChecked}
              disabled={isCheckBoxDisabled}
              onChange={onCheckBoxChange}
              label="By checking, you acknowledge that you have watched the Orientation video(s)."
            ></Checkbox>
          </StyledCheckBoxContainer>
          <StyledButtonContainer>
            <StyledAcceptanceButton
              disabled={isButtonDisabled}
              onClick={handleAccpetanceClick}
              data-testid="term-acceptance"
            >
              Acknowledge&nbsp;&#38;&nbsp;Close
            </StyledAcceptanceButton>
          </StyledButtonContainer>
        </StyledModal>
      )}
    </>
  );
};
