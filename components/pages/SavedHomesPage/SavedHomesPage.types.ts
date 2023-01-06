import type { ILoginPageContentQuery } from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';
import type { SubMenuItemProps } from '#components/layouts/molecules/SubMenuItem/SubMenuItem.types';

export interface SavedHomesPageProps extends ILoginPageContentQuery {
  onSuccess?: () => unknown;
  onError?: () => unknown;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  onFacebookClick?: () => unknown;
  onGoogleClick?: () => unknown;
  onAppleClick?: () => unknown;
  isShowSocialMediaButtons?: boolean;
  subMenuItems?: SubMenuItemProps[];
}
