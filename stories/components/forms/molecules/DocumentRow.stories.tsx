import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { DocumentRow as DocumentRowComponent } from '#components/layouts/molecules/DocumentRow/DocumentRow';
import type { DocumentRowProps } from '#components/layouts/molecules/DocumentRow/DocumentRow.types';

export default {
  title: 'Components/Layouts/Molecules/Document Row',
  component: DocumentRowComponent,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
    argTypes: {},
  },
} as Meta;

const Template: Story = args => <DocumentRowComponent {...(args as DocumentRowProps)} />;

export const DocumentRow = Template.bind({});

DocumentRow.args = {
  row: {
    document: 'Pet information',
    status: 'Complete',
    type: 'PDF',
    size: '125 KB',
    published: {
      name: 'Samantha Jones',
      date: '09/01/21',
    },
    category: 'Pets',
    download: '#',
    delete: 'delete',
  },
};
