import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { Dropdown as DropdownComponent } from '#components/navigation/molecules/Dropdown/Dropdown';
import { authUserMenu } from '#utils/placeholderLinks';

export default {
  title: 'Components/Navigation/Molecules/Dropdown',
  component: DropdownComponent,
  parameters: {
    docs: {
      description: {
        component:
          'The `Dropdown` component takes in properties and displays a text over the button, and when clicked it presents the passed in options. Currently the component is expecting a property to be passed in as an object containing an id, text, and an array of objects each being one of the possible dropdown options for the user to select.',
      },
    },
  },
  argTypes: {
    button: {
      control: 'object',
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

const Template: ComponentStory<typeof DropdownComponent> = args => (
  <DropdownComponent
    {...args}
    button={args.button ? args.button : authUserMenu[0]}
    variant={args.variant ? args.variant : 'text'}
  />
);

export const Dropdown = Template.bind({});
