import type { Meta, Story } from '@storybook/react';
import React from 'react';

import ExitAppModalComp from '#components/navigation/organisms/ExitAppModal/ExitAppModal';

export default {
  title: 'Components/Navigation/Organisms/Exit App Modal',
  component: ExitAppModalComp,
  parameters: {
    docs: {
      description: {
        component: 'Exit Application Confirmation Modal',
      },
    },
  },
} as Meta;

const Template: Story = args => <ExitAppModalComp {...args} />;

export const ExitAppModal = Template.bind({});
ExitAppModal.args = {
  openModal: true,
};
