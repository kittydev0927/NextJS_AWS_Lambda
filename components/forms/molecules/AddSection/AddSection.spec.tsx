import userEvent from '@testing-library/user-event';

import { AddSection } from '#components/forms/molecules/AddSection/AddSection';
import type { OptionProps } from '#components/forms/molecules/AddSection/AddSection.types';
import { act, render, screen } from '#utils/testing-library';

const testOptions: OptionProps[] = [
  { label: 'Legal First Name', type: 'textbox' },
  { label: 'Middle Name', type: 'textbox' },
  { label: 'Last Name', type: 'textbox' },
  { label: 'Date of Birth', type: 'date' },
  { label: 'Invalid', type: 'invalid' },
];

describe('AddSection', () => {
  it('renders AddSection', () => {
    render(<AddSection options={testOptions} buttonText={'Add Additional Occupant'} fieldText={''} removeText={''} />);
    expect(screen.getByTestId('add-section')).toBeInTheDocument();
  });

  it('Add options section', () => {
    render(
      <AddSection
        options={testOptions}
        buttonText={'Add Additional Occupant'}
        fieldText={'Occupant'}
        removeText={''}
      />,
    );
    const addSectionButton = screen.getByTestId('add-section-button');
    userEvent.click(addSectionButton);
    expect(screen.getByText(/occupant 2/i)).toBeInTheDocument();
  });

  it('Removes an option section that has been added', () => {
    render(
      <AddSection
        options={testOptions}
        buttonText={'Add Additional Occupant'}
        fieldText={'Occupant'}
        removeText={'Remove Occupant'}
      />,
    );
    const addSectionButton = screen.getByTestId('add-section-button');
    userEvent.click(addSectionButton);
    userEvent.click(screen.getByText(/remove occupant/i));
    expect(screen.queryByText(/occupant 2/i)).toBeNull();
  });

  it('changes the date when selected a date in the date picker', async () => {
    const component = render(
      <AddSection options={testOptions} buttonText={'Add Additional Occupant'} fieldText={''} removeText={''} />,
    );
    await act(async () => {
      const datePicker = await component.findByTestId('date-picker');
      const input = datePicker.querySelector('input');

      if (!input) {
        throw new Error('Could not resolve input');
      }

      userEvent.clear(input);
      userEvent.type(input, '06/30/2022');
      userEvent.tab();
    });
    expect(screen.getByTestId('date-picker')).toBeInTheDocument();
  });
});
