import type { Meta, Story } from '@storybook/react';
import React from 'react';

import CoapplicantLinkInvalidModalComp from '#components/navigation/organisms/CoapplicantLinkInvalidModal/CoapplicantLinkInvalidModal';

export default {
  title: 'Components/Navigation/Organisms/Coapplicant Link Invalid Modal',
  component: CoapplicantLinkInvalidModalComp,
  parameters: {
    docs: {
      description: {
        component: 'Coapplicant Link Invalid Modal',
      },
    },
  },
} as Meta;

const Template: Story = args => <CoapplicantLinkInvalidModalComp {...args} />;

export const CoapplicantLinkInvalidModal = Template.bind({});
CoapplicantLinkInvalidModal.args = {
  openModal: true,
};
