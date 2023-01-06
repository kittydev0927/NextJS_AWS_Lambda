import userEvent from '@testing-library/user-event';
import React from 'react';

import { render, screen } from '#utils/testing-library';

import { CriteriaSelector } from './CriteriaSelectorOption';

describe('Criteria Selector Option', () => {
  it('renders the Criteria Selector Option', () => {
    render(<CriteriaSelector />);
    expect(screen.getByTestId('criteria-selector-option')).toBeInTheDocument();
  });
  it('selects on click', async () => {
    render(<CriteriaSelector />);
    expect(screen.getByTestId('criteria-selector-option')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('criteria-selector-option'));
    expect(screen.getByTestId('check-mark')).toBeInTheDocument();
  });
});
