import type { AutocompleteProps as MuiAutocompleteProps } from '@mui/material/Autocomplete/Autocomplete';
import type { InputProps as StandardInputProps } from '@mui/material/Input/Input';
import type { BaseTextFieldProps } from '@mui/material/TextField/TextField';

type Parent<T> = MuiAutocompleteProps<T, boolean, boolean, boolean>;

export interface AutocompleteProps<T>
  extends Pick<
    Parent<T>,
    | 'className'
    | 'disabled'
    | 'filterOptions'
    | 'filterSelectedOptions'
    | 'open'
    | 'onChange'
    | 'options'
    | 'renderOption'
    | 'renderTags'
    | 'PaperComponent'
    | 'value'
  > {
  InputProps?: Partial<StandardInputProps>;
  loading?: boolean;
  onInputChange?: StandardInputProps['onChange'];
  placeholder: BaseTextFieldProps['placeholder'];
  multiple?: Parent<boolean>['multiple'];
  popupIcon?: Parent<T>['popupIcon'];
  fullWidth?: StandardInputProps['fullWidth'];
  error?: StandardInputProps['error'];
  onBlur?: StandardInputProps['onBlur'];
  name?: StandardInputProps['name'];
  getOptionLabel?: Parent<T>['getOptionLabel'];
}
