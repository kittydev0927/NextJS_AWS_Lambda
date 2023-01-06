import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { Checkbox as CheckboxComponent } from '#components/forms/atoms/Checkbox/Checkbox';
import README from '#components/forms/atoms/Checkbox/README_Checkbox.mdx';

export default {
  title: 'Components/Forms/Atoms/Checkbox',
  component: CheckboxComponent,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    checked: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: ComponentStory<typeof CheckboxComponent> = args => (
  <CheckboxComponent {...args} checked={args.checked ? args.checked : false} />
);

export const Checkbox = Template.bind({});

Checkbox.args = {
  disabled: false,
};
