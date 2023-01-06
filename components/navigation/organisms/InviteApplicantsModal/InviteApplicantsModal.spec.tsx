import userEvent from '@testing-library/user-event';
import React from 'react';

import type { IApplicationItem as IPageContentItem } from '#api/aem/applicationContentFragmentQuery/applicationContentFragmentQuery.types';
import { applicantsData } from '#utils/sampleApplicantData';
import { act, fireEvent, render, screen } from '#utils/testing-library';

import { InviteApplicantsModal } from './InviteApplicantsModal';

describe('InviteApplicantsModal', () => {
  it('renders the modal', () => {
    render(<InviteApplicantsModal pageContent={applicantsData as unknown as IPageContentItem} />);
    expect(screen.getByTestId('invite-applicants-modal')).toBeInTheDocument();
  });

  it('updates inputs and clears inputs on form submission', async () => {
    // Arrange
    const component = render(<InviteApplicantsModal pageContent={applicantsData as unknown as IPageContentItem} />);
    const firstNameInput = await component.findByTestId('first-name-input');
    const firstNameInputComponent = firstNameInput.querySelector('input');
    const emailInput = await component.findByTestId('email-input');
    const emailInputComponent = emailInput.querySelector('input');
    const lastNameInput = await component.findByTestId('last-name-input');
    const lastNameInputComponent = lastNameInput.querySelector('input');
    const submitButton = await component.findByTestId('submit-button');
    // Act
    await act(async () => {
      if (!firstNameInputComponent) {
        throw new Error('Could not resolve input');
      }
      userEvent.type(firstNameInputComponent, 't');
    });
    await act(async () => {
      if (!emailInputComponent) {
        throw new Error('Could not resolve input');
      }
      fireEvent.change(emailInputComponent, { target: { value: 'test@test.co' } });
    });
    await act(async () => {
      if (!lastNameInputComponent) {
        throw new Error('Could not resolve input');
      }
      userEvent.type(lastNameInputComponent, 't');
    });

    // Assert
    expect(firstNameInputComponent).toHaveValue('t');
    expect(emailInputComponent).toHaveValue('test@test.co');
    expect(lastNameInputComponent).toHaveValue('t');
    userEvent.click(submitButton);
    expect(firstNameInputComponent).toHaveValue('');
    expect(emailInputComponent).toHaveValue('');
    expect(lastNameInputComponent).toHaveValue('');
  });
});
