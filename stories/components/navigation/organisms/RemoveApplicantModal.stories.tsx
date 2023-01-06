import type { Meta, Story } from '@storybook/react';
import React from 'react';

import RemoveApplicantModalComponent from '#components/navigation/organisms/RemovaApplicantModal/RemoveApplicantModal';

export default {
  title: 'Components/Navigation/Organisms/Remove Applicant Modal',
  component: RemoveApplicantModalComponent,
  parameters: {
    docs: {
      description: {
        component: 'Remove Applicant Confirmation Modal',
      },
    },
  },
  argTypes: {
    applicationId: {
      control: { type: 'text' },
    },
    applicantId: {
      control: { type: 'text' },
    },
  },
} as Meta;

const Template: Story = args => <RemoveApplicantModalComponent applicantId="1" applicationId="1" {...args} />;

export const RemoveApplicantModal = Template.bind({});
RemoveApplicantModal.args = {
  openModal: true,
};
