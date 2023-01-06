import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { PlaidLink as PlaidLinkComponent } from '#components/forms/molecules/PlaidLink/PlaidLink';

const StoryMeta: ComponentMeta<typeof PlaidLinkComponent> = {
  title: 'Components/Forms/Molecules/Plaid Link',
  component: PlaidLinkComponent,
  parameters: {
    docs: {
      description: {
        component:
          "Plaid Link client component used to link the applicant's bank account during the application process",
      },
    },
  },
  argTypes: {
    onSuccess: { action: 'success!' },
  },
};

export default StoryMeta;

const Template: ComponentStory<typeof PlaidLinkComponent> = args => <PlaidLinkComponent {...args} />;

export const PlaidLink = Template.bind({});
