import type { IProfile } from '#auth/IProfile';
import type {
  ILoginPageContentQuery,
  RegistrationFormProps,
} from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';

export interface HeaderProps extends ILoginPageContentQuery {
  disabled?: boolean;
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'outlined' | 'text' | 'primary' | 'secondary' | 'inactive';
  onSuccess?: () => unknown;
  onError?: () => unknown;
  pageName?: string;
  storybookNotAuthenticatedView?: boolean;
  setEmailAddress?: RegistrationFormProps['setEmailAddress'];
}

export interface Nav {
  id?: number;
  text?: string;
  options?: Option[];
  subOptions?: Option[];
}

interface Option {
  text?: string;
  url?: string;
}

export interface IIconContainer extends Partial<HeaderProps> {
  user?: IProfile;
  handleClickOpen: () => unknown;
  smallBreakpoint?: boolean;
  userName?: string | null;
  recoveryToken?: string | string[];
  loading?: boolean;
}
