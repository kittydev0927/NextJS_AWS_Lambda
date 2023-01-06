import type { Meta, Story } from '@storybook/react';

import type { IApplicationItem } from '#api/aem/tipsSidebarContentQuery/tipsSidebarContentQuery.types';
import { TipsInnerContent } from '#components/layouts/molecules/TipsSideBar/InnerContent/TipsInnerContent';
import { TipsSideBarMobile as TipsSideBarMobileComponent } from '#components/layouts/molecules/TipsSideBar/TipsSideBarMobile/TipsSideBarMobile';
import { appTips as appTipsSample } from '#utils/sampleTipsSidebar';
export default {
  title: 'Components/Layouts/Molecules/Tips Side Bar Mobile',
  component: TipsSideBarMobileComponent,
} as Meta;

const Template: Story = () => {
  return (
    <TipsSideBarMobileComponent>
      <TipsInnerContent appTips={appTipsSample as IApplicationItem} />
    </TipsSideBarMobileComponent>
  );
};

export const TipsSideBarMobile = Template.bind({});
