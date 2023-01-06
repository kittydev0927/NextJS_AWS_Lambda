import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { FileExplorerLink as FileExplorerLinkComponent } from '#components/forms/molecules/FileExplorerLink/FileExplorerLink';

export default {
  title: 'Components/Forms/Molecules/File Explorer Link',
  component: FileExplorerLinkComponent,
  argTypes: {
    linkText: {
      control: 'string',
      defaultValue: 'Upload Letter Here',
    },
  },
} as Meta;

const Template: ComponentStory<typeof FileExplorerLinkComponent> = args => <FileExplorerLinkComponent {...args} />;

export const FileExplorerLink = Template.bind({});
