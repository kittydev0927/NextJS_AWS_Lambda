import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react';

import { InvitationSent } from '#components/forms/molecules/InvitationSent/InvitationSent';
import type { InviteApplicantsModalProps } from '#components/navigation/organisms/InviteApplicantsModal/InviteApplicantsModal.types';
import { theme } from '#styles/styles';
import { EMAIL_REGEX } from '#utils/masks';

import {
  BottomContainer,
  StyledButton,
  StyledControlledTextField,
  StyledDarkSubHeader,
  StyledHeader,
  StyledInvitation,
  StyledInviteContainer,
  StyledLightSubHeader,
  StyledModal,
  StyledText,
  TopContainer,
} from './InviteApplicantsModal.styles';

export const baseInputValues = {
  firstName: '',
  email: '',
  lastName: '',
};

export const InviteApplicantsModal: React.FC<InviteApplicantsModalProps> = ({
  displayModalOnly,
  pageContent,
  subContent = null,
  ...props
}) => {
  const breakpoint = useMediaQuery(theme.breakpoints.up('sm'));

  const [applicants, setApplicants] = useState<typeof baseInputValues[]>([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const validForm = firstName.length > 0 && lastName.length > 0 && EMAIL_REGEX.test(email);
  const modalHeader = pageContent.cfHeading.json[0].content[0].value;
  const modalSubHeader = pageContent.cfContent.json[0].content[0].value;
  const modalContent = subContent?.cfHeading?.json?.length && subContent.cfHeading?.json[0]?.content[0]?.value;
  const modalSubContent = subContent?.cfContent?.json?.length && subContent.cfContent?.json[0]?.content[0]?.value;

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!validForm) {
      return;
    }
    const inputValues = {
      firstName: firstName,
      email: email,
      lastName: lastName,
    };
    setApplicants([...applicants, inputValues]);
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <StyledModal displayModalOnly={displayModalOnly} {...props}>
      <TopContainer data-testid="invite-applicants-modal">
        <StyledHeader data-testid="modal-header">{modalHeader}</StyledHeader>
        {applicants.length > 0 ? (
          <StyledDarkSubHeader>{modalContent}</StyledDarkSubHeader>
        ) : (
          <StyledLightSubHeader>
            {modalSubHeader || 'Success. Your invitation has been sent to the following applicants:'}
          </StyledLightSubHeader>
        )}
        <StyledInviteContainer applicants={applicants}>
          {applicants.map(applicant => {
            const { firstName, email, lastName } = applicant;
            return (
              <StyledInvitation key={firstName}>
                <InvitationSent
                  coapplicant={{
                    firstName,
                    email,
                    lastName,
                    status: 'pending invitation',
                  }}
                />
              </StyledInvitation>
            );
          })}
        </StyledInviteContainer>
      </TopContainer>
      <BottomContainer breakpoint={breakpoint}>
        {applicants.length > 0 && <StyledText>{modalSubContent}</StyledText>}
        <StyledControlledTextField
          data-testid="first-name-input"
          fullWidth
          label="First Name"
          setValue={setFirstName}
          value={firstName}
          type="name"
        />
        <StyledControlledTextField
          data-testid="last-name-input"
          fullWidth
          label="Last Name"
          setValue={setLastName}
          value={lastName}
          type="name"
        />
        <StyledControlledTextField
          data-testid="email-input"
          fullWidth
          label="Email Address"
          value={email}
          setValue={setEmail}
          type="email"
        />
        <StyledButton enabled={validForm} onClick={e => handleSubmit(e)} data-testid="submit-button">
          Send Invitation
        </StyledButton>
      </BottomContainer>
    </StyledModal>
  );
};
