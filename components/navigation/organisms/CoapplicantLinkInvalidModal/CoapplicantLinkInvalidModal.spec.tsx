import userEvent from '@testing-library/user-event';
import React from 'react';

import { render, screen } from '#utils/testing-library';

import CoapplicantLinkInvalidModal from './CoapplicantLinkInvalidModal';

describe('CoapplicantLinkInvalidModal', () => {
  it('renders the modal', () => {
    render(<CoapplicantLinkInvalidModal openModal />);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
  it('closes the modal when the close button is clicked', () => {
    const mockClose = jest.fn();
    render(<CoapplicantLinkInvalidModal openModal onModalCloseCallback={mockClose} />);
    userEvent.click(screen.getByTestId('close-modal-button'));
    expect(mockClose).toHaveBeenCalled();
  });
  it('automatically render the modal open if no openModal prop is specified', () => {
    render(<CoapplicantLinkInvalidModal />);
    expect(screen.queryByText(/We are sorry/i)).toBeInTheDocument();
  });
  it('closes the modal, when no onModalCloseCallback is given', () => {
    render(<CoapplicantLinkInvalidModal />);
    userEvent.click(screen.getByTestId('close-modal-button'));
    expect(screen.queryByText(/We are sorry/i)).not.toBeVisible();
  });
});
