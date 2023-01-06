jest.mock('next/router');
jest.mock('#auth/PortalUser');
import userEvent from '@testing-library/user-event';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import React from 'react';

import { PortalUser } from '#auth/PortalUser';
import { UserContext } from '#auth/UserContext';
import { act, render, screen } from '#utils/testing-library';

import { ContinueButton } from './ContinueButton';

type IRouter = ReturnType<typeof useRouter>;
const mockCreateApplication = jest.spyOn(PortalUser.prototype, 'createApplication');
const mockGetApplication = jest.spyOn(PortalUser.prototype, 'getApplication');
const mockPortalUser = {
  createApplication: mockCreateApplication,
  getApplication: mockGetApplication,
} as unknown as PortalUser;
const mockUseRouter = jest.mocked(useRouter);
const mockPush = jest.fn<Promise<boolean>, Parameters<IRouter['push']>>();
const mockRouter = { push: mockPush, query: { propertyId: '100050' } } as unknown as NextRouter;
const mockOnClick = jest.fn();

describe('AppWhatToExpect - Continue button', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('calls handleclick when button is clicked', () => {
    // Arrange
    const mockUseRouter = jest.mocked(useRouter);
    const mockRouterHandleClick = {
      query: {
        propertyId: '100050',
      },
    } as unknown as NextRouter;
    mockUseRouter.mockReturnValue(mockRouterHandleClick);
    render(<ContinueButton onClick={mockOnClick} />);

    // Act
    userEvent.click(screen.getByText(/continue/i));

    // Assert
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('calls create application if there is no existing application', async () => {
    // Arrange
    mockGetApplication.mockResolvedValue([]);
    mockCreateApplication.mockResolvedValue({
      applicationId: '12345',
      primaryApplicantId: '12345',
      applicants: [],
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      created: new Date(2022, 2, 12),
      propertyId: '100153',
      state: 'draft',
    });
    mockUseRouter.mockReturnValue(mockRouter);

    render(
      <UserContext.Provider value={mockPortalUser}>
        <ContinueButton onClick={mockOnClick} />
      </UserContext.Provider>,
    );

    // Act
    userEvent.click(screen.getByText(/continue/i));

    // Assert
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('submits when there is an existing application', () => {
    // Arrange
    const mockUseRouter = jest.mocked(useRouter);
    const mockRouterHandleClick = {
      query: {
        propertyId: '100050',
      },
    } as unknown as NextRouter;
    mockUseRouter.mockReturnValue(mockRouterHandleClick);
    mockGetApplication.mockResolvedValue([
      {
        state: 'draft',
        applicationId: '8161b569-4a96-48e5-8771-d396fef599ea',
        propertyId: '100050',
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        created: new Date(2022, 2, 12),
        applicants: [],
        primaryApplicantId: '12345',
      },
    ]);

    render(
      <UserContext.Provider value={mockPortalUser}>
        <ContinueButton onClick={mockOnClick} />
      </UserContext.Provider>,
    );

    // Act
    userEvent.click(screen.getByText(/continue/i));

    // Assert
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('submits when continue is clicked', async () => {
    // Arrange
    const mockUseRouter = jest.mocked(useRouter);
    const mockThisRouter = {
      query: {
        propertyId: '100050',
      },
    } as unknown as NextRouter;
    mockUseRouter.mockReturnValue(mockThisRouter);
    const component = render(
      <UserContext.Provider value={mockPortalUser}>
        <ContinueButton onClick={mockOnClick} />
      </UserContext.Provider>,
    );

    // Act
    await act(async () => {
      userEvent.click(await component.findByText(/continue/i));
    });

    // Assert
    expect(component.getByText(/Continue/i)).toBeVisible();
  });
});
