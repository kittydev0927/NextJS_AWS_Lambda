import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

import { useProfile } from '#auth/UseProfile';
import { NotificationBell } from '#components/forms/atoms/NotificationBell/NotificationBell';
import { HeaderLogo } from '#components/layouts/atoms/HeaderLogo/HeaderLogo';
import { Link } from '#components/layouts/atoms/Link/Link';
import { Dropdown } from '#components/navigation/molecules/Dropdown/Dropdown';
import ExitAppModalComp from '#components/navigation/organisms/ExitAppModal/ExitAppModal';
import Phone from '#public/phone-icon.svg';
import { theme } from '#styles/styles';
import { authUserMenu } from '#utils/placeholderLinks';

import {
  StyledHeaderContainer,
  StyledHeaderGrid,
  StyledHeaderLogoCon,
  StyledLink,
  StyledNotification,
  StyledPhone,
  StyledProfile,
} from './HeaderApplication.styles';
import type { IHeaderApplication } from './HeaderApplication.types';

export const HeaderApplication: React.FC<IHeaderApplication> = ({
  variant,
  disabled,
  newNotification,
  notificationOnClick,
}) => {
  const [showModal, setShowModal] = useState(false);

  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
  const user = useProfile();
  const userName = smallBreakpoint && user ? user.firstName : '';

  return (
    <StyledHeaderContainer>
      <ExitAppModalComp openModal={showModal} onModalCloseCallback={() => setShowModal(!showModal)} />
      <StyledHeaderGrid>
        <StyledHeaderLogoCon onClick={() => setShowModal(!showModal)}>
          <HeaderLogo />
        </StyledHeaderLogoCon>
        <StyledPhone>
          <Link underline="always" href="tel:8337747377">
            <Image src={Phone as string} layout="fixed" width={23} height={23} alt="Phone" />
          </Link>
          {smallBreakpoint && (
            <StyledLink underline="always" href="tel:8337747377">
              833.774.7377
            </StyledLink>
          )}
        </StyledPhone>
        <StyledProfile>
          {authUserMenu.map(btn => (
            <div key={btn.id}>
              <Dropdown button={btn} variant={variant} disabled={disabled} showDownArrow={false} userName={userName} />
            </div>
          ))}
        </StyledProfile>
        <StyledNotification>
          <NotificationBell newNotification={newNotification} onClick={notificationOnClick} />
        </StyledNotification>
      </StyledHeaderGrid>
    </StyledHeaderContainer>
  );
};
