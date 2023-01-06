import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { MultiSelect as MultiSelectComponent } from '#components/forms/molecules/MultiSelect/MultiSelect';
import { sampleMultiSelectData } from '#utils/sampleMultiSelectData';

export default {
  title: 'Components/Forms/Molecules/Multi Select',
  component: MultiSelectComponent,
  parameters: {
    docs: {
      description: {
        component:
          'The `MultiSelect` component takes all option to displays as multi choice answers and you can select it by clicking individual options. Currently the component is expecting a options to be passed.',
      },
    },
  },
  argTypes: {
    options: {
      defaultValue: sampleMultiSelectData,
      control: 'object',
    },
  },
} as Meta;

const Template: Story = args => (
  <MultiSelectComponent
    options={sampleMultiSelectData}
    onSelectedOptions={() => {
      return false;
    }}
    {...args}
  />
);

export const MultiSelect = Template.bind({});
