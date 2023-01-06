import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { SearchField as SearchFieldComponent } from '#components/navigation/molecules/SearchField/SearchField';

export default {
  title: 'Components/Navigation/Molecules/Search Field',
  component: SearchFieldComponent,
  parameters: {
    docs: {
      description: {
        component:
          'The `SearchField` component currently uses a faded white placeholder, "Search", and the Search Outlined icon. Below are MUI properties for updating this placeholder as well as handling input type, and two booleans for either disabling the search field or making it read only.',
      },
    },
  },
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    type: {
      control: { type: 'text' },
    },
    readOnly: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: ComponentStory<typeof SearchFieldComponent> = args => (
  <SearchFieldComponent {...args} placeholder={args.placeholder ? args.placeholder : 'Search'} />
);

export const SearchField = Template.bind({});
