import type { Meta, Story } from '@storybook/react';
import React from 'react';

import CancelAppModalComp from '#components/navigation/organisms/CancelAppModal/CancelAppModal';

export default {
  title: 'Components/Navigation/Organisms/Cancel App Modal',
  component: CancelAppModalComp,
  parameters: {
    docs: {
      description: {
        component: 'Cancel Application Confirmation Modal',
      },
    },
  },
} as Meta;

const Template: Story = args => <CancelAppModalComp {...args} />;

export const CancelAppModal = Template.bind({});
CancelAppModal.args = {
  openModal: true,
};
