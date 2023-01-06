import type { IProfile } from '#auth/IProfile';

export interface IHeaderApplication {
  newNotification?: boolean;
  notificationOnClick?: React.MouseEventHandler<HTMLDivElement>;
  variant?: 'outlined' | 'text' | 'primary' | 'secondary' | 'inactive';
  disabled?: boolean;
  user?: IProfile;
}
