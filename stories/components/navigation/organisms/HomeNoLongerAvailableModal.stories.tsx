import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { HomeNoLongerAvailableModal as HomeNoLongerAvailableModalComp } from '#components/navigation/organisms/HomeNoLongerAvailableModal/HomeNoLongerAvailableModal';

export default {
  title: 'Components/Navigation/Organisms/Home No Longer Available Modal',
  component: HomeNoLongerAvailableModalComp,
  parameters: {
    docs: {
      description: {
        component: 'Home No Longer Available Modal',
      },
    },
  },
} as Meta;

const Template: Story = args => <HomeNoLongerAvailableModalComp {...args} />;

export const HomeNoLongerAvailableModal = Template.bind({});
HomeNoLongerAvailableModal.args = {
  openModal: true,
};
