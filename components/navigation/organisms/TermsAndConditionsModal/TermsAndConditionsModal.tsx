import React from 'react';

import {
  defBackdropStyles,
  StyledButton,
  StyledModal,
  StyledModalBodyDiv,
  StyledModalContent,
  StyledModalTitle,
  StyledText,
} from './TermsAndConditionsModal.styles';
import type { TermsAndConditionsModalProps } from './TermsAndConditionsModal.types';

const TermsAndConditionsModal: React.FC<TermsAndConditionsModalProps> = ({ text, setAcknowledged, setModalOpen }) => (
  <StyledModal
    backdropStyles={defBackdropStyles}
    paddingTop="31px"
    paddingBottom="81px"
    paddingLeft="26px"
    paddingRight="18px"
    showScroll={false}
    data-testid="modal-terms-and-conditions"
    onModalCloseCallback={() => setModalOpen(false)}
  >
    <StyledModalBodyDiv>
      <StyledModalTitle data-testid="modalTitle" variant="h4">
        Terms & Conditions
      </StyledModalTitle>
      <StyledModalContent data-testid="modalTitle">
        <StyledText className="content" dangerouslySetInnerHTML={{ __html: text?.html }} />
      </StyledModalContent>
      <StyledButton
        enabled={false}
        data-testid="submit-button"
        onClick={() => {
          setAcknowledged(true);
          setModalOpen(false);
        }}
      >
        Acknowledge & Continue
      </StyledButton>
    </StyledModalBodyDiv>
  </StyledModal>
);

export default TermsAndConditionsModal;
