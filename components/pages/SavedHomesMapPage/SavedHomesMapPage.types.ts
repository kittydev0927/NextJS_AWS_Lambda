import type { ILoginPageContentQuery } from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';

export interface SavedHomesMapPageProps extends ILoginPageContentQuery {
  callbackPath?: string;
  onSuccess?: () => unknown;
  onError?: () => unknown;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  onFacebookClick?: () => unknown;
  onGoogleClick?: () => unknown;
  onAppleClick?: () => unknown;
  isShowSocialMediaButtons?: boolean;
  mapboxAccessToken?: string;
}
