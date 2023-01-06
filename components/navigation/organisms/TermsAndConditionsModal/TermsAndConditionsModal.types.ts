interface termsAndConditions {
  plaintext: string;
  html: string;
}

export interface TermsAndConditionsModalProps {
  text: termsAndConditions;
  setAcknowledged: React.Dispatch<React.SetStateAction<boolean>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
