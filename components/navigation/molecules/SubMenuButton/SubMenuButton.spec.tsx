import user from '@testing-library/user-event';
import React from 'react';

import { render, screen } from '#utils/testing-library';

import { SubMenuButton } from './SubMenuButton';

const navigationButton = {
  id: 1,
  text: 'Find Your Home',
  options: [
    {
      text: 'Saved Homes',
      url: 'https://www.rentprogress.com',
    },
    {
      text: 'Recommended',
      url: 'https://www.rentprogress.com',
    },
  ],
};

describe('SubMenuButton', () => {
  it('Finds rendered SubMenuButton component.', async () => {
    render(<SubMenuButton></SubMenuButton>);
    expect(await screen.findByTestId('SubMenuButton-Container')).toBeInTheDocument();
  });

  it('Renders a SubMenuButton text', () => {
    render(<SubMenuButton button={navigationButton}></SubMenuButton>);
    expect(screen.getByText('Find Your Home')).toBeInTheDocument();
  });

  it('shows the profile icon button when user is provided', () => {
    render(<SubMenuButton userName="firstName" />);
    expect(screen.getByTestId('IconButton-Container')).toBeInTheDocument();
  });

  it('displays the down arrow when showDownArrow is set to "true"', () => {
    render(<SubMenuButton showDownArrow />);
    expect(screen.queryByTestId('styled-down-arrow')).toBeInTheDocument();
  });

  // TODO: We should not be using the id for this
  it('treats id 4 as special', () => {
    const special = { ...navigationButton };
    special.id = 4;
    render(<SubMenuButton button={special} showDownArrow />);
    expect(screen.queryByTestId('styled-down-arrow')).not.toBeInTheDocument();
  });

  it('handles click events for buttons', async () => {
    const mockClick = jest.fn();
    const button = { ...navigationButton };
    button.text = 'xyzzy';
    const component = render(<SubMenuButton button={button} onClick={mockClick} />);

    user.click(await component.findByText(button.text));

    expect(mockClick).toHaveBeenCalledWith(button);
  });
});
