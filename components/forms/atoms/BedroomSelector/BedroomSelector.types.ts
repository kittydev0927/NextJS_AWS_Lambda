import type { AutocompleteValue } from '@mui/base';

export interface BedroomSelectorProps {
  className?: string;
  value?: typeof BEDROOM_SELECTOR_OPTIONS;
  onSelectedOptions: (
    selectedOptions: AutocompleteValue<typeof BEDROOM_SELECTOR_OPTIONS[0], boolean, boolean, boolean>,
  ) => void;
}

export const BEDROOM_SELECTOR_OPTIONS = [
  {
    label: '1+ Bdrm',
    value: 1,
  },
  {
    label: '2+ Bdrm',
    value: 2,
  },
  {
    label: '3+ Bdrm',
    value: 3,
  },
  {
    label: '4+ Bdrm',
    value: 4,
  },
  {
    label: '5+ Bdrm',
    value: 5,
  },
];
