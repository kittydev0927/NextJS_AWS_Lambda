export interface StepperProps {
  nextStepFn?: React.MouseEventHandler<HTMLButtonElement>;
  prevStepFn?: React.MouseEventHandler<HTMLButtonElement>;
  currentStep?: number;
  steps?: { label: string; href: string }[];
  smallScreen?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  activeStep?: number;
  orientation?: string;
  top?: number;
  moveToPage?: (href: string) => Promise<void>;
}

export type StyledStepperMenuProps = Pick<StepperProps, 'top'>;
