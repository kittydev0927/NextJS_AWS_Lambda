import React from 'react';

import { fireEvent, render, screen } from '#utils/testing-library';

import { Modal } from './Modal';

describe('Modal', () => {
  it('renders the modal', () => {
    render(<Modal>Hello World</Modal>);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
  it('shows only the modal when props are passed to hide the button that opens the modal', () => {
    render(<Modal displayModalOnly>Hello World</Modal>);
    expect(screen.queryByTestId('open-modal-button')).toBeNull();
  });
  it('renders the modal and show scrollbar if content is large', () => {
    render(<Modal showScroll>Hello World</Modal>);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
  it('opens the modal when the open button is clicked', () => {
    render(<Modal displayModalOnly={false}>Hello World</Modal>);
    fireEvent(
      screen.getByRole('button'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(screen.getByText('Hello World')).toBeVisible();
  });
  it('closes the modal when the close button is clicked', () => {
    const handleClickClose = () => {
      // eslint-disable-next-line no-console
      console.log('close callback');
    };
    render(
      <Modal displayModalOnly onModalCloseCallback={handleClickClose}>
        Hello World
      </Modal>,
    );
    fireEvent(
      screen.getByTestId('close-modal-button'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(screen.getByText('Hello World')).not.toBeVisible();
  });
});
