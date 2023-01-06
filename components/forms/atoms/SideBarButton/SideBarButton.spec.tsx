import React from 'react';

import { render, screen } from '#utils/testing-library';

import { SideBarButton } from './SideBarButton';

describe('Side Bar Button', () => {
  it('renders the Side Bar Button', () => {
    render(<SideBarButton />);
    expect(screen.getByTestId('tips-button')).toBeInTheDocument();
  });
  it('renders the button in the open state', () => {
    render(<SideBarButton buttonState="open" />);
    expect(screen.getByTestId('tips-button')).toBeInTheDocument();
  });
  it('renders the button in the mobile state', () => {
    render(<SideBarButton buttonState="mobile" />);
    expect(screen.getByTestId('tips-button')).toBeInTheDocument();
    expect(screen.getByText('Tips')).toBeInTheDocument();
  });
});
