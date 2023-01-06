import type { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { DatePicker as DatePickerComponent } from '#components/forms/atoms/DatePicker/DatePicker';
import type { DatePickerProps } from '#components/forms/atoms/DatePicker/DatePicker.types';
import README from '#components/forms/atoms/DatePicker/README_DatePicker.mdx';

export default {
  title: 'Components/Forms/Atoms/Date Picker',
  component: DatePickerComponent,
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
      control: { type: 'boolean' },
    },
    // controlled value
    value: {
      control: { disable: true },
    },
  },
} as Meta;

const Template: Story = args => {
  const [value, setValue] = useState<Date | null>(null);

  const onChange: DatePickerProps['onChange'] = date => {
    setValue(date);
  };

  return (
    <DatePickerComponent
      onChange={onChange}
      value={value}
      {...args}
      label=""
      onError={() => console.info('date picker error')}
    />
  );
};

export const DatePicker = Template.bind({});

DatePicker.args = {
  disabled: false,
};
