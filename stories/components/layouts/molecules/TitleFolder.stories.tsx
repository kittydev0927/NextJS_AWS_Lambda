import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TitleFolder as TitleFolderComponent } from '#components/layouts/molecules/TitleFolder/TitleFolder';

const StoryMeta: ComponentMeta<typeof TitleFolderComponent> = {
  title: 'Components/Layouts/Molecules/Title Folder',
  component: TitleFolderComponent,
  parameters: {
    docs: {
      description: {
        component:
          'The component contains two types of title and right button, you can provide children after the threshold ',
      },
    },
  },
  argTypes: {
    rightButton: {
      name: 'object',
      value: {
        name: 'string',
        href: {
          required: true,
          name: 'string',
        },
      },
    },
  },
};

export default StoryMeta;

const Template: ComponentStory<typeof TitleFolderComponent> = args => (
  <TitleFolderComponent {...args}>{args.children}</TitleFolderComponent>
);

export const TitleFolder = Template.bind({});

TitleFolder.args = {
  title: 'Test title',
  children: 'content inside the component',
  rightButton: {
    name: 'edit',
    href: '/edit',
  },
};
