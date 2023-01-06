import userEvent from '@testing-library/user-event';

import type { INotification } from '#components/forms/molecules/Notification/Notification.types';
import { NotificationDrawer } from '#components/forms/organisms/NotificationDrawer/NotificationDrawer';
import { render, screen } from '#utils/testing-library';

describe('NotificationDrawer', () => {
  it('renders NotificationDrawer', () => {
    const onClickCTAMockFn = jest.fn();
    const onClickUploadMockFn = jest.fn();
    const onClickRedirectMockFn = jest.fn();
    const sampleNotifications: INotification[] = [
      {
        unread: true,
        actionable: true,
        title: 'Documents Needed',
        details:
          'Hi Samantha! Please upload a copy of your emotional support animal certification to complete your profile.',
        actionButtonText: 'Upload Documents',
        deadline: 'Sep 22',
        onClick: onClickUploadMockFn,
        actionType: 'upload',
      },
      {
        unread: false,
        actionable: true,
        title: 'Complete Profile',
        details: 'Complete your profile to view a curated list of recommended homes.',
        actionButtonText: 'Redirect',
        deadline: 'Sep 22',
        onClick: onClickRedirectMockFn,
        actionType: 'redirect',
      },
      {
        unread: false,
        actionable: false,
        title: 'Saved Homes Update',
        details: 'You’re saved home is no longer availible: 1234 Gresham Park Ln, Lithonia GA 30283',
      },
    ];
    render(
      <NotificationDrawer
        newNotificationCount={5}
        notifications={sampleNotifications}
        onCloseClick={onClickCTAMockFn}
      />,
    );
    expect(screen.getByTestId(/notification-count/i)).toHaveTextContent('Notifications (5)');
    expect(screen.getByText(/Documents Needed/i)).toHaveClass('unread');
    expect(screen.getByText(/Redirect/i)).toHaveClass('redirect');
    expect(screen.getByText(/Saved Homes Update/i)).toHaveClass('read');
    userEvent.click(screen.getByTestId(/close-drawer/i));
    expect(onClickCTAMockFn).toHaveBeenCalled();
    userEvent.click(screen.getByText(/Upload Documents/i));
    expect(onClickCTAMockFn).toHaveBeenCalled();
    userEvent.click(screen.getByText(/Redirect/i));
    expect(onClickCTAMockFn).toHaveBeenCalled();
  });
});
