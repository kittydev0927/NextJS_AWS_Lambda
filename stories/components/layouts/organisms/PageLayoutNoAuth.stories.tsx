import type { Meta, Story } from '@storybook/react';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { PageLayoutNoAuth as PageLayoutNoAuthComponent } from '#components/layouts/organisms/PageLayoutNoAuth/PageLayoutNoAuth';
import { theme } from '#styles/styles';
import { footerLinks } from '#utils/placeholderLinks';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';

export default {
  title: 'Components/Layouts/Organisms/Page Layout/Page Layout No Auth',
  component: PageLayoutNoAuthComponent,
} as Meta;

const Template: Story = () => (
  <PageLayoutNoAuthComponent
    theme={theme}
    footerLinks={footerLinks}
    userAuthContent={sampleUserAuthContent as unknown as IUserAuthData}
  >
    {'Inner Content'}
  </PageLayoutNoAuthComponent>
);

export const PageLayoutNoAuth = Template.bind({});
