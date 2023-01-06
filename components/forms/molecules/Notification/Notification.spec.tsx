import userEvent from '@testing-library/user-event';

import { Notification } from '#components/forms/molecules/Notification/Notification';
import { render, screen } from '#utils/testing-library';

describe('Notification', () => {
  it('renders Notification', () => {
    render(
      <Notification unread actionable={false} title={'Test Notification'} details={'Text about the notification.'} />,
    );
    expect(screen.getByText(/Text about the notification./i)).toBeInTheDocument();
  });

  it('applies "unread" class to title when unread prop is set to true', () => {
    render(<Notification unread actionable={false} title={'Unread Notification'} details={''} />);
    expect(screen.getByText(/Unread Notification/i)).toHaveClass('unread');
  });

  it('applies "read" class to title when unread prop is set to false', () => {
    render(<Notification unread={false} actionable={false} title={'Read Notification'} details={''} />);
    expect(screen.getByText(/Read Notification/i)).toHaveClass('read');
  });

  it('applies "redirect" class to CTA button when actionType prop is set to "redirect"', () => {
    render(
      <Notification
        unread
        actionable
        title={'Redirect CTA'}
        details={'Redirect details'}
        actionButtonText="Complete Profile"
        actionType="redirect"
      />,
    );
    expect(screen.getByText(/Complete Profile/i)).toHaveClass('redirect');
  });

  it('calls onClick when button is clicked', () => {
    const onClickCTAMockFn = jest.fn();
    render(
      <Notification
        unread
        actionable
        title={'CTA'}
        details={'text details'}
        actionButtonText="Test Button"
        onClick={onClickCTAMockFn}
      />,
    );
    userEvent.click(screen.getByText(/test button/i));
    expect(onClickCTAMockFn).toHaveBeenCalled();
  });
});
