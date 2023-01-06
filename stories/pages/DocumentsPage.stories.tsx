import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { DocumentsPage as DocumentsPageComponent } from '#components/pages/DocumentsPage/DocumentsPage';
import { rows } from '#utils/sampleDocTableData';

export default {
  title: 'Pages/Documents Page',
  component: DocumentsPageComponent,
  argTypes: {
    rows: {
      control: { type: 'array' },
    },
  },
} as Meta;

const Template: ComponentStory<typeof DocumentsPageComponent> = args => (
  <DocumentsPageComponent {...args} rows={args.rows} />
);

export const DocumentsPage = Template.bind({});
DocumentsPage.args = {
  rows: rows,
};
