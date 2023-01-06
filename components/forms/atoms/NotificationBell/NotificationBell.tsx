import Image from 'next/image';
import React from 'react';

import BellIcon from '#public/bell-icon.svg';
import Oval from '#public/oval.svg';

import {
  StyledNotificationBell,
  StyledNotificationBellContainer,
  StyledNotificationBellRedIcon,
} from './NotificationBell.styles';
import type { NotificationBellProps } from './NotificationBell.types';

export const NotificationBell: React.FC<NotificationBellProps> = ({ newNotification, onClick, ...props }) => (
  <StyledNotificationBellContainer data-testid="notification-bell" onClick={onClick} {...props}>
    {newNotification && (
      <StyledNotificationBellRedIcon data-testid="bell-red-icon">
        <Image src={Oval as string} width={6} height={6} alt="" />
      </StyledNotificationBellRedIcon>
    )}
    <StyledNotificationBell className="notification-bell-con">
      <Image src={BellIcon as string} id="notification-bell" width={23} height={25} alt="" />
    </StyledNotificationBell>
  </StyledNotificationBellContainer>
);
