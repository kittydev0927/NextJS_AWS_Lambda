import type { CircularProgressProps } from '#components/forms/atoms/CircularProgress/CircularProgress.types';

export type IncompleteProfileProps = Omit<CircularProgressProps, 'currentStep' | 'totalSteps'>;
