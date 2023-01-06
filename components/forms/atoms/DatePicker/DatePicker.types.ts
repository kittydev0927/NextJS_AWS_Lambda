import type { DesktopDatePickerProps } from '@mui/lab';

export interface DatePickerProps
  extends Pick<DesktopDatePickerProps<Date>, 'label' | 'minDate' | 'onChange' | 'onError' | 'value'> {
  disabled?: boolean;
  className?: string;
  minDate?: Date;
}
