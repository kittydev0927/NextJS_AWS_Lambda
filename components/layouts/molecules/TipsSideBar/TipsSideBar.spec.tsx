import userEvent from '@testing-library/user-event';
import React from 'react';

import { render, screen } from '#utils/testing-library';

import { TipsSideBar } from './TipsSideBar';

describe('Tips Side Bar', () => {
  it('renders the Tips Side Bar', () => {
    render(<TipsSideBar open containerProp={null} />);
    expect(screen.getByTestId('tipssidebar')).toBeInTheDocument();
  });

  it('renders hidden when closed', () => {
    render(<TipsSideBar open={false} containerProp={null} />);
    expect(screen.getByTestId('innerdrawer')).toBeInTheDocument();
  });

  it('closes the Tips Side Bar on click', () => {
    render(<TipsSideBar open containerProp={null} />);
    expect(screen.getByTestId('innerdrawer')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('tips-button'));
    expect(screen.getByTestId('innerdrawer')).toBeInTheDocument();
  });
});
