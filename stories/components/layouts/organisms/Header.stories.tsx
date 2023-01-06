import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { Header as HeaderComponent } from '#components/layouts/organisms/Header/Header';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

export default {
  title: 'Components/Layouts/Organisms/Header',
  component: HeaderComponent,
  parameters: {
    docs: {
      description: {
        component: `**NOTE**: To view authenticated Header, please log in using Okta test account credentials.`,
      },
    },
  },
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['outlined', 'text', 'primary', 'secondary', 'inactive'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: ComponentStory<typeof HeaderComponent> = args => (
  <HeaderComponent
    {...args}
    variant={args.variant ? args.variant : 'text'}
    placeholder={args.placeholder ? args.placeholder : 'Search'}
    userAuthContent={sampleUserAuthContent as unknown as IUserAuthData}
  />
);

export const HeaderUserAuthenticated = Template.bind({});

export const HeaderNotAuthenticated = Template.bind({});
HeaderNotAuthenticated.args = {
  storybookNotAuthenticatedView: true,
};
