export interface ModalProps {
  displayCloseButton?: boolean; // Option to display a close button in the modal
  buttonContent?: React.ReactNode; // Option to change the text content in the button that opens the modal
  disabled?: boolean; // Disabled option for button that opens the modal
  displayModalOnly?: boolean; // Option to display the modal without activation from a button
  backdropStyles?: Record<string, unknown>;
  maxWidth?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  showScroll?: boolean; // Option to show custom scrollbar
  onModalCloseCallback?: () => void; //method will be called on modal close
}
