import userEvent from '@testing-library/user-event';
import React from 'react';

import { YesNoQuestion } from '#components/forms/molecules/YesNoCheckbox/YesNoQuestion';
import { render, screen } from '#utils/testing-library';

describe('Yes/No Question', () => {
  it('Render Yes/No Question component', async () => {
    render(<YesNoQuestion questionText="Do you have a question?" defaultAnswer={null} />);
    expect(screen.getByText(/Do you have a question?/i)).toBeInTheDocument();
    expect(screen.getByTestId('checkbox-yes')).toBeInTheDocument();
    expect(screen.getByTestId('checkbox-no')).toBeInTheDocument();
  });

  it('Should be checked Yes answer', async () => {
    render(<YesNoQuestion questionText="Do you have a question?" defaultAnswer={null} />);
    expect(screen.getByText(/Do you have a question?/i)).toBeInTheDocument();
    expect(screen.getByTestId('checkbox-yes')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('checkbox-yes'));
  });
  it('Should be checked no answer', async () => {
    render(<YesNoQuestion questionText="Do you have a question?" defaultAnswer={null} />);
    expect(screen.getByText(/Do you have a question?/i)).toBeInTheDocument();
    expect(screen.getByTestId('checkbox-no')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('checkbox-no'));
  });
});
