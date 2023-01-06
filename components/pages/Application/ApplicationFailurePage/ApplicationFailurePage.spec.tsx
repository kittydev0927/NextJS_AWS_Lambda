jest.mock('#auth/UseRouteUnauthenticated');
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';
import { render, screen } from '#utils/testing-library';

import { ApplicationFailurePage } from './ApplicationFailurePage';

const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);

describe('ApplicationFailurePage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    mockUseRouteUnauthenticated.mockReturnValue(true);
  });

  it('renders the ApplicationFailurePage', () => {
    render(<ApplicationFailurePage userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);
    expect(screen.getByTestId('application-failure-page')).toBeInTheDocument();
  });
});
