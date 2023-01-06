import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

import {
  StyledCloseButton,
  StyledContent,
  StyledCTAButton,
  StyledDate,
  StyledDetails,
  StyledNotification,
  StyledTitle,
  StyledTop,
} from './Notification.styles';
import type { INotification } from './Notification.types';

export const Notification: React.FC<INotification> = ({
  unread,
  title,
  actionable,
  deadline,
  details,
  actionType,
  onClick,
  actionButtonText,
}) => {
  return (
    <StyledNotification>
      <StyledTop>
        <StyledTitle className={unread ? 'unread' : 'read'}>{title}</StyledTitle>
        <StyledContent>
          {actionable ? (
            <StyledDate>{deadline}</StyledDate>
          ) : (
            <StyledCloseButton aria-label="Dismiss notification">
              <CloseIcon />
            </StyledCloseButton>
          )}
        </StyledContent>
      </StyledTop>
      <StyledDetails>{details}</StyledDetails>
      {actionable && (
        <StyledCTAButton className={actionType} size="small" variant="primary" onClick={onClick}>
          {actionButtonText}
        </StyledCTAButton>
      )}
    </StyledNotification>
  );
};
