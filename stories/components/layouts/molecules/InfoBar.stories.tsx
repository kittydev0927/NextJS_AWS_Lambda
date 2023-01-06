import type { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { InfoBar as InfoBarComponent } from '#components/layouts/molecules/InfoBar/InfoBar';

export default {
  title: 'Components/Layouts/Molecules/Info Bar',
  component: InfoBarComponent,
  parameters: {
    docs: {
      description:
        '`InfoBarComponent` is an informational element with a possible link action. The link action is currently set to alert when clicked.',
    },
    argTypes: {
      linkText: { control: { type: 'string' } },
      showAccountIcon: {
        options: [true, false],
        control: { type: 'boolean' },
        description:
          'The `showAccountIcon` prop is used to show/hide account icon. Set true to show account icon. Default is true.',
      },
      onClickLink: { action: 'clicked' },
      infoText: { control: { type: 'string' } },
    },
  },
} as Meta;

const Template: ComponentStory<typeof InfoBarComponent> = args => (
  <InfoBarComponent
    infoText={args.infoText}
    linkText={args.linkText}
    onClickLink={args.onClickLink}
    showAccountIcon={args.showAccountIcon}
    {...args}
  />
);

export const InfoBar = Template.bind({});

InfoBar.args = {
  infoText: 'Upcoming Tours',
  linkText: 'View All',
  onClickLink: () => alert(),
  showAccountIcon: true,
};
