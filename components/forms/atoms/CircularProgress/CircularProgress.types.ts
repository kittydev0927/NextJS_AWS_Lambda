import type { CircularProgressProps as MuiCircularProgressProps } from '@mui/material/CircularProgress';

export interface CircularProgressProps extends MuiCircularProgressProps {
  currentStep?: number;
  totalSteps?: number;
  widthValue?: number;
  thicknessValue?: number;
}
