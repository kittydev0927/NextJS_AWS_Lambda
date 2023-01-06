export interface INotification {
  unread: boolean;
  actionable: boolean;
  title: string;
  details: string;
  actionButtonText?: string;
  deadline?: string;
  onClick?: () => void;
  actionType?: 'upload' | 'redirect' | string;
}
