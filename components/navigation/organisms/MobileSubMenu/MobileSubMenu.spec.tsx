import userEvent from '@testing-library/user-event';
import React from 'react';

import { render, screen } from '#utils/testing-library';

import MobileSubMenu from './MobileSubMenu';

describe('MobileSubMenu', () => {
  it('If placeholder property is set to "Test Placeholder" the search field should reflect this', () => {
    render(<MobileSubMenu placeholder={'Test Placeholder'} />);
    const placeholder = screen.getByPlaceholderText('Test Placeholder');
    expect(placeholder).toBeInTheDocument();
  });

  it('Renders MobileSubMenu and tests opening the menu', async () => {
    render(<MobileSubMenu />);
    const button = screen.getByRole('img');
    userEvent.click(button);
    expect(screen.getByAltText('close sub menu')).toBeInTheDocument();
  });
});
