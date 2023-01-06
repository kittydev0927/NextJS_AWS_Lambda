import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { ProfileBuilderWrapper as ProfileBuilderWrapperComponent } from '#components/forms/molecules/ProfileBuilderWrapper/ProfileBuilderWrapper';
import { sampleSteps } from '#utils/sampleFormData';

const EmptyMainCard: React.FC = () => {
  return <div></div>;
};
export default {
  title: 'Components/Forms/Molecules/Profile Builder Wrapper',
  component: ProfileBuilderWrapperComponent,
  parameters: {
    docs: {
      description: {
        component: 'Profile Builder Wrapper which is to be used when building steps 1-4 of the profile builder',
      },
    },
  },
  argTypes: {
    step: {
      control: 'number',
      defaultValue: 0,
    },
    steps: {
      defaultValue: sampleSteps,
      control: 'object',
    },
  },
} as Meta;

const Template: ComponentStory<typeof ProfileBuilderWrapperComponent> = args => (
  <ProfileBuilderWrapperComponent MainCard={EmptyMainCard} {...args} />
);

export const ProfileBuilderWrapper = Template.bind({});
