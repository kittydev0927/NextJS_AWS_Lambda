import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { useProgressResident } from '#components/forms/molecules/Profile/useProgressResident';
import README from '#components/forms/molecules/Profile/useProgressResident.mdx';

type ProgressResidentComponent = ReturnType<typeof useProgressResident>[0];

const StoryMeta: ComponentMeta<ProgressResidentComponent> = {
  parameters: {
    docs: { page: README, source: { type: 'code' } },
    layout: 'centered',
  },
  title: 'Components/Forms/Molecules/Profile/Progress Resident',
};

export default StoryMeta;

const Template: ComponentStory<ProgressResidentComponent> = () => {
  const [Resident] = useProgressResident();
  return <Resident />;
};

export const ProgressResident = Template.bind({});
