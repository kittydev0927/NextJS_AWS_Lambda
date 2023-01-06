import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ProfileInfoCard as ProfileInfoCardComponent } from '#components/layouts/organisms/ProfileCard/ProfileInfoCard';
import { AdditionalApplicantSign as AdditionalApplicantSignComponent } from '#components/pages/Dashboard/AdditionalApplicantSign/AdditionalApplicantSign';

const StoryMeta: ComponentMeta<typeof AdditionalApplicantSignComponent> = {
  title: 'Components/Layouts/Molecules/Additional Applicant Sign',
  component: AdditionalApplicantSignComponent,
  parameters: {
    docs: {
      description: {
        component: 'Primary Lease Signing Card',
      },
    },
  },
};

export default StoryMeta;

const Template: ComponentStory<typeof AdditionalApplicantSignComponent> = args => (
  <ProfileInfoCardComponent {...args}>
    <AdditionalApplicantSignComponent />
  </ProfileInfoCardComponent>
);

export const AdditionalApplicantSign = Template.bind({});
