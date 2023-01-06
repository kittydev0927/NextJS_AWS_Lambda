import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { OccupantFields as OccupantFieldsComponent } from '#components/forms/organisms/OccupantFields/OccupantFields';
import { ExampleContainer } from '#components/forms/organisms/OccupantFields/OccupantFields.styles';

export default {
  title: 'Components/Forms/Organisms/Occupant Fields',
  component: OccupantFieldsComponent,
} as Meta;

const Template: Story = () => (
  <ExampleContainer>
    <OccupantFieldsComponent />
  </ExampleContainer>
);

export const OccupantFields = Template.bind({});
