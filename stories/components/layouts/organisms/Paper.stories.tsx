import { ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import MUICard from '@mui/material/Card'; // <-- placeholder until Card component is added to the cpp ui library
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { Paper as PaperComponent } from '#components/layouts/organisms/Paper/Paper';
import { theme } from '#styles/styles';

export default {
  title: 'Components/Layouts/Organisms/Paper',
  component: PaperComponent,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'MUI-based Paper component that features a conditional Paper wrapper to better match visual design as well as plain and gradient background theme options.',
      },
    },
  },
  argTypes: {
    innerVariant: {
      options: ['elevation', 'outlined'],
      control: 'select',
    },
    outerVariant: {
      options: ['elevation', 'outlined'],
      control: 'select',
    },
    outerElevation: {
      control: 'number',
      description: 'Max value of 25',
    },
    innerElevation: {
      control: 'number',
      description: 'Max value of 25',
    },
    innerSquare: {
      control: 'boolean',
    },
    outerSquare: {
      control: 'boolean',
    },
    showOuterPaper: {
      control: 'boolean',
    },
    innerSx: {
      description: '`sx` MUI prop for adding one-off styles',
    },
    outerSx: {
      description: '`sx` MUI prop for adding one-off styles',
    },
  },
} as Meta;

const Template: Story = args => (
  <PaperComponent {...args}>
    <ThemeProvider theme={theme}>
      <Box>
        <Typography variant="h2" align="center">
          Love Where You Live
        </Typography>
        <Typography variant="body1">
          Home is where the heart is—which is why we consider the selection process equally as important as making your
          entire experience seamless. Whether your goals are more space for kids to play, a large backyard for your even
          larger dog, living in an HOA community, or all of the above, Progress Residential helps match you with your
          ideal home. Welcome home.
        </Typography>
      </Box>
    </ThemeProvider>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <MUICard variant="outlined" sx={{ p: 5, m: 2, background: '#ffffff' }}>
          <Typography>Card 1</Typography>
        </MUICard>
      </Grid>
      <Grid item xs={12} sm={4}>
        <MUICard variant="outlined" sx={{ p: 5, m: 2, background: '#ffffff' }}>
          <Typography>Card 2</Typography>
        </MUICard>
      </Grid>
      <Grid item xs={12} sm={4}>
        <MUICard variant="outlined" sx={{ p: 5, m: 2, background: '#ffffff' }}>
          <Typography>Card 3</Typography>
        </MUICard>
      </Grid>
    </Grid>
  </PaperComponent>
);

export const Paper = Template.bind({});
Paper.args = {
  innerElevation: 0,
  outerElevation: 20,
  showOuterPaper: true,
  innerSquare: true,
  innerTheme: 'gradient',
};
