import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { usePrivacyPolicyCheckbox } from '#components/forms/atoms/profile/usePrivacyPolicyCheckbox';
import README from '#components/forms/atoms/profile/usePrivacyPolicyCheckbox.mdx';
import { sampleRegFormData } from '#utils/sampleRegistrionFormData';

type PrivacyPolicyComponent = ReturnType<typeof usePrivacyPolicyCheckbox>[0];

const StoryMeta: ComponentMeta<PrivacyPolicyComponent> = {
  parameters: {
    docs: { page: README, source: { type: 'code' } },
    layout: 'centered',
  },
  title: 'Components/Forms/Atoms/profile/Privacy Policy Checkbox',
};

export default StoryMeta;

const Template: ComponentStory<PrivacyPolicyComponent> = () => {
  const { tcText } = sampleRegFormData;

  const [PrivacyPolicy] = usePrivacyPolicyCheckbox(tcText);
  return <PrivacyPolicy />;
};

export const PrivacyPolicyCheckbox = Template.bind({});
