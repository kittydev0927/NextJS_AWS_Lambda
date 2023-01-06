import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProfileInfoCard as ProfileInfoCardComponent } from '#components/layouts/organisms/ProfileCard/ProfileInfoCard';
import { CongratulationsComponent as CongratulationsComponentStory } from '#components/pages/Dashboard/CongratulationsComponent/CongratulationsComponent';

export default {
  title: 'Components/Layouts/Molecules/Congratulations Component',
  component: CongratulationsComponentStory,
  parameters: {
    docs: {
      description: {
        component: 'Congratulations Component Card',
      },
    },
  },
} as Meta;

const Template: Story = args => (
  <ProfileInfoCardComponent {...args}>
    <CongratulationsComponentStory />
  </ProfileInfoCardComponent>
);

export const CongratulationsComponent = Template.bind({});
