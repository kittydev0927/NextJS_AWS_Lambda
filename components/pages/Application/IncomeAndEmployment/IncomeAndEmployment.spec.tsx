jest.mock('#auth/UseRouteUnauthenticated');
jest.mock('next/router');

import userEvent from '@testing-library/user-event';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import React from 'react';

import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import { IncomeAndEmployment } from '#components/pages/Application/IncomeAndEmployment/IncomeAndEmployment';
import type { ISampleData } from '#utils/sampleApplicationPageData';
import { sampleApplicationPageData } from '#utils/sampleApplicationPageData';
import { act, render, screen } from '#utils/testing-library';

type IRouter = ReturnType<typeof useRouter>;
const mockPrefetch = jest.fn<Promise<void>, Parameters<IRouter['prefetch']>>();

const mockPush = jest.fn<Promise<boolean>, Parameters<IRouter['push']>>();
const mockUseRouter = jest.mocked(useRouter);
const mockRouter = { prefetch: mockPrefetch, push: mockPush } as unknown as NextRouter;
const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);

describe('IncomeAndEmploymentPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    mockUseRouteUnauthenticated.mockReturnValue(true);
    mockUseRouter.mockReturnValue(mockRouter);
  });
  it('renders the no housing choice page', () => {
    render(<IncomeAndEmployment pageData={sampleApplicationPageData as unknown as ISampleData} />);
    expect(screen.getByTestId('income-and-employment-page')).toBeInTheDocument();
    expect(screen.getByTestId('income-page-no-housing-choice')).toBeInTheDocument();
  });
  it('renders the housing choice page', () => {
    render(<IncomeAndEmployment housingChoice pageData={sampleApplicationPageData as unknown as ISampleData} />);
    expect(screen.getByTestId('income-and-employment-page')).toBeInTheDocument();
    expect(screen.getByTestId('income-page-housing-choice')).toBeInTheDocument();
  });
  it('navigates to /application/vehicles when the previous button is pressed', async () => {
    // Arrange
    const component = render(<IncomeAndEmployment pageData={sampleApplicationPageData as unknown as ISampleData} />);

    // Act
    await act(async () => {
      userEvent.click(await component.findByTestId('previous button'));
    });

    // Assert
    // TO DO: Fix test after release
    // expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('vehicles'));
    expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('/vehicles'));
  });
  it('navigates to /application/payment when the next button is pressed', async () => {
    // Arrange
    const component = render(<IncomeAndEmployment pageData={sampleApplicationPageData as unknown as ISampleData} />);

    // Act
    await act(async () => {
      userEvent.click(await component.findByTestId('next button'));
    });

    // Assert
    // TO DO: Fix test after release
    // expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('payment'));
    expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('payment'));
  });
});
