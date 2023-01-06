import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { SharedComponent as SharedComponentStory } from '#components/layouts/molecules/SharedComponent/SharedComponent';

const testData = {
  id: 'text-a647cec03a',
  text: '<p>Hello World! Updated content!</p>\r\n',
  richText: true,
  type: 'wknd-spa-react/components/text',
  dataLayer: {},
};

export default {
  title: 'Components/Layouts/Molecules/Shared Component',
  component: SharedComponentStory,
  argTypes: {},
} as unknown as Meta;

const Template: Story = args => <SharedComponentStory data={testData} {...args} />;

export const SharedComponent = Template.bind({});
