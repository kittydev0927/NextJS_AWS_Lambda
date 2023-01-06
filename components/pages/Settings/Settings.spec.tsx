jest.mock('next/router', () => {
  return { useRouter: jest.fn().mockReturnValue({ route: '/edit-personal-information' }) };
});
jest.mock('#auth/UseRouteUnauthenticated');
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';
import { render, screen } from '#utils/testing-library';

import { SettingsPage } from './Settings';

const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);

describe('AccountSettings', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    mockUseRouteUnauthenticated.mockReturnValue(true);
  });

  it('AccountSettings was rendered correct', () => {
    render(<SettingsPage userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);
    expect(screen.getByText('Account Settings')).toBeInTheDocument();
  });
});
