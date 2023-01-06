import type { INotification } from '#components/forms/molecules/Notification/Notification.types';

export interface INotificationDrawer {
  newNotificationCount: number;
  notifications: INotification[];
  onCloseClick: () => void;
}
