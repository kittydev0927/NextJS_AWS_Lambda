jest.mock('next/router');

import userEvent from '@testing-library/user-event';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import React from 'react';

import { render, screen } from '#utils/testing-library';

import { CancelAppModal } from './CancelAppModal';

const mockUseRouter = jest.mocked(useRouter);
const mockPush = jest.fn<Promise<boolean>, Parameters<IRouter['push']>>();
const mockRouter = { push: mockPush } as unknown as NextRouter;

describe('CancelAppModal', () => {
  it('renders the modal', () => {
    render(<CancelAppModal />);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
  it('closes the modal when the close button is clicked', () => {
    const handleClickClose = () => {
      // eslint-disable-next-line no-console
      console.log('close callback');
    };
    render(<CancelAppModal onModalCloseCallback={handleClickClose} />);
    userEvent.click(screen.getByTestId('close-modal-button'));
    expect(screen.getByText('Finish Later')).not.toBeVisible();
  });
  it('disables the cancel button by default', () => {
    render(<CancelAppModal />);
    expect(screen.getByTestId('cancel-button')).toBeDisabled();
  });
  it('redirects to the dashboard when cancel is clicked', async () => {
    mockUseRouter.mockReturnValue(mockRouter);
    render(<CancelAppModal />);
    userEvent.click(screen.getByText(/select reason/i));
    userEvent.click(screen.getByText(/additional deposit required/i));
    userEvent.click(screen.getByTestId('cancel-button'));
    expect(mockPush).toHaveBeenCalled();
  });
});
