import type { ILoginPageContentQuery } from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';

type PaperTheme = 'plain' | 'gradient';
export interface PBCriteriaPageProps extends ILoginPageContentQuery {
  innerTheme?: PaperTheme;
  outerTheme?: PaperTheme;
  step?: number;
  steps?: { label: string; href: string }[];
}
