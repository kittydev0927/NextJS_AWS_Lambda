import userEvent from '@testing-library/user-event';

import { OccupantFields } from '#components/forms/organisms/OccupantFields/OccupantFields';
import { act, render, screen } from '#utils/testing-library';

describe('Occupant Fields', () => {
  it('renders occupant fields', () => {
    render(<OccupantFields />);
    expect(screen.getByTestId('occupant-fields')).toBeInTheDocument();
  });
  it('updates all inputs on user input', async () => {
    // Arrange
    const component = render(<OccupantFields />);
    const firstNameInput = await component.findByTestId('occupant-first-name-input');
    const firstNameInputComponent = firstNameInput.querySelector('input');
    const middleNameInput = await component.findByTestId('occupant-middle-name-input');
    const middleNameinputComponent = middleNameInput.querySelector('input');
    const lastNameInput = await component.findByTestId('occupant-last-name-input');
    const lastNameInputComponent = lastNameInput.querySelector('input');

    // Act
    await act(async () => {
      if (!firstNameInputComponent) {
        throw new Error('Could not resolve input');
      }
      userEvent.type(firstNameInputComponent, 't');
    });
    await act(async () => {
      if (!middleNameinputComponent) {
        throw new Error('Could not resolve input');
      }
      userEvent.type(middleNameinputComponent, 't');
    });
    await act(async () => {
      if (!lastNameInputComponent) {
        throw new Error('Could not resolve input');
      }
      userEvent.type(lastNameInputComponent, 't');
    });

    // Assert
    expect(firstNameInputComponent).toHaveValue('t');
    expect(middleNameinputComponent).toHaveValue('t');
    expect(lastNameInputComponent).toHaveValue('t');
  });
});
