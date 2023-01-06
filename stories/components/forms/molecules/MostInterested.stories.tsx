import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { MostInterestedSection } from '#components/forms/molecules/PBSections/MostInterestedComponent/MostInterestedSection';
import { sampleMostInterestedData } from '#utils/sampleMostInterestedData';

export default {
  title: 'Components/Forms/Molecules/Most Interested',
  component: MostInterestedSection,
  argTypes: {
    options: {
      defaultValue: sampleMostInterestedData,
      control: 'object',
    },
  },
} as Meta;

const Template: Story = args => <MostInterestedSection options={sampleMostInterestedData} {...args} />;

export const MostInterested = Template.bind({});
