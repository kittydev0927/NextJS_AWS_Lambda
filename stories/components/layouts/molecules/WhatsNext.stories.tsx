import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProfileInfoCard as ProfileInfoCardComponent } from '#components/layouts/organisms/ProfileCard/ProfileInfoCard';
import { WhatsNext as WhatsNextComponent } from '#components/layouts/organisms/WhatsNext/WhatsNext';

export default {
  title: "Components/Layouts/Molecules/What's Next",
  component: WhatsNextComponent,
  parameters: {
    docs: {
      description: {
        component: "What's Next",
      },
    },
  },
} as Meta;

const Template: Story = args => (
  <ProfileInfoCardComponent {...args}>
    <WhatsNextComponent />
  </ProfileInfoCardComponent>
);

export const CompleteProfile = Template.bind({});
