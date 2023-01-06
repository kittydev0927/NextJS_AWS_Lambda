import type { Theme } from '@mui/material';

import type {
  ILoginPageContentQuery,
  RegistrationFormProps,
} from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';

export interface PageLayoutProps extends ILoginPageContentQuery {
  theme?: Theme;
  footerLinks?: { text: string; url: string }[];
  showBackToTop?: boolean;
  pageName?: string;
  setEmailAddress?: RegistrationFormProps['setEmailAddress'];
}
