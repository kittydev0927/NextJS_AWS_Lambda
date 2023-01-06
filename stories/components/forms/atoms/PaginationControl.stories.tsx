import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { PaginationControl as PaginationControlComponent } from '#components/forms/atoms/PaginationControl/PaginationControl';

export default {
  title: 'Components/Forms/Atoms/Pagination Control',
  component: PaginationControlComponent,
  argTypes: {
    pageCount: {
      control: { type: 'number' },
    },
  },
} as Meta;

const onClick = () => undefined;

const Template: Story = args => {
  return <PaginationControlComponent onClickNext={onClick} onClickPrev={onClick} {...args} />;
};

export const PaginationControl = Template.bind({});
