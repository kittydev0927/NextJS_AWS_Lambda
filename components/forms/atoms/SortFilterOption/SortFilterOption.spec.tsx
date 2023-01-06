import type { SelectChangeEvent } from '@mui/material/Select';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { render, screen, waitFor } from '#utils/testing-library';

import { SortFilterOption } from './SortFilterOption';

describe('SortFilterOption', () => {
  const filterOptions = [
    { label: 'All', value: 'showAll' },
    { label: 'For Rent', value: 'forRent' },
    { label: 'Unavailable', value: 'unavailable' },
  ];
  const sortOptions = [
    { label: 'Move-In Date', value: 'moveInDate' },
    { label: 'Price', value: 'price' },
    { label: 'Distance', value: 'distance' },
    { label: 'Bedrooms', value: 'bedrooms' },
    { label: 'Bathrooms', value: 'bathrooms' },
  ];
  it('renders the Sort-Filter Option', () => {
    render(
      <SortFilterOption
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        defaultFilterValue={filterOptions[0].value}
        defaultSortValue={sortOptions[0].value}
      />,
    );
    expect(screen.getByTestId('sort-filter-option')).toBeInTheDocument();
    expect(screen.getByTestId('filter-option')).toBeInTheDocument();
    expect(screen.getByTestId('sort-option')).toBeInTheDocument();
  });
  it('renders the Sort-Filter Option in disabled form', () => {
    render(
      <SortFilterOption
        disabled
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        defaultFilterValue={filterOptions[0].value}
        defaultSortValue={sortOptions[0].value}
      />,
    );
    expect(screen.getByTestId('sort-filter-option')).toBeInTheDocument();
    expect(screen.getByTestId('filter-option')).toBeInTheDocument();
    expect(screen.getByTestId('sort-option')).toBeInTheDocument();
  });
  it('renders the Sort-Filter Option, check options rendered correctly', async () => {
    render(
      <SortFilterOption
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        defaultFilterValue={filterOptions[0].value}
        defaultSortValue={sortOptions[0].value}
      />,
    );
    const btnEl = screen.getAllByRole('button');
    userEvent.click(btnEl[0]);
    userEvent.click(btnEl[1]);
    await waitFor(() => screen.getAllByRole('listbox'));

    filterOptions.forEach(item => expect(screen.getByText(item.label)).toBeInTheDocument());
    sortOptions.forEach(item => expect(screen.getByText(item.label)).toBeInTheDocument());
  });
  it('renders the Sort-Filter Option, click filter and sort option dropdown', async () => {
    const handleFilterChange = (event: SelectChangeEvent, newFilterValue: string) => {
      expect(newFilterValue).toBe(filterOptions[1].value);
    };
    const handleSortChange = (event: SelectChangeEvent, newSortValue: string) => {
      expect(newSortValue).toBe(sortOptions[1].value);
    };
    render(
      <SortFilterOption
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        defaultFilterValue={filterOptions[0].value}
        defaultSortValue={sortOptions[0].value}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />,
    );
    const btnEl = screen.getAllByRole('button');
    userEvent.click(btnEl[0]);
    userEvent.click(btnEl[1]);
    await waitFor(() => screen.getAllByRole('listbox'));

    userEvent.click(screen.getByText(filterOptions[1].label));
    userEvent.click(screen.getByText(sortOptions[1].label));
  });
});
