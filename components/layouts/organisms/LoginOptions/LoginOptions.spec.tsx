import userEvent from '@testing-library/user-event';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';
import { render, screen } from '#utils/testing-library';

import { LoginOptions } from './LoginOptions';

describe('LoginOptions', () => {
  it('renders the login options', () => {
    const mockCallback = jest.fn();
    render(
      <LoginOptions
        onNewApplicantClick={mockCallback}
        userAuthContent={sampleUserAuthContent as unknown as IUserAuthData}
      />,
    );
    const resOption = screen.getByTestId('resident-login-option');
    expect(resOption).toBeInTheDocument();
    const appOption = screen.getByTestId('applicant-option');
    expect(appOption).toBeInTheDocument();
    const appOptionButton = screen.getByTestId('applicant-option-button');
    expect(appOptionButton).toBeInTheDocument();
    userEvent.click(screen.getByTestId('applicant-option-button'));
    expect(mockCallback).toHaveBeenCalled();
  });
});
