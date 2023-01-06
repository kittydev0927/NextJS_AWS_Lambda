import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { SortFilterOption as SortFilterOptionComponent } from '#components/forms/atoms/SortFilterOption/SortFilterOption';
import type { SortFilterOptionProps } from '#components/forms/atoms/SortFilterOption/SortFilterOption.types';

const sortFilterOptionSample: Pick<SortFilterOptionProps, 'filterOptions' | 'sortOptions'> = {
  filterOptions: [
    { label: 'All', value: 'showAll' },
    { label: 'For Rent', value: 'forRent' },
    { label: 'Unavailable', value: 'unavailable' },
  ],
  sortOptions: [
    { label: 'Move-In Date', value: 'moveInDate' },
    { label: 'Price', value: 'price' },
    { label: 'Distance', value: 'distance' },
    { label: 'Bedrooms', value: 'bedrooms' },
    { label: 'Bathrooms', value: 'bathrooms' },
  ],
};

export default {
  title: 'Components/Forms/Atoms/Sort Filter Option',
  component: SortFilterOptionComponent,
  argTypes: {
    disabled: {
      options: [true, false],
      defaultValue: false,
      control: { type: 'boolean' },
    },
    filterOptions: {
      control: 'object',
      defaultValue: sortFilterOptionSample.filterOptions,
    },
    sortOptions: {
      control: 'object',
      defaultValue: sortFilterOptionSample.sortOptions,
    },
    defaultFilterValue: {
      control: { type: 'text' },
      defaultValue: sortFilterOptionSample.filterOptions?.at(0)?.value,
    },
    defaultSortValue: {
      control: { type: 'text' },
      defaultValue: sortFilterOptionSample.sortOptions?.at(0)?.value,
    },
  },
} as Meta;

const Template: Story = args => <SortFilterOptionComponent {...args} />;

export const SortFilterOption = Template.bind({});
