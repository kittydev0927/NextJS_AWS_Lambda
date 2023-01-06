import userEvent from '@testing-library/user-event';

import { act, render, screen } from '#utils/testing-library';

import { TipsSideBarMobile } from './TipsSideBarMobile';

describe('Mobile Tips Side Bar', () => {
  const onSubmit = jest.fn();

  it('renders the Tips Side Bar in Mobile View', () => {
    render(<TipsSideBarMobile />);
    expect(screen.getByTestId('tips-sidebar-mobile')).toBeInTheDocument();
  });
  it('calls callback to close modal', async () => {
    const component = render(<TipsSideBarMobile setOpen={onSubmit} />);
    const modal = await component.findByTestId('tips-sidebar-mobile');
    await act(async () => {
      const closeButton = await component.findByTestId('close-modal-button');
      expect(closeButton).toBeInTheDocument();

      userEvent.click(closeButton);
    });
    expect(modal).toBeInTheDocument();
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
