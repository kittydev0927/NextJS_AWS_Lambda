import type { ILoginPageContentQuery } from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';

type paperTheme = 'plain' | 'gradient';

export interface PBMostInterestedProps extends ILoginPageContentQuery {
  innerTheme?: paperTheme;
  outerTheme?: paperTheme;
  step?: number;
  steps?: { label: string; href: string }[];
}
