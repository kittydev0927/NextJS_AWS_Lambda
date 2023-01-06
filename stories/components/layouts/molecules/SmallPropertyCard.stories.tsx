import type { Meta, Story } from '@storybook/react';
import React from 'react';

import SmallPropertyCardComponent from '#components/layouts/molecules/SmallPropertyCard/SmallPropertyCard';
import { sampleProperty } from '#utils/samplePropertyData';

export default {
  title: 'Components/Layouts/Molecules/Small Property Card',
  component: SmallPropertyCardComponent,
  parameters: {
    layout: 'padded',
  },
} as Meta;

const Template: Story = args => (
  <SmallPropertyCardComponent header="Application:" property={sampleProperty} {...args} />
);

export const SmallPropertyCard = Template.bind({});
