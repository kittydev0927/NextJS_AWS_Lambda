import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { ApplicantFields as ApplicantFieldsComponent } from '#components/forms/organisms/ApplicantFields/ApplicantFields';
import { ExampleContainer } from '#components/forms/organisms/OccupantFields/OccupantFields.styles';
import { exampleProfile } from '#utils/exampleProfile';

export default {
  title: 'Components/Forms/Organisms/Applicant Fields',
  component: ApplicantFieldsComponent,
} as Meta;

const Template: Story = () => (
  <ExampleContainer>
    <ApplicantFieldsComponent profile={exampleProfile} />
  </ExampleContainer>
);

export const ApplicantFields = Template.bind({});
