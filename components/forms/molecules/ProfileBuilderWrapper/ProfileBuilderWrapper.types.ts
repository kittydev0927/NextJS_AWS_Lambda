import type React from 'react';

import type { ILoginPageContentQuery } from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';
import type { NavButtonsProps } from '#components/navigation/organisms/NavButtons/NavButtons.types';

type paperTheme = 'plain' | 'gradient';

interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}

export interface ProfileBuilderWrapperProps
  extends Omit<NavButtonsProps, 'contextType' | 'isPreviousButtonHidden'>,
    ILoginPageContentQuery {
  illustration?: string | StaticImageData;
  innerTheme?: paperTheme;
  isProfileCompleted?: boolean;
  isShowIllustration?: boolean;
  MainCard?: React.ReactNode;
  maxWidth?: number;
  outerTheme?: paperTheme;
  step?: number;
  steps?: { label: string; href: string }[];
}

export type StyledMainContainerProps = Pick<ProfileBuilderWrapperProps, 'isShowIllustration' | 'isProfileCompleted'>;
