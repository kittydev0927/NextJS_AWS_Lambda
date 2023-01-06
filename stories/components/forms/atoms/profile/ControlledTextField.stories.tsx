import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { ControlledTextField as ControlledTextFieldComponent } from '#components/forms/atoms/profile/ControlledTextField';
import README from '#components/forms/atoms/profile/ControlledTextField.mdx';
import type { IControlledTextFieldProps } from '#components/forms/atoms/profile/IControlledTextFieldProps';

type ISupportedType = NonNullable<IControlledTextFieldProps['type']>;

const supportedTypes: Record<ISupportedType, string> = {
  text: 'text',
  tel: 'tel',
  email: 'email',
  password: 'password',
  name: 'name',
};

const StoryMeta: ComponentMeta<typeof ControlledTextFieldComponent> = {
  argTypes: {
    fullWidth: {
      name: 'Full Width',
      type: 'boolean',
    },
    label: { type: 'string' },
    required: { type: 'boolean' },
    setValue: {
      action: 'setValue',
      control: false,
    },
    type: {
      type: {
        required: false,
        name: 'enum',
        value: Object.keys(supportedTypes),
      },
    },
    value: { control: false },
  },
  component: ControlledTextFieldComponent,
  parameters: { docs: { page: README, source: { type: 'code' } } },
  title: 'Components/Forms/Atoms/profile/Controlled Text Field',
};

export default StoryMeta;

const Template: ComponentStory<typeof ControlledTextFieldComponent> = args => {
  const [value, setValue] = useState('');

  const bubbleSetValue = (newValue: string) => {
    setValue(newValue);
    args.setValue?.(newValue);
  };

  return <ControlledTextFieldComponent {...args} value={value} setValue={bubbleSetValue} />;
};

export const ControlledTextField = Template.bind({});

ControlledTextField.args = {
  label: 'label',
  type: 'text',
};
