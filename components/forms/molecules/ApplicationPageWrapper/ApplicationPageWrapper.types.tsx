import type { NavButtonsProps } from '#components/navigation/organisms/NavButtons/NavButtons.types';
type paperTheme = 'plain' | 'gradient';

export interface ApplicationPageWrapperProps extends Omit<NavButtonsProps, 'contextType' | 'isPreviousButtonHidden'> {
  innerTheme?: paperTheme;
  MainCard?: React.ReactNode;
  maxWidth?: number;
  outerTheme?: paperTheme;
  step?: number;
  steps?: { label: string; href: string }[];
  prevPage?: () => Promise<void>;
  nextPage?: () => Promise<void>;
  tipsContent?: React.ReactNode;
  textUnderButtons?: React.ReactNode;
  description?: string;
  primaryApplicant?: boolean;
}
