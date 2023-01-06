import type { ComponentStory, Meta } from '@storybook/react';
import React, { useState } from 'react';

import { Autocomplete as AutocompleteComponent } from '#components/forms/atoms/Autocomplete/Autocomplete';
import type { AutocompleteProps } from '#components/forms/atoms/Autocomplete/Autocomplete.types';

export default {
  title: 'Components/Forms/Atoms/Autocomplete',
  component: AutocompleteComponent,
  argTypes: {
    loading: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
} as Meta;

const Template: ComponentStory<typeof AutocompleteComponent> = args => {
  const [value, setValue] = useState<string[]>([]);

  const onChange: AutocompleteProps<unknown>['onChange'] = (_e, newValue) => {
    if (Array.isArray(newValue)) {
      setValue(newValue);
    } else if (typeof newValue === 'string') {
      setValue([newValue]);
    } else {
      setValue([]);
    }
  };

  return <AutocompleteComponent {...args} onChange={onChange} value={value} />;
};

export const Autocomplete = Template.bind({});

Autocomplete.args = {
  loading: false,
  placeholder: 'Add city, zip code or neighborhood',
  options: [
    'Ankh-Morpork, Discworld',
    'Bas-Tyra, Midkemia',
    'Crydee, Midkemia',
    'Darkmoor, Midkemia',
    'Dol Amroth, Gondor',
    'Edoras, Rohan',
    'Elvandar, Midkemia',
    'Krondor, Midkemia',
    'LaMut, Midkemia',
    'Lancre, Discworld',
    "Malac's Cross, Midkemia",
    'Minas Anor, Gondor',
    'Minas Ithil, Gondor',
    'Minas Tirith, Gondor',
    'Osgiliath, Gondor',
    'Pelargir, Gondor',
    'Pseudopolis, Discworld',
    'Rillanon, Midkemia',
    'Sethanon, Midkemia',
    'The Chalk, Discworld',
    'The Hornburg, Rohan',
    'Tyr-Sog, Midkemia',
    'Überwald, Discworld',
    'Underharrow, Rohan',
    'Upbourn, Rohan',
  ],
};
