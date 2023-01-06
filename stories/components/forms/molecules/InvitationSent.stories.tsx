import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { InvitationSent as InvitationSentComponent } from '#components/forms/molecules/InvitationSent/InvitationSent';
import { largeViewport, smallViewport } from '#constants/responsiveSizes';

const sampleInviteEmailOnly = {
  firstName: 'Samantha',
  lastName: 'Jones',
  email: 'sjones@gmail.com',
  status: 'pending invitation',
};
const sampleInvitePhoneOnly = {
  firstName: 'Samantha',
  lastName: 'Jones',
  phone: '123-456-7890',
  status: 'pending invitation',
};
const sampleInviteEmailAndPhone = {
  firstName: 'Samantha',
  lastName: 'Jones',
  email: 'sjones@gmail.com',
  phone: '123-456-7890',
  status: 'pending invitation',
};

export default {
  title: 'Components/Forms/Molecules/Invitation Sent',
  component: InvitationSentComponent,
  argTypes: {
    coapplicant: {
      control: 'object',
    },
  },
  parameters: {
    chromatic: { viewports: [smallViewport, largeViewport] },
  },
} as Meta;

const Template: ComponentStory<typeof InvitationSentComponent> = args => <InvitationSentComponent {...args} />;

export const InvitationSentEmailOnly = Template.bind({});
InvitationSentEmailOnly.args = {
  coapplicant: sampleInviteEmailOnly,
};

export const InvitationSentPhoneOnly = Template.bind({});
InvitationSentPhoneOnly.args = {
  coapplicant: sampleInvitePhoneOnly,
};

export const InvitationSentEmailAndPhone = Template.bind({});
InvitationSentEmailAndPhone.args = {
  coapplicant: sampleInviteEmailAndPhone,
};
