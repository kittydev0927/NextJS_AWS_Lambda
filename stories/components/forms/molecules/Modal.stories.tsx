import { Typography } from '@mui/material';
import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { Modal as ModalComponent } from '#components/forms/molecules/Modal/Modal';

export default {
  title: 'Components/Forms/Molecules/Modal',
  component: ModalComponent,
  parameters: {
    docs: {
      description: {
        component:
          'Modal component with overlay using the MUI modal component as a basis. This modal has the option to be displayed with or without a button to open it. It also has an option to display a close button within the modal.',
      },
    },
  },
  argTypes: {
    displayCloseButton: {
      control: { type: 'boolean' },
      description: 'Option to display the close button in the modal.',
    },
  },
} as Meta;

const Template: Story = args => (
  <ModalComponent {...args}>
    <Typography variant={'h2'} sx={{ paddingBottom: '10px' }}>
      This is a modal
    </Typography>
    <Typography variant={'h3'} sx={{ paddingBottom: '20px' }}>
      modal
    </Typography>
    <Typography variant={'h4'} sx={{ paddingBottom: '10px' }}>
      (adj.)
    </Typography>
    <Typography variant={'body1'} sx={{ paddingBottom: '10px' }}>
      {'pertaining to or affected by a mode,'} 1560s, originally a term in logic, from French modal and directly from
      Medieval Latin modalis {'of or pertaining to a mode,'} from Latin modus
      {'measure, extent, quantity; proper measure, rhythm, song; a way, manner, fashion, style'} (in Late Latin also
      {'mood'} in grammar and logic), from PIE root *med- {'take appropriate measures.'} Musical sense is from 1590s; In
      grammar from 1798.
    </Typography>

    <Typography variant={'h4'} sx={{ paddingBottom: '10px' }}>
      (noun)
    </Typography>
    <Typography variant={'body1'}>
      In user interface design for computer applications, a modal window is a graphical control element subordinate to
      an application&apos;s main window.
    </Typography>
  </ModalComponent>
);

export const Modal = Template.bind({});

Modal.args = {
  disabled: false,
  buttonContent: 'Open Modal',
};
