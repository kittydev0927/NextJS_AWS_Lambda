import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { BedroomSelector as BedroomSelectorComponent } from '#components/forms/atoms/BedroomSelector/BedroomSelector';

export default {
  title: 'Components/Forms/Atoms/Bedroom Selector',
  component: BedroomSelectorComponent,
} as Meta;

const Template: Story = () => {
  return (
    <BedroomSelectorComponent
      onSelectedOptions={() => {
        return false;
      }}
    />
  );
};

export const BedroomSelector = Template.bind({});
