import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { PageFooter as PageFooterComponent } from '#components/layouts/organisms/PageFooter/PageFooter';

export default {
  title: 'Components/Layouts/Organisms/Page Footer',
  component: PageFooterComponent,
  argTypes: {
    infoText: {
      control: { type: 'text' },
      defaultValue: '2022. All Rights Reserved Progress Residential ®',
    },
  },
} as Meta;

const Template: Story = args => (
  <PageFooterComponent {...args} infoText="2022. All Rights Reserved Progress Residential ®" />
);

export const PageFooter = Template.bind({});
