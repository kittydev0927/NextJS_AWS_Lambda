import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { Illustration as IllustrationComponent } from '#components/layouts/atoms/Illustration/Illustration';

export default {
  title: 'Components/Layouts/Atoms/Illustration',
  component: IllustrationComponent,
} as Meta;

const Template: Story = args => <IllustrationComponent src="/image-sign-in.png" width={200} height={140} {...args} />;

export const SignInImageIllustration = Template.bind({});
const COMMON_ARGS = {
  width: 200,
  height: 140,
};
SignInImageIllustration.args = {
  src: '/image-sign-in.png',
  ...COMMON_ARGS,
};

export const ProfileBuilderIllustration = Template.bind({});
ProfileBuilderIllustration.args = {
  src: '/profile-builder-illo.png',
  ...COMMON_ARGS,
};
