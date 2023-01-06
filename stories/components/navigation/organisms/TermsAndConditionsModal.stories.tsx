import type { Meta, Story } from '@storybook/react';
import React from 'react';

import TermsAndConditionsModalComponent from '#components/navigation/organisms/TermsAndConditionsModal/TermsAndConditionsModal';
import { termsAndConditions } from '#utils/sampleTermsAndConditionsData';

export default {
  title: 'Components/Navigation/Organisms/Terms And Conditions Modal',
  component: TermsAndConditionsModalComponent,
  parameters: {
    docs: {
      description: {
        component: 'Terms And Conditions Modal',
      },
    },
  },
} as Meta;

const Template: Story = args => (
  <TermsAndConditionsModalComponent
    setAcknowledged={() => console.info('form acknowledged')}
    setModalOpen={() => console.info('handle close')}
    text={termsAndConditions}
    {...args}
  />
);

export const TermsAndConditionsModal = Template.bind({});
TermsAndConditionsModal.args = {
  displayModalOnly: true,
};
