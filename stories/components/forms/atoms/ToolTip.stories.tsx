import type { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { ToolTip as ToolTipComponent } from '#components/forms/atoms/ToolTip/ToolTip';

export default {
  title: 'Components/Forms/Atoms/Tool Tip',
  component: ToolTipComponent,
  parameters: {
    docs: {
      description: {
        component: 'Tool Tip to be used for Info & Tips through out application',
      },
    },
  },
} as Meta;

const Template: Story = args => {
  const [open, setOpen] = useState(false);

  return (
    <ToolTipComponent
      {...args}
      open={open}
      setOpen={setOpen}
      content={[
        {
          value: 'Progress Residential accepts Housing Choice vouchers. For more information on Housing Choice, please',
          href: '',
          linkText: 'Click Here.',
        },
      ]}
    />
  );
};

export const ToolTip = Template.bind({});
