jest.mock('next/router');
import { ThemeProvider } from '@mui/material';
import type { NextRouter } from 'next/dist/shared/lib/router/router';
import { useRouter } from 'next/router';
import React from 'react';

import { stepperConfig } from '#constants/stepperConfig';
import { theme } from '#styles/styles';
import { applicationDraftComplete, applicationDraftIncomplete } from '#utils/sampleApplicationData';
import { profileComplete } from '#utils/sampleProfileData';
import { render, screen } from '#utils/testing-library';

import { IncompleteApplication } from './IncompleteApplication';

type IRouter = ReturnType<typeof useRouter>;

const mockUseRouter = jest.mocked(useRouter);
const mockPrefetch = jest.fn<Promise<void>, Parameters<IRouter['prefetch']>>();
const mockPush = jest.fn<Promise<boolean>, Parameters<IRouter['push']>>();
const mockRouter = { prefetch: mockPrefetch, push: mockPush } as unknown as NextRouter;

describe('IncompleteApplication', () => {
  beforeEach(() => {
    mockUseRouter.mockReturnValue(mockRouter);
  });
  const header = 'Your Application';
  const text = `Completing your application helps us find the home you're dreaming of.`;

  it('IncompleteApplication renders completed application correctly', () => {
    const buttonLabelCompleted = 'Dogs Rule!';
    render(
      <ThemeProvider theme={theme}>
        <IncompleteApplication
          application={applicationDraftComplete}
          header={header}
          profile={profileComplete}
          text={text}
          buttonLabelCompleted={buttonLabelCompleted}
        />
      </ThemeProvider>,
    );

    const progress = screen.getByTestId('percentage');
    expect(progress).toBeInTheDocument();
    expect(progress).toHaveTextContent('100%');

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('disabled');
    expect(button).toHaveTextContent(buttonLabelCompleted);

    expect(screen.getByText(header)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText('Step 11 of 11 completed')).toBeInTheDocument();
  });

  it('IncompleteApplication renders completed application correctly using defaults', () => {
    render(
      <ThemeProvider theme={theme}>
        <IncompleteApplication
          application={applicationDraftComplete}
          header={header}
          text={text}
          profile={profileComplete}
        />
      </ThemeProvider>,
    );

    const progress = screen.getByTestId('percentage');
    expect(progress).toBeInTheDocument();
    expect(progress).toHaveTextContent('100%');

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('disabled');
    expect(button).toHaveTextContent('Application Complete!');

    expect(screen.getByText(header)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText('Step 11 of 11 completed')).toBeInTheDocument();
  });

  it('IncompleteApplication renders completed application correctly with explicit width and thickness', () => {
    render(
      <ThemeProvider theme={theme}>
        <IncompleteApplication
          application={applicationDraftComplete}
          header={header}
          text={text}
          profile={profileComplete}
          thicknessValue={stepperConfig.defaultThickness}
          widthValue={stepperConfig.largeCircle}
        />
      </ThemeProvider>,
    );

    const progress = screen.getByTestId('percentage');
    expect(progress).toBeInTheDocument();
    expect(progress).toHaveTextContent('100%');

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('disabled');
    expect(button).toHaveTextContent('Application Complete!');

    expect(screen.getByText(header)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText('Step 11 of 11 completed')).toBeInTheDocument();
  });

  it('IncompleteApplication renders partial application correctly', () => {
    const buttonLabel = 'Cats Drool!';
    render(
      <ThemeProvider theme={theme}>
        <IncompleteApplication
          application={applicationDraftIncomplete}
          buttonLabel={buttonLabel}
          header={header}
          text={text}
          profile={profileComplete}
        />
      </ThemeProvider>,
    );

    const progress = screen.getByTestId('percentage');
    expect(progress).toBeInTheDocument();
    expect(progress).toHaveTextContent('27%');

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(buttonLabel);

    expect(screen.getByText(header)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText('Step 3 of 11 completed')).toBeInTheDocument();
  });

  it('IncompleteApplication renders partial application correctly using defaults', () => {
    render(
      <ThemeProvider theme={theme}>
        <IncompleteApplication
          application={applicationDraftIncomplete}
          header={header}
          profile={profileComplete}
          text={text}
        />
      </ThemeProvider>,
    );

    const progress = screen.getByTestId('percentage');
    expect(progress).toBeInTheDocument();
    expect(progress).toHaveTextContent('27%');

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Continue My Application');

    expect(screen.getByText(header)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText('Step 3 of 11 completed')).toBeInTheDocument();
  });
});
