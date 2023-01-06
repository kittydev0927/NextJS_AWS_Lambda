import React from 'react';

import { render, screen } from '#utils/testing-library';

import { HomeNoLongerAvailableModal } from './HomeNoLongerAvailableModal';

describe('HomeNoLongerAvailableModal', () => {
  it('renders the modal', () => {
    render(<HomeNoLongerAvailableModal />);
    expect(screen.getByText(/Sorry, this home is no longer available/i)).toBeInTheDocument();
  });
  it('renders the modal close button', () => {
    render(<HomeNoLongerAvailableModal />);
    const closebutton = screen.getByTestId('close-modal-button');
    expect(closebutton).toBeInTheDocument();
  });
});
