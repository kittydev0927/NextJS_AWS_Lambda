import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import type { IApplicantSummaryBoxProps } from '#components/forms/molecules/ApplicantSummaryBox/ApplicantSummaryBox.types';
import RemoveApplicantModal from '#components/navigation/organisms/RemovaApplicantModal/RemoveApplicantModal';
import AcceptedIcon from '#public/icon-accepted.svg';
import CompleteIcon from '#public/icon-complete.svg';
import InProgressIcon from '#public/icon-in-progress.svg';
import PendingIcon from '#public/icon-pending.svg';
import ResendIcon from '#public/icon-resend.svg';
import TrashIcon from '#public/trash.svg';
import { theme } from '#styles/styles';

import {
  StyledApplicantSummaryBox,
  StyledButtonText,
  StyledContact,
  StyledImage,
  StyledLeft,
  StyledModalCon,
  StyledName,
  StyledResend,
  StyledResendLimit,
  StyledRight,
  StyledStatusDescription,
} from './ApplicantSummaryBox.styles';

const stateIcons = new Map([
  ['accepted', AcceptedIcon],
  ['pending', PendingIcon],
  ['complete', CompleteIcon],
  ['in progress', InProgressIcon],
]);

const stateName = new Map([
  ['accepted', 'accepted invitation'],
  ['pending', 'pending invitation'],
  ['complete', 'application complete'],
  ['in progress', 'application in progress'],
]);

export const ApplicantSummaryBox: React.FC<IApplicantSummaryBoxProps> = ({ applicant }) => {
  const { applicantId, firstName, lastName, emailAddress, phoneNumber, state, resendAttempts } = applicant;
  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));

  const [openRemoveModal, setOpenRemoveModal] = React.useState(false);
  const [showResendLimit, setShowResendLimit] = React.useState(false);

  const onClickResend = () => {
    // eslint-disable-next-line no-console
    console.log('Call end-point resend for applicant with id ', applicantId);
    // placeholder logic until we can integrate with backend for resend attempt info
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    if (resendAttempts && resendAttempts >= 3) {
      setShowResendLimit(true);
    }
  };

  const onClickRemove = () => {
    setOpenRemoveModal(true);
  };

  const modalCloseCallback = () => {
    setOpenRemoveModal(false);
  };

  return (
    <>
      <StyledApplicantSummaryBox>
        <StyledLeft>
          <StyledImage>
            <Image src={stateIcons.get(state) as string} width={30} height={30} alt="" />
          </StyledImage>
          <div>
            <StyledName>
              {firstName} {lastName}
            </StyledName>
            {emailAddress && <StyledContact>{emailAddress}</StyledContact>}
            {phoneNumber && <StyledContact>{phoneNumber}</StyledContact>}
            <StyledStatusDescription>{stateName.get(state)}</StyledStatusDescription>
          </div>
        </StyledLeft>
        <StyledRight>
          {state === 'pending' && (
            <StyledResend onClick={onClickResend} data-testid="resend">
              {smallBreakpoint && <StyledButtonText data-testid="resend-text">Resend</StyledButtonText>}
              <span>
                <Image src={ResendIcon as string} width={12} height={11} alt="Resend invitation" />
              </span>
            </StyledResend>
          )}
          <StyledModalCon>
            <Image src={TrashIcon as string} width={14} height={17} alt="Remove applicant" onClick={onClickRemove} />
            <RemoveApplicantModal
              openModal={openRemoveModal}
              applicantId={applicantId}
              applicationId={applicantId}
              onModalCloseCallback={modalCloseCallback}
            />
          </StyledModalCon>
        </StyledRight>
      </StyledApplicantSummaryBox>
      {showResendLimit && <StyledResendLimit>Resend attempts limited to 3 daily</StyledResendLimit>}
    </>
  );
};
