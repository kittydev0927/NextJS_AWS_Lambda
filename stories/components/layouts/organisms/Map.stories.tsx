import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Map as MapComponent } from '#components/layouts/organisms/Map/Map';
import data from '#utils/sampleMapData.json';

const StoryMeta: ComponentMeta<typeof MapComponent> = {
  title: 'Components/Layouts/Organisms/Map',
  component: MapComponent,
  argTypes: {
    propertiesData: {
      control: 'object',
      defaultValue: data,
    },
  },
};

export default StoryMeta;

const Template: ComponentStory<typeof MapComponent> = args => <MapComponent {...args} />;

export const Map = Template.bind({});
