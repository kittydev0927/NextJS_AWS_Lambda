import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { ApplicationPageWrapper as ApplicationPageWrapperComponent } from '#components/forms/molecules/ApplicationPageWrapper/ApplicationPageWrapper';
// import { primaryApplicantSampleSteps } from '#utils/sampleFormData';

const EmptyMainCard: React.FC = () => {
  return <div></div>;
};

export default {
  title: 'Components/Forms/Molecules/Application Page Wrapper',
  component: ApplicationPageWrapperComponent,
  parameters: {
    docs: {
      description: {
        component: 'Application Page Wrapper which is to be used when building steps 1-9 of the application process',
      },
    },
  },
  argTypes: {
    step: {
      control: 'number',
      defaultValue: 0,
    },
    primaryApplicant: {
      defaultValue: true,
      control: 'boolean',
    },
  },
} as Meta;

const Template: ComponentStory<typeof ApplicationPageWrapperComponent> = args => (
  <ApplicationPageWrapperComponent MainCard={EmptyMainCard} {...args} />
);

export const ApplicationPageWrapper = Template.bind({});
