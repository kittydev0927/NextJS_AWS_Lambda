import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { PersonaClient as PersonaClientComponent } from '#components/forms/molecules/PersonaClient/PersonaClient';

export default {
  title: 'Components/Forms/Molecules/Persona Client',
  component: PersonaClientComponent,
  parameters: {
    docs: {
      description: {
        component: 'Persona client used for ID verification during the application process.',
      },
    },
  },
  argTypes: {
    onComplete: { action: 'complete!' },
    onCancel: { action: 'cancelled!' },
    onError: { action: 'error!' },
  },
} as Meta;

const Template: Story = args => <PersonaClientComponent {...args}></PersonaClientComponent>;

export const PersonaClient = Template.bind({});
