import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';
import { render, screen } from '#utils/testing-library';

import { LoginPageOptions } from './LoginPageOptions';

describe('LoginPageOptions', () => {
  it('renders the login page options', () => {
    render(<LoginPageOptions userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);
    const pageLayout = screen.getByTestId('page-layout');
    expect(pageLayout).toBeInTheDocument();
    const resOption = screen.getByTestId('resident-login-option');
    expect(resOption).toBeInTheDocument();
    const appOption = screen.getByTestId('applicant-option');
    expect(appOption).toBeInTheDocument();
    const appOptionButton = screen.getByTestId('applicant-option-button');
    expect(appOptionButton).toBeInTheDocument();
  });
});
