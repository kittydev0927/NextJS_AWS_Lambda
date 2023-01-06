import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { PageLayout as PageLayoutComponent } from '#components/layouts/organisms/PageLayout/PageLayout';
import { theme } from '#styles/styles';
import { footerLinks } from '#utils/placeholderLinks';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

export default {
  title: 'Components/Layouts/Organisms/Page Layout/Page Layout Main',
  component: PageLayoutComponent,
} as Meta;

const Template: Story = () => (
  <PageLayoutComponent
    theme={theme}
    footerLinks={footerLinks}
    userAuthContent={sampleUserAuthContent as unknown as IUserAuthData}
  >
    {'Inner Content'}
  </PageLayoutComponent>
);

export const PageLayoutMain = Template.bind({});
