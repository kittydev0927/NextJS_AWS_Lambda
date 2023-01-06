import userEvent from '@testing-library/user-event';
import React from 'react';

import TermsAndConditionsModal from '#components/navigation/organisms/TermsAndConditionsModal/TermsAndConditionsModal';
import { termsAndConditions } from '#utils/sampleTermsAndConditionsData';
import { render, screen } from '#utils/testing-library';

jest.mock('next/router');

describe('TermsAndConditionsModal', () => {
  const mockSetAcknowledge = jest.fn();
  const mockSetOpen = jest.fn();
  it('renders the modal', () => {
    render(
      <TermsAndConditionsModal
        text={termsAndConditions}
        setAcknowledged={mockSetAcknowledge}
        setModalOpen={mockSetOpen}
      />,
    );
    expect(screen.getByText('Terms & Conditions')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('submit-button'));
    expect(mockSetAcknowledge).toHaveBeenCalled();
    expect(mockSetOpen).toHaveBeenCalled();
  });
  it('closes the modal when the close button is clicked', () => {
    render(
      <TermsAndConditionsModal
        text={termsAndConditions}
        setAcknowledged={mockSetAcknowledge}
        setModalOpen={mockSetOpen}
      />,
    );
    userEvent.click(screen.getByTestId('close-modal-button'));
    expect(screen.getByText('Acknowledge & Continue')).not.toBeVisible();
  });
});
