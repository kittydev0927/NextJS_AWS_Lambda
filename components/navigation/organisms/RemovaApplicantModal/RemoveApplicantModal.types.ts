import type { ModalProps } from '#components/forms/molecules/Modal/Modal.types';

export default interface ExitAppModalProps extends ModalProps {
  openModal?: boolean;
  applicationId: string;
  applicantId: string;
}
