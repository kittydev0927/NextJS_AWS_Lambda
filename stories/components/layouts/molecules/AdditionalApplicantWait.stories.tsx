import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { ProfileInfoCard as ProfileInfoCardComponent } from '#components/layouts/organisms/ProfileCard/ProfileInfoCard';
import { AdditionalApplicantWait as AdditionalApplicantWaitComponent } from '#components/pages/Dashboard/AdditionalApplicantWait/AdditionalApplicantWait';

export default {
  title: 'Components/Layouts/Molecules/Additional Applicant Wait',
  component: AdditionalApplicantWaitComponent,
  parameters: {
    docs: {
      description: {
        component: 'Additional Applicant Wait',
      },
    },
  },
  argTypes: {
    maxRent: {
      control: { type: 'number' },
    },
    date: {
      control: { type: 'string' },
    },
  },
} as Meta;

const Template: Story = args => (
  <ProfileInfoCardComponent {...args}>
    <AdditionalApplicantWaitComponent {...args} />
  </ProfileInfoCardComponent>
);

export const AdditionalApplicantWait = Template.bind({});
AdditionalApplicantWait.args = {
  maxRent: 2500,
  date: '11.15.2021',
  disabled: true,
  name: 'Samantha Jones',
};
