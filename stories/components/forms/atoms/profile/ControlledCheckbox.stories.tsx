import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { useControlledCheckbox } from '#components/forms/atoms/profile/useControlledCheckbox';
import README from '#components/forms/atoms/profile/useControlledCheckbox.mdx';

type ControlledCheckboxComponent = ReturnType<typeof useControlledCheckbox>[0];

const StoryMeta: ComponentMeta<ControlledCheckboxComponent> = {
  argTypes: { label: { type: 'string' } },
  parameters: {
    docs: { page: README, source: { type: 'code' } },
    layout: 'centered',
  },
  title: 'Components/Forms/Atoms/profile/Controlled Checkbox',
};

export default StoryMeta;

const Template: ComponentStory<ControlledCheckboxComponent> = args => {
  const [Checkbox] = useControlledCheckbox();
  return <Checkbox {...args} />;
};

export const ControlledCheckbox = Template.bind({});

ControlledCheckbox.args = {
  label: 'label',
};
