import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ApplicationStatusContent as ApplicationStatusContentComponent } from '#components/layouts/organisms/ApplicationStatusContent/ApplicationStatusContent';

const StoryMeta: ComponentMeta<typeof ApplicationStatusContentComponent> = {
  title: 'Components/Layouts/Organisms/Account Settings',
  component: ApplicationStatusContentComponent,
  parameters: {
    docs: {
      description: {
        component:
          'Application Status Content component renders different views depending on the application status. This component is implemented in the Application Status Page',
      },
    },
  },
  argTypes: {
    currentAppStatus: {
      options: ['processing', 'denied', 'approved', 'submitted'],
      control: { type: 'radio' },
      defaultValue: 'processing',
    },
  },
};

export default StoryMeta;

const Template: ComponentStory<typeof ApplicationStatusContentComponent> = args => (
  <ApplicationStatusContentComponent {...args} />
);

export const ApplicationStatusContent = Template.bind({});
