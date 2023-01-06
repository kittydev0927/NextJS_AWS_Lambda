import userEvent from '@testing-library/user-event';
import React from 'react';

import { ApplicationAdditionalInfo } from '#components/forms/organisms/ApplicationForms/ApplicationAdditionalInfo/ApplicationAdditionalInfo';
import { act, render, screen } from '#utils/testing-library';

describe('Application Additional information', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  it('Render Application addition information form', async () => {
    render(<ApplicationAdditionalInfo />);
    expect(screen.getByText(/Are you working with a non-Progress Residential Agent or Realtor?/i)).toBeInTheDocument();
    expect(screen.getByText(/Do you have Vehicles?/i)).toBeInTheDocument();
  });

  it('renders text inputs', async () => {
    const mockNextDisabled = jest.fn();
    const component = render(<ApplicationAdditionalInfo setNextDisabled={mockNextDisabled} />);

    // Act
    await act(async () => {
      const yesButtons = component.getAllByTestId('checkbox-yes');
      yesButtons.forEach(button => userEvent.click(button));
    });

    // Assert
    expect(screen.getByTestId('agentName-input')).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(mockNextDisabled).toHaveBeenCalled();
  });
});
