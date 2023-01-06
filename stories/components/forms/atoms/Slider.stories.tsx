import type { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import README from '#components/forms/atoms/Slider/README_Slider.mdx';
import { Slider as SliderComponent } from '#components/forms/atoms/Slider/Slider';

export default {
  title: 'Components/Forms/Atoms/Slider',
  component: SliderComponent,
  parameters: {
    docs: {
      page: README,
      source: {
        type: 'code',
      },
    },
  },
  argTypes: {
    disabled: {
      options: [true, false],
      defaultValue: false,
      control: { type: 'boolean' },
    },
    width: {
      defaultValue: '99%',
      control: { type: 'text' },
    },
    // controlled value
    value: {
      control: { disable: true },
    },
  },
} as Meta;

const Template: Story = args => {
  const [value, setValue] = useState<[number, number] | undefined>(undefined);

  return <SliderComponent {...args} onChange={setValue} value={value} />;
};

export const Slider = Template.bind({});
