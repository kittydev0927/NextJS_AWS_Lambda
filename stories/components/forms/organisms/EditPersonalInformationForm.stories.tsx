import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { EditPersonalInformationForm as EditPersonalInformationFormComponent } from '#components/forms/organisms/AccountSettingsForms/EditPersonalInformationForm/EditPersonalInformationForm';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

const StoryMeta: ComponentMeta<typeof EditPersonalInformationFormComponent> = {
  title: 'Components/Forms/Organisms/Edit Personal Information Form',
  component: EditPersonalInformationFormComponent,
  parameters: {
    docs: {
      description: {
        component: 'Personal information form of Account Settings component',
      },
    },
  },
  argTypes: {},
};

export default StoryMeta;

const Template: ComponentStory<typeof EditPersonalInformationFormComponent> = () => (
  <EditPersonalInformationFormComponent userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />
);

export const EditPersonalInformationForm = Template.bind({});
