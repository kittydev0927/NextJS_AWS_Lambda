import userEvent from '@testing-library/user-event';
import React from 'react';

import { render, screen } from '#utils/testing-library';

import RemoveApplicantModal from './RemoveApplicantModal';

describe('RemoveApplicantModal', () => {
  it('renders the modal', () => {
    render(<RemoveApplicantModal applicationId="applicationId" applicantId="applicantId" openModal />);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  it('closes the modal when the close button is clicked', () => {
    let open = true;
    const handleClickClose = () => {
      open = false;
      // eslint-disable-next-line no-console
      console.log('close callback');
    };

    render(
      <RemoveApplicantModal
        applicationId="applicationId"
        applicantId="applicantId"
        openModal={open}
        onModalCloseCallback={handleClickClose}
      />,
    );

    userEvent.click(screen.getByTestId('close-modal-button'));
    expect(screen.getByText('Remove applicant')).not.toBeVisible();
  });
});
