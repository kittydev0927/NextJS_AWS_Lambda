import userEvent from '@testing-library/user-event';

import type IApplicant from '#auth/IApplicant';
import { ApplicantSummaryBox } from '#components/forms/molecules/ApplicantSummaryBox/ApplicantSummaryBox';
import { theme } from '#styles/styles';
import { createMatchMedia } from '#tests/createMatchMedia';
import { render, screen, waitFor } from '#utils/testing-library';

const pendingApplicant: IApplicant = {
  applicationId: 'applicationId',
  applicantId: 'applicantID 4',
  firstName: 'Daisy',
  lastName: 'Quake',
  emailAddress: 'sjones@gmail.com',
  state: 'pending',
  resendAttempts: 3,
  phoneNumber: '1234567890',
};

const completeApplicant: IApplicant = {
  applicationId: 'applicationId',
  applicantId: 'applicantID2',
  firstName: 'Melinda',
  lastName: 'May',
  emailAddress: 'sjones@gmail.com',
  state: 'complete',
};

const progressApplicant: IApplicant = {
  applicationId: 'applicationId',
  applicantId: 'applicantID3',
  firstName: 'Phil',
  lastName: 'Coulson',
  emailAddress: 'sjones@gmail.com',
  state: 'in progress',
};

const acceptedApplicant: IApplicant = {
  applicationId: 'applicationId',
  applicantId: 'applicantID',
  firstName: 'Grant',
  lastName: 'Ward',
  emailAddress: 'mparker@gmail.com',
  state: 'accepted',
};

describe('ApplicantSummaryBox', () => {
  it('renders ApplicantSummaryBox in pending state', () => {
    render(<ApplicantSummaryBox applicant={pendingApplicant} />);
    expect(screen.getByText('pending invitation')).toBeInTheDocument();
  });

  it('renders ApplicantSummaryBox in pending state with resend button', () => {
    render(<ApplicantSummaryBox applicant={pendingApplicant} />);
    expect(screen.getByTestId('resend')).toBeInTheDocument();
  });

  it('renders ApplicantSummaryBox in progress state', () => {
    render(<ApplicantSummaryBox applicant={progressApplicant} />);
    expect(screen.getByText('application in progress')).toBeInTheDocument();
  });

  it('renders ApplicantSummaryBox in accepted state', () => {
    render(<ApplicantSummaryBox applicant={acceptedApplicant} />);
    expect(screen.getByText('accepted invitation')).toBeInTheDocument();
  });

  it('renders ApplicantSummaryBox in complete state', () => {
    render(<ApplicantSummaryBox applicant={completeApplicant} />);
    expect(screen.getByText('application complete')).toBeInTheDocument();
  });

  it('displays resend attempt limit message when resend attempts has reached 3', () => {
    render(<ApplicantSummaryBox applicant={pendingApplicant} />);
    const resendButton = screen.getByTestId('resend');
    userEvent.click(resendButton);
    expect(screen.getByText(/Resend attempts limited to 3 daily/i)).toBeVisible();
  });

  it('displays remove applicant modal when trash can is clicked', () => {
    render(<ApplicantSummaryBox applicant={pendingApplicant} />);
    const trashButton = screen.getByAltText('Remove applicant');
    userEvent.click(trashButton);
    expect(screen.getByText(/By clicking below/i)).toBeVisible();
  });

  it('displays phone number, if available', () => {
    render(<ApplicantSummaryBox applicant={pendingApplicant} />);
    expect(screen.getByText('1234567890')).toBeVisible();
  });

  it('shows the "Resend" text for larger screens', () => {
    window.matchMedia = createMatchMedia(theme.breakpoints.values.md);
    render(<ApplicantSummaryBox applicant={pendingApplicant} />);
    expect(screen.getByTestId('resend-text')).toBeVisible();
  });

  it('closes the remove applicant when the close modal button is clicked', async () => {
    render(<ApplicantSummaryBox applicant={pendingApplicant} />);
    const trashButton = screen.getByAltText('Remove applicant');
    userEvent.click(trashButton);
    userEvent.click(screen.getByTestId('close-modal-button'));
    await waitFor(() => {
      expect(screen.getByText(/By clicking below/i)).not.toBeVisible();
    });
  });
});
