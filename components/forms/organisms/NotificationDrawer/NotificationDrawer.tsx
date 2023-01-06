import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import React from 'react';

import { Notification } from '#components/forms/molecules/Notification/Notification';
import { Divider } from '#components/layouts/atoms/Divider/Divider';
import DrawerBell from '#public/drawer-bell.svg';

import {
  Drawer,
  DrawerHeader,
  DrawerHeaderIcon,
  DrawerHeaderText,
  NotificationContainer,
  NotificationWrapper,
  StyledCloseButton,
} from './NotificationDrawer.styles';
import type { INotificationDrawer } from './NotificationDrawer.types';

export const NotificationDrawer: React.FC<INotificationDrawer> = ({
  newNotificationCount,
  notifications,
  onCloseClick,
}) => (
  <Drawer>
    <DrawerHeader>
      <DrawerHeaderIcon>
        <Image src={DrawerBell as string} alt="notification-bell" width={24} height={26.7} layout="fixed" />
      </DrawerHeaderIcon>
      <DrawerHeaderText data-testId="notification-count">Notifications ({newNotificationCount})</DrawerHeaderText>
      <StyledCloseButton aria-label="Dismiss notification" onClick={onCloseClick} data-testid="close-drawer">
        <CloseIcon />
      </StyledCloseButton>
    </DrawerHeader>
    <NotificationContainer>
      {notifications.map(n => (
        <>
          <Divider />
          <NotificationWrapper>
            <Notification
              unread={n.unread}
              actionable={n.actionable}
              title={n.title}
              details={n.details}
              actionButtonText={n.actionButtonText}
              actionType={n.actionType}
              deadline={n.deadline}
              onClick={n.onClick}
            />
          </NotificationWrapper>
        </>
      ))}
    </NotificationContainer>
  </Drawer>
);
