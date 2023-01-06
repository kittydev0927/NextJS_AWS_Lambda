import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { DocumentUploadBox as DocumentUploadBoxComponent } from '#components/layouts/organisms/DocumentUploadBox/DocumentUploadBox';

export default {
  title: 'Components/Layouts/Organisms/Document Upload Box',
  component: DocumentUploadBoxComponent,
  argTypes: {
    linkText: {
      control: { type: 'string' },
    },
    onChange: {
      control: { type: 'object' },
    },
  },
} as Meta;

const Template: ComponentStory<typeof DocumentUploadBoxComponent> = args => <DocumentUploadBoxComponent {...args} />;

export const DocumentUploadBox = Template.bind({});
DocumentUploadBox.args = {
  linkText: 'Upload Documents',
};
