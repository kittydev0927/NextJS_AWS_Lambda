import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { AddSection as AddSectionComponent } from '#components/forms/molecules/AddSection/AddSection';
import type { OptionProps } from '#components/forms/molecules/AddSection/AddSection.types';

const sampleAddSectionData: OptionProps[] = [
  { label: 'Legal First Name', type: 'textbox' },
  { label: 'Middle Name', type: 'textbox' },
  { label: 'Last Name', type: 'textbox' },
  { label: 'Date of Birth', type: 'date' },
];

export default {
  title: 'Components/Forms/Molecules/Add Section',
  component: AddSectionComponent,
  parameters: {
    docs: {
      description: {
        component:
          'The `AddSection` component takes all options to create a dynamic section on click of add button. Currently the component is expecting a Button label name and options to be passed. For now option type are only textbox and date is supported',
      },
    },
  },
  argTypes: {
    options: {
      defaultValue: sampleAddSectionData,
      control: 'object',
    },
    buttonText: {
      defaultValue: 'Add Additional Occupant',
      control: { type: 'text' },
    },
    fieldText: {
      defaultValue: 'Occupant',
      control: { type: 'text' },
    },
    removeText: {
      defaultValue: 'Remove Occupant',
      control: { type: 'text' },
    },
  },
} as Meta;

const Template: Story = args => (
  <AddSectionComponent fieldText={''} removeText={''} options={sampleAddSectionData} buttonText={''} {...args} />
);

export const AddSection = Template.bind({});
