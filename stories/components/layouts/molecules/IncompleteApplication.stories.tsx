import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { IncompleteApplication as IncompleteApplicationComponent } from '#components/layouts/molecules/IncompleteApplication/IncompleteApplication';
import type { IIncompleteApplicationProps } from '#components/layouts/molecules/IncompleteApplication/IncompleteApplication.types';
import { ProfileInfoCard as ProfileInfoCardComponent } from '#components/layouts/organisms/ProfileCard/ProfileInfoCard';
import { applicationDraftIncomplete } from '#utils/sampleApplicationData';
import { profileComplete as profile } from '#utils/sampleProfileData';

export default {
  title: 'Components/Layouts/Molecules/Incomplete Application',
  component: IncompleteApplicationComponent,
  parameters: {
    docs: {
      description: {
        component:
          'Card for rendering incomplete application details. Contains pre-defined, styled controls for rendering text or will render child controls.',
      },
    },
  },
} as Meta;

const Template: Story = args => (
  <div>
    <ProfileInfoCardComponent>
      <IncompleteApplicationComponent {...(args as IIncompleteApplicationProps)} />
    </ProfileInfoCardComponent>
  </div>
);

export const IncompleteApplication = Template.bind({});
IncompleteApplication.args = {
  application: applicationDraftIncomplete,
  buttonLabel: 'Continue My Application',
  buttonLabelCompleted: 'Application Complete!',
  header: 'Your Application',
  profile,
  text: `Completing your application helps us find the home you're dreaming of.`,
  thicknessValue: 4,
};
