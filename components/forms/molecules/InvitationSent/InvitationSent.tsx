import Image from 'next/image';
import React from 'react';

import Check from '#public/icon-check.svg';

import { StyledContact, StyledInvitationSent, StyledName, StyledSentIcon, StyledStatus } from './InvitationSent.styles';
import type { IInvitation } from './InvitationSent.types';

export const InvitationSent: React.FC<IInvitation> = ({ coapplicant }) => {
  const { firstName, email, lastName, status } = coapplicant;
  return (
    <StyledInvitationSent>
      <div>
        <StyledName>{firstName}</StyledName>
        {lastName && <StyledContact>{lastName}</StyledContact>}
        {email && <StyledContact>{email}</StyledContact>}
        <StyledStatus>{status}</StyledStatus>
      </div>
      <StyledSentIcon>
        <Image src={Check as string} width={12} height={10} alt="" />
      </StyledSentIcon>
    </StyledInvitationSent>
  );
};
