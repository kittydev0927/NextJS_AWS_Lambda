import userEvent from '@testing-library/user-event';
import React from 'react';

import { render, screen } from '#utils/testing-library';

import ExitAppModal from './ExitAppModal';

describe('ExitAppModal', () => {
  it('renders the modal', () => {
    render(<ExitAppModal openModal />);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
  it('closes the modal when the close button is clicked', () => {
    let open = true;
    const handleClickClose = () => {
      open = false;
      // eslint-disable-next-line no-console
      console.log('close callback');
    };
    render(<ExitAppModal openModal={open} onModalCloseCallback={handleClickClose} />);
    userEvent.click(screen.getByTestId('close-modal-button'));
    expect(screen.getByText('Exit Application?')).not.toBeVisible();
  });
});
