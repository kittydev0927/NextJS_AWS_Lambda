import userEvent from '@testing-library/user-event';
import React from 'react';

import type { PortalUser } from '#auth/PortalUser';
import { UserContext } from '#auth/UserContext';
import { act, render, screen } from '#utils/testing-library';

import { EditHomes } from './EditHomes';

const ButtonDefaultText = 'Edit Homes';

describe('EditHomes', () => {
  it('Finds rendered edit homes component.', async () => {
    // Act
    const component = render(<EditHomes></EditHomes>);

    // Assert
    expect(await component.findByTestId('edit-homes-container')).toBeInTheDocument();
  });

  it('Renders a button text', () => {
    // Act
    const component = render(<EditHomes buttonText={ButtonDefaultText}></EditHomes>);

    // Assert
    expect(component.getByText('Edit Homes')).toBeInTheDocument();
  });

  it('select Remove all Homes option from menu', async () => {
    // Arrange
    const mockFunc = jest.fn();
    const mockContext = { removeSavedHomes: mockFunc } as unknown as PortalUser;

    const component = render(
      <UserContext.Provider value={mockContext}>
        <EditHomes buttonText={ButtonDefaultText}></EditHomes>
      </UserContext.Provider>,
    );

    // Act
    await act(async () => {
      userEvent.click(component.getByTestId('edit-homes-button'));
      userEvent.click(await component.findByLabelText('Remove all Homes'));
      userEvent.click(await component.findByTestId('apply-button'));
    });

    // Assert
    expect(mockFunc).toHaveBeenCalledWith('all');
  });

  it('select Remove Unavailable Homes option from menu', async () => {
    // Arrange
    const mockFunc = jest.fn();
    const mockContext = { removeSavedHomes: mockFunc } as unknown as PortalUser;

    render(
      <UserContext.Provider value={mockContext}>
        <EditHomes buttonText={ButtonDefaultText}></EditHomes>
      </UserContext.Provider>,
    );

    // Act
    await act(async () => {
      userEvent.click(screen.getByTestId('edit-homes-button'));
      userEvent.click(await screen.findByLabelText('Remove Unavailable Homes'));
      userEvent.click(await screen.findByTestId('apply-button'));
    });

    // Assert
    expect(mockFunc).toHaveBeenCalledWith('unavailable');
  });
});
