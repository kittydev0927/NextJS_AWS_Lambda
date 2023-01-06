import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import type { IApplicationItem as IPageContentItem } from '#api/aem/applicationContentFragmentQuery/applicationContentFragmentQuery.types';
import { InviteApplicantsModal as InviteApplicantsModalComponent } from '#components/navigation/organisms/InviteApplicantsModal/InviteApplicantsModal';
import { applicantsData } from '#utils/sampleApplicantData';

export default {
  title: 'Components/Navigation/Organisms/Invite Applicants Modal',
  component: InviteApplicantsModalComponent,
  parameters: {
    docs: {
      description: {
        component: 'Invite Applicants Modal',
      },
    },
  },
} as Meta;

const Template: ComponentStory<typeof InviteApplicantsModalComponent> = args => (
  <InviteApplicantsModalComponent {...args} />
);

export const InviteApplicantsModal = Template.bind({});
InviteApplicantsModal.args = {
  pageContent: applicantsData as unknown as IPageContentItem,
};
