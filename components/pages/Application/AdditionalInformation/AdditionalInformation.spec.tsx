jest.mock('#auth/UseRouteUnauthenticated');
jest.mock('next/router');
jest.mock('use-debounce');
import userEvent from '@testing-library/user-event';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import type { ISampleData } from '#utils/sampleApplicationPageData';
import { sampleApplicationPageData } from '#utils/sampleApplicationPageData';
import { act, render, screen } from '#utils/testing-library';

import { AdditionalInformation } from './AdditionalInformation';

type IRouter = ReturnType<typeof useRouter>;
const mockUseRouter = jest.mocked(useRouter);
const mockPrefetch = jest.fn<Promise<void>, Parameters<IRouter['prefetch']>>();
const mockPush = jest.fn<Promise<boolean>, Parameters<IRouter['push']>>();
const mockRouter = { prefetch: mockPrefetch, push: mockPush } as unknown as NextRouter;
const mockUseDebouncedCallback = jest.mocked(useDebouncedCallback);
const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);

describe('Additional Information Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    mockUseRouter.mockReturnValue(mockRouter);
    mockUseRouteUnauthenticated.mockReturnValue(true);
    mockUseDebouncedCallback.mockImplementation(
      func => ((...args: unknown[]) => func(...args)) as unknown as ReturnType<typeof useDebouncedCallback>,
    );
  });

  it('renders the Application Status Page', () => {
    render(<AdditionalInformation pageData={sampleApplicationPageData as unknown as ISampleData} />);
    expect(screen.getByTestId('additional-information-page')).toBeInTheDocument();
  });

  it('navigates to /application/animals when the previous button is pressed', async () => {
    // Arrange
    const component = render(<AdditionalInformation pageData={sampleApplicationPageData as unknown as ISampleData} />);

    // Act
    await act(async () => {
      userEvent.click(await component.findByTestId('previous button'));
    });

    // Assert
    expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('/animals'));
  });

  it('navigates to /application/income-and-employment when the next button is pressed', async () => {
    // Arrange
    const component = render(<AdditionalInformation pageData={sampleApplicationPageData as unknown as ISampleData} />);
    const smallDelay = async () =>
      new Promise(resolve => {
        const delay = 100;
        setTimeout(resolve, delay);
      });

    // Act
    const noCheckboxes = component.getAllByTestId('checkbox-no');
    await act(async () => {
      noCheckboxes.forEach(box => {
        userEvent.click(box);
      });
      await smallDelay();
      userEvent.click(await component.findByTestId('next button'));
    });

    // Assert
    expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('/income-and-employment'));
  });
});
