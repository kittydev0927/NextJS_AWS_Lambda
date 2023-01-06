import type { AutocompleteValue } from '@mui/base';

export interface PBLocationsPageProps {
  onSelectedOptions: (selectedOptions: AutocompleteValue<string, boolean, boolean, boolean>) => void;
  defaultValue: string[] | undefined;
}
