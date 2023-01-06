import type { ModalProps } from '#components/forms/molecules/Modal/Modal.types';

export interface UserType {
  firstName: string;
  lastName: string;
}

export interface ProfileBuildProps extends ModalProps {
  user?: UserType;
  width?: string;
}
