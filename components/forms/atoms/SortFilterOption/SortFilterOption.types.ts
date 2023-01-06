import type { SelectChangeEvent } from '@mui/material/Select';

export interface SortFilterOptionProps {
  disabled?: boolean;
  onFilterChange?: (event: SelectChangeEvent, newFilterValue: string) => void;
  onSortChange?: (event: SelectChangeEvent, newSortValue: string) => void;
  defaultFilterValue?: string;
  defaultSortValue?: string;
  filterOptions?: {
    value: string | number;
    label: string | number;
  }[];
  sortOptions?: {
    value: string | number;
    label: string | number;
  }[];
}
