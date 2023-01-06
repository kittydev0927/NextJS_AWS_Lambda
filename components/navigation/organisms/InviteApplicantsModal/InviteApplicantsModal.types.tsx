import type { IApplicationItem as IPageContentItem } from '#api/aem/applicationContentFragmentQuery/applicationContentFragmentQuery.types';
import type { ModalProps } from '#components/forms/molecules/Modal/Modal.types';

import type { baseInputValues } from './InviteApplicantsModal';

export interface StyledButtonProps {
  enabled: boolean;
}
export interface InviteContainerProps {
  applicants: typeof baseInputValues[];
}

export interface BottomContainerProps {
  breakpoint: boolean;
}

export interface InviteApplicantsModalProps extends ModalProps {
  pageContent: IPageContentItem;
  subContent?: IPageContentItem;
}
