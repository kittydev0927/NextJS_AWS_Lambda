import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import type IApplicant from '#auth/IApplicant';
import { ApplicantSummaryBox as ApplicantSummaryBoxComponent } from '#components/forms/molecules/ApplicantSummaryBox/ApplicantSummaryBox';

const pendingApplicant: IApplicant = {
  applicationId: 'applicationId',
  applicantId: 'applicantID 4',
  firstName: 'Daisy',
  lastName: 'Quake',
  emailAddress: 'sjones@gmail.com',
  state: 'pending',
  resendAttempts: 3,
};

const completeApplicant: IApplicant = {
  applicationId: 'applicationId',
  applicantId: 'applicantID2',
  firstName: 'Melinda',
  lastName: 'May',
  emailAddress: 'sjones@gmail.com',
  state: 'complete',
  resendAttempts: 3,
};

const progressApplicant: IApplicant = {
  applicationId: 'applicationId',
  applicantId: 'applicantID3',
  firstName: 'Phil',
  lastName: 'Coulson',
  emailAddress: 'sjones@gmail.com',
  state: 'in progress',
  resendAttempts: 3,
};

const acceptedApplicant: IApplicant = {
  applicationId: 'applicationId',
  applicantId: 'applicantID',
  firstName: 'Grant',
  lastName: 'Ward',
  emailAddress: 'mparker@gmail.com',
  state: 'accepted',
  resendAttempts: 3,
};

const StoryMeta: ComponentMeta<typeof ApplicantSummaryBoxComponent> = {
  title: 'Components/Forms/Molecules/Applicant Summary Box',
  component: ApplicantSummaryBoxComponent,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Applicant Summary Box that displays current applicant state',
      },
    },
  },
};

export default StoryMeta;

const Template: ComponentStory<typeof ApplicantSummaryBoxComponent> = args => (
  <ApplicantSummaryBoxComponent {...args} />
);

export const ApplicantSummaryBoxPending = Template.bind({});
ApplicantSummaryBoxPending.args = {
  applicant: pendingApplicant,
};

export const ApplicantSummaryBoxAccepted = Template.bind({});
ApplicantSummaryBoxAccepted.args = {
  applicant: acceptedApplicant,
};

export const ApplicantSummaryBoxComplete = Template.bind({});
ApplicantSummaryBoxComplete.args = {
  applicant: completeApplicant,
};

export const ApplicantSummaryBoxInProgress = Template.bind({});
ApplicantSummaryBoxInProgress.args = {
  applicant: progressApplicant,
};
