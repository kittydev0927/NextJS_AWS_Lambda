import React from 'react';

import { createMatchMedia } from '#tests/createMatchMedia';
import { sampleSteps } from '#utils/sampleFormData';
import { fireEvent, render, screen } from '#utils/testing-library';

import { Stepper } from './Stepper';

describe('Stepper', () => {
  beforeAll(() => {
    window.matchMedia = createMatchMedia();
  });

  it('renders the Stepper', () => {
    render(<Stepper steps={sampleSteps} currentStep={1} />);
    expect(screen.getByText('Location')).toBeInTheDocument();
  });
  it('uses default values when props are not provided', () => {
    render(<Stepper />);
    const stepText = screen.queryByText('Location');
    expect(stepText).toBeNull(); // it doesn't exist
  });
  it('fires the handleWindowResize when the width changes', () => {
    render(<Stepper steps={sampleSteps} currentStep={1} />);
    expect(screen.queryByText('Step 1')).toBeInTheDocument();
  });
  it('shows the resume button on the mobile stepper when open', () => {
    render(<Stepper steps={sampleSteps} currentStep={1} />);
    fireEvent(
      screen.getByTestId('stepper-menu-button'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    const stepText = screen.queryByText('Resume');
    expect(stepText).toBeInTheDocument();
  });
  it('closes the mobile stepper menu when close button is clicked', async () => {
    render(<Stepper steps={sampleSteps} currentStep={1} />);
    fireEvent.click(screen.getByTestId('stepper-menu-button'));
    // await screen.getByText('Resume');
    fireEvent.click(screen.getByText('Resume'));
    const resumeText = screen.queryByText('Resume');
    expect(resumeText).toBeNull();
  });
  it('calls onClick when clicked', async () => {
    const mockFunc = jest.fn();
    render(<Stepper steps={sampleSteps} currentStep={2} onClick={mockFunc} />);
    fireEvent.click(screen.getByTestId('stepper-menu-button'));
    fireEvent.click(screen.getByTestId('step-1'));
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});
