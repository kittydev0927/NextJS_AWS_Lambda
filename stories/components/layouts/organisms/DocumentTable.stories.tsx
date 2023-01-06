import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { DocumentTable as DocumentTableComponent } from '#components/layouts/organisms/DocumentTable/DocumentTable';
import { rows } from '#utils/sampleDocTableData';

export default {
  title: 'Components/Layouts/Organisms/Document Table',
  component: DocumentTableComponent,
  argTypes: {
    rows: {
      control: { type: 'array' },
    },
  },
} as Meta;

const Template: ComponentStory<typeof DocumentTableComponent> = args => (
  <DocumentTableComponent {...args} rows={args.rows} />
);

export const DocumentTable = Template.bind({});
DocumentTable.args = {
  rows: rows,
};
