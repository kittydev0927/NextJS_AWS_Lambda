import React from 'react';

import { render, screen } from '#utils/testing-library';

import { ButtonGroup } from './ButtonGroup';

describe('Dashboard', () => {
  it('renders the Dashboard Page', () => {
    render(<ButtonGroup isValid loading={false} />);
    expect(screen.getByText(/Save Changes/i)).toBeInTheDocument();
  });
});
