import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { EditHomes as EditHomesComponent } from '#components/forms/molecules/EditHomes/EditHomes';

const ButtonDefaultText = 'Edit Homes';

export default {
  title: 'Components/Forms/Molecules/Edit Homes',
  component: EditHomesComponent,
  parameters: {
    docs: {
      description: {
        component:
          'The `EditHomes` component takes in properties and displays a text over the button, and when clicked it presents the options. Currently the component is expecting a property to be passed in id, and text.',
      },
    },
  },
  argTypes: {
    buttonText: {
      control: { type: 'text' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    disableRipple: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    variant: {
      options: ['outlined', 'text', 'primary', 'secondary', 'inactive'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: ComponentStory<typeof EditHomesComponent> = args => (
  <EditHomesComponent
    {...args}
    buttonText={args.buttonText ? args.buttonText : ButtonDefaultText}
    variant={args.variant ? args.variant : 'text'}
  />
);

export const EditHomes = Template.bind({});

EditHomes.args = {
  buttonText: 'Edit Homes',
  variant: 'text',
};
