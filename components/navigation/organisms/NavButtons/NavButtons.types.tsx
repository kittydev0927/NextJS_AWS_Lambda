import type { PortalUser } from '#auth/PortalUser';

export interface NavButtonsProps {
  isNextButtonDisabled?: boolean;
  isPreviousButtonHidden?: boolean;
  nextPage?: () => Promise<void>;
  onSave?: (portalUser: PortalUser) => Promise<void>;
  prevPage?: () => Promise<void>;
  contextType: 'application' | 'profile';
  primaryApplicant?: boolean;
}
