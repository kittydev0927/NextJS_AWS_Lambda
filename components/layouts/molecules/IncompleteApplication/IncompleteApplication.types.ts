import type { IProfile } from '#auth/IProfile';
import type { CircularProgressProps } from '#components/forms/atoms/CircularProgress/CircularProgress.types';
import type { IApplication } from '#models/IApplication';

export interface IIncompleteApplicationProps extends Omit<CircularProgressProps, 'currentStep' | 'totalSteps'> {
  application: IApplication;
  buttonLabel?: string;
  buttonLabelCompleted?: string;
  header?: string;
  profile: IProfile;
  text?: string;
}
