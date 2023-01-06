import userEvent from '@testing-library/user-event';

import { ApplicantFields } from '#components/forms/organisms/ApplicantFields/ApplicantFields';
import { exampleProfile } from '#utils/exampleProfile';
import { act, fireEvent, render, screen, waitFor } from '#utils/testing-library';

describe('Occupant Fields', () => {
  it('renders applicant fields', () => {
    render(<ApplicantFields profile={exampleProfile} />);
    expect(screen.getByTestId('applicant-fields')).toBeInTheDocument();
  });
  const mockSetNextDisabled = jest.fn();
  it('updates all input values except uploading military doc', async () => {
    // Arrange
    const filename = 'unittestfile.pdf';
    const file = new File(['testing'], filename, { type: 'application/pdf' });

    const component = render(<ApplicantFields profile={exampleProfile} setNextDisabled={mockSetNextDisabled} />);
    const firstNameInput = await component.findByTestId('applicant-first-name-input');
    const firstNameInputComponent = firstNameInput.querySelector('input');
    const middleNameInput = await component.findByTestId('applicant-middle-name-input');
    const middleNameinputComponent = middleNameInput.querySelector('input');
    const lastNameInput = await component.findByTestId('applicant-last-name-input');
    const lastNameInputComponent = lastNameInput.querySelector('input');
    const mobilePhoneInput = await component.findByTestId('applicant-mobile-phone-input');
    const mobilePhoneInputComponent = mobilePhoneInput.querySelector('input');
    const emailInput = await component.findByTestId('applicant-email-address-input');
    const emailInputComponent = emailInput.querySelector('input');
    const ssnInput = await component.findByTestId('applicant-ssn-input');
    const ssnInputComponent = ssnInput.querySelector('input');
    const datePickerInput = await component.findByTestId('date-picker');
    const datePickerInputComponent = datePickerInput.querySelector('input');
    const militaryCheckBox = await component.findByTestId('checkbox-military');
    const militaryCheckBoxComponent = militaryCheckBox.querySelector('input');
    const idFileInput = await component.findByTestId('file-explorer-link-Upload Government Issued ID For Verification');
    // const idFileInputComponent = idFileInput.querySelector('input');

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
    await act(async () => {
      if (!mobilePhoneInputComponent) {
        throw new Error('Could not resolve input');
      }
      userEvent.paste(mobilePhoneInputComponent, '2094');
    });
    await act(async () => {
      if (!emailInputComponent) {
        throw new Error('Could not resolve input');
      }
      userEvent.type(emailInputComponent, 't');
    });
    await act(async () => {
      if (!ssnInputComponent) {
        throw new Error('Could not resolve input');
      }
      userEvent.type(ssnInputComponent, '2');
    });
    await act(async () => {
      if (!datePickerInputComponent) {
        throw new Error('Could not resolve input');
      }
      userEvent.type(datePickerInputComponent, '6');
    });
    await act(async () => {
      if (!militaryCheckBoxComponent) {
        throw new Error('Could not resolve input');
      }
      userEvent.click(militaryCheckBoxComponent);
    });
    await waitFor(() => {
      if (!militaryCheckBoxComponent) {
        throw new Error('Could not resolve input');
      }
      fireEvent.change(idFileInput, {
        target: { files: [file] },
      });
    });

    // Assert
    expect(firstNameInputComponent).toHaveValue(`${exampleProfile.firstName}t`);
    expect(middleNameinputComponent).toHaveValue('t');
    expect(lastNameInputComponent).toHaveValue(`${exampleProfile.lastName}t`);
    expect(mobilePhoneInputComponent).toHaveValue(`(209) 4`);
    expect(emailInputComponent).toHaveValue(`${exampleProfile.emailAddress}t`);
    expect(ssnInputComponent).toHaveValue(`2`);
    expect(datePickerInputComponent).toHaveValue(`6`);
    expect(mockSetNextDisabled).toHaveBeenCalled();
    expect(militaryCheckBox).toBeInTheDocument();
  });

  it('Test for valid SSN value', async () => {
    const component = render(<ApplicantFields />);
    const ssnInput = await component.findByTestId('applicant-ssn-input');
    const ssnInputComponent = ssnInput.querySelector('input');

    await act(async () => {
      if (!ssnInputComponent) {
        throw new Error('Could not resolve input');
      }
      userEvent.paste(ssnInputComponent, '123-45-7861');
    });

    expect(ssnInputComponent).toHaveValue(`123-45-7861`);
  });
  it('enter invalid SSN value', async () => {
    const component = render(<ApplicantFields profile={exampleProfile} />);
    const ssnInput = await component.findByTestId('applicant-ssn-input');
    const ssnInputComponent = ssnInput.querySelector('input');

    await act(async () => {
      if (!ssnInputComponent) {
        throw new Error('Could not resolve input');
      }
      userEvent.paste(ssnInputComponent, '000-00-0000');
    });

    expect(ssnInputComponent).toHaveValue(`000-00-0000`);
  });
  it('displays error when invalid SSN is provided', async () => {
    const component = render(<ApplicantFields profile={exampleProfile} />);
    const ssnInput = await component.findByTestId('applicant-ssn-input');
    const ssnInputComponent = ssnInput.querySelector('input');

    await act(async () => {
      if (!ssnInputComponent) {
        throw new Error('Could not resolve input');
      }
      userEvent.paste(ssnInputComponent, '000-00-0000');
    });
    expect(screen.getByText('Please enter a valid SSN')).toBeVisible();
  });
  it('displays error when incomplete and invalid SSN is provided', async () => {
    const component = render(<ApplicantFields profile={exampleProfile} />);
    const ssnInput = await component.findByTestId('applicant-ssn-input');
    const ssnInputComponent = ssnInput.querySelector('input');

    await act(async () => {
      if (!ssnInputComponent) {
        throw new Error('Could not resolve input');
      }
      userEvent.paste(ssnInputComponent, '000');
    });
    expect(screen.getByText('Please enter a valid SSN')).toBeVisible();
  });

  it('applies formatting', async () => {
    const component = render(<ApplicantFields profile={exampleProfile} />);
    const ssnInput = await component.findByTestId('applicant-ssn-input');
    const ssnInputComponent = ssnInput.querySelector('input');

    await act(async () => {
      if (!ssnInputComponent) {
        throw new Error('Could not resolve input');
      }
      userEvent.paste(ssnInputComponent, '0000');
    });
    expect(ssnInputComponent).toHaveValue(`000-0`);
  });
});
