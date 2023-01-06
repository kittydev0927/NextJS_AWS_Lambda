import type { Meta, Story } from '@storybook/react';

import { OrientationVideo as OrientationVideoComponent } from '#components/layouts/molecules/OrientationVideo/OrientationVideo';
export default {
  title: 'Components/Layouts/Molecules/Orientation Video',
  component: OrientationVideoComponent,
} as Meta;

const Template: Story = args => <OrientationVideoComponent {...args} />;

export const OrientationVideo = Template.bind({});
OrientationVideo.args = {
  videoUrl: '252765163',
  start: 0,
  autoplay: false,
  termAccepted: false,
};
