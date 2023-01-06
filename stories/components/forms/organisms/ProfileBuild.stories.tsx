import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProfileBuild as ProfileBuildComponent } from '#components/forms/organisms/ProfileBuild/ProfileBuild';

export default {
  title: 'Components/Forms/Organisms/Profile Build',
  component: ProfileBuildComponent,
  parameters: {
    docs: {
      description: {
        component: 'Registration form to be used in the registration tab of the SSO page',
      },
    },
  },
  argTypes: {},
} as Meta;

const Template: Story = args => <ProfileBuildComponent {...args}></ProfileBuildComponent>;

export const ProfileBuild = Template.bind({});
ProfileBuild.args = {
  user: {
    firstName: 'Samantha',
    lastName: 'Smith',
  },
  buttonContent: 'Open Profile Build Overlay',
  displayModalOnly: false,
};
