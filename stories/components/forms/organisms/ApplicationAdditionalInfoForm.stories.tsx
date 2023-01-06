import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { ApplicationAdditionalInfo as ApplicationAdditionalInfoComponent } from '#components/forms/organisms/ApplicationForms/ApplicationAdditionalInfo/ApplicationAdditionalInfo';

export default {
  title: 'Components/Forms/Organisms/Application Form/Additional Info Form',

  component: ApplicationAdditionalInfoComponent,

  parameters: {
    docs: {
      description: {
        component: 'Application builder, Additional information form',
      },
    },
  },
} as Meta;

const Template: Story = args => <ApplicationAdditionalInfoComponent {...args} />;

export const AdditionalInfoForm = Template.bind({});
