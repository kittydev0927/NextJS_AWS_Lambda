import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import type { ILoginPageContentQuery } from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';

export interface LoginPageProps extends ILoginPageContentQuery {
  onSuccess?: () => unknown;
  onRegistrationSuccess?: () => unknown;
  onError?: () => unknown;
  onFacebookClick?: () => unknown;
  onGoogleClick?: () => unknown;
  onAppleClick?: () => unknown;
  isShowSocialMediaButtons?: boolean;
  userAuthContent: IUserAuthData;
}

export interface IStyles {
  buttoncolor?: string;
}
