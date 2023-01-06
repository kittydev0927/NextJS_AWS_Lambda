import user from '@testing-library/user-event';
import React from 'react';

import { act, render, screen } from '#utils/testing-library';

import { MenuItems } from './MenuItems';

describe('MenuItems', () => {
  it('Finds rendered MenuItems component and counts buttons by role.', async () => {
    const expectedButtons = 4;

    render(<MenuItems toggleSearchField={jest.fn()}></MenuItems>);
    const items = await screen.findAllByRole('button');
    expect(items).toHaveLength(expectedButtons);
  });

  it('calls `toggleSearchField` for clicks', async () => {
    const mockToggleSearchField = jest.fn();

    const component = render(<MenuItems toggleSearchField={mockToggleSearchField} />);

    await act(async () => {
      const menuItem = await component.findByText('Find Your Home');
      user.click(menuItem);
    });

    expect(mockToggleSearchField).toHaveBeenCalled();
  });

  // TODO: We should not be using the id for this
  it('skips the toggle search field for the magic menu item', async () => {
    const mockToggleSearchField = jest.fn();

    const component = render(<MenuItems toggleSearchField={mockToggleSearchField} />);

    await act(async () => {
      const menuItem = await component.findByText('Contact Us');
      user.click(menuItem);
    });

    expect(mockToggleSearchField).not.toHaveBeenCalled();
  });
});
