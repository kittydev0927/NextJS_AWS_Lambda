export interface FormProgressProps {
  currentStep?: number;
  steps: { label: string; href: string }[];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  top?: number;
  moveToPage?: (href: string) => Promise<void>;
}
