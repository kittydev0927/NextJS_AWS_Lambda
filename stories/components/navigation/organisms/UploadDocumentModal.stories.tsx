import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { UploadDocumentModal as UploadDocumentModaComponent } from '#components/navigation/organisms/UploadDocumentModal/UploadDocumentModal';

export default {
  title: 'Components/Navigation/Organisms/Upload Document Modal',
  component: UploadDocumentModaComponent,
  parameters: {
    docs: {
      description: {
        component: 'Upload Document Modal',
      },
    },
  },
} as Meta;

const Template: Story = args => <UploadDocumentModaComponent document={new File([], 'Example.jpg', {})} {...args} />;

export const UploadDocumentModal = Template.bind({});
UploadDocumentModal.args = {
  openModal: true,
};
