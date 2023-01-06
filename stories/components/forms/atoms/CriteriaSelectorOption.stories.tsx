import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { CriteriaSelector as CriteriaSelectorOptionComponent } from '#components/forms/atoms/CriteriaSelectorOption/CriteriaSelectorOption';

export default {
  title: 'Components/Forms/Atoms/Criteria Selector Option',
  component: CriteriaSelectorOptionComponent,
  argTypes: {
    width: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
    text: {
      defaultValue: 'Example Text',
      control: { type: 'text' },
    },
    startingState: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story = args => <CriteriaSelectorOptionComponent {...args} />;

export const CriteriaSelectorOption = Template.bind({});
