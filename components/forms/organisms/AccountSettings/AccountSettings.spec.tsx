jest.mock('next/router', () => {
  return { useRouter: jest.fn().mockReturnValue({ route: '/edit-personal-information' }) };
});

import React from 'react';

import { render, screen } from '#utils/testing-library';

import { AccountSettings } from './AccountSettings';
import { AccountSettingsWrapper } from './AccountSettings.styles';

describe('AccountSettings', () => {
  it('AccountSettings was rendered correct', () => {
    render(<AccountSettings />);
    expect(screen.getByText('Account Settings')).toBeInTheDocument();
  });

  it('AccountSettingsWrapper render', () => {
    render(<AccountSettingsWrapper title="Account Settings" />);
    expect(screen.getByText('Account Settings')).toBeInTheDocument();
  });
});
