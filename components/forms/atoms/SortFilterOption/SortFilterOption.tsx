import MenuItem from '@mui/material/MenuItem';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import * as React from 'react';

import { SelectArrowIcon } from './SelectArrowIcon';
import { StyledSortFilterOption } from './SortFilterOption.styles';
import type { SortFilterOptionProps } from './SortFilterOption.types';

export const SortFilterOption: React.FC<SortFilterOptionProps> = ({
  onFilterChange,
  onSortChange,
  defaultFilterValue,
  defaultSortValue,
  disabled,
  filterOptions,
  sortOptions,
}) => {
  const [filter, setFilter] = React.useState<string>(defaultFilterValue || '');
  const [sort, setSort] = React.useState<string>(defaultSortValue || '');

  const handleFilterChange = (event: SelectChangeEvent) => {
    if (event.target.value) {
      setFilter(event.target.value);
      if (onFilterChange) {
        onFilterChange(event, event.target.value);
      }
    }
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    if (event.target.value) {
      setSort(event.target.value);
      if (onSortChange) {
        onSortChange(event, event.target.value);
      }
    }
  };

  return (
    <StyledSortFilterOption data-testid="sort-filter-option" className="sort-filter-option">
      <Select
        value={filter}
        disabled={disabled}
        className="select-option"
        onChange={handleFilterChange}
        data-testid="filter-option"
        IconComponent={SelectArrowIcon}
        renderValue={() => (
          <div className="render-text">Showing: {filterOptions?.find(i => i.value === filter)?.label}</div>
        )}
      >
        {filterOptions?.map((item, index) => (
          <MenuItem data-testid={`filter-item-${index}`} key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      <Select
        value={sort}
        disabled={disabled}
        className="select-option"
        onChange={handleSortChange}
        data-testid="sort-option"
        IconComponent={SelectArrowIcon}
        renderValue={() => <div className="render-text">By: {sortOptions?.find(i => i.value === sort)?.label}</div>}
      >
        {sortOptions?.map((item, index) => (
          <MenuItem data-testid={`sort-item-${index}`} key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </StyledSortFilterOption>
  );
};
