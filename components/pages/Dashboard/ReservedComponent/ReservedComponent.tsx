import { Grid } from '@mui/material';
import React from 'react';

import { Button } from '#components/forms/atoms/Button/Button';
import { Divider } from '#components/layouts/atoms/Divider/Divider';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

import {
  StyledRequestButtonsGrid,
  StyledRequestGrid,
  StyledRequestInformationGrid,
  StyledReservedText,
} from './ReservedComponent.styles';
import type { IReservedComponent } from './ReservedComponent.types';

export const ReservedComponent: React.FC<IReservedComponent> = ({ handleRequestChange, handleConfirm }) => {
  return (
    <>
      <StyledRequestInformationGrid container columns={16}>
        <Grid item xs={16} md={8}>
          <StyledReservedText variant="h1">
            The home has been reserved for you. Now let&apos;s confirm your lease start date.
            <br />
            <br />
          </StyledReservedText>
          <Typography>
            Is the date shown the date you&apos;d like the lease to start? If not, you can request to change it.
          </Typography>
        </Grid>
      </StyledRequestInformationGrid>
      <Divider />
      <StyledRequestGrid container justifyContent="space-between">
        <Grid container item xs={12} md={6}>
          <Typography>Please note: Final payment must be made 72 hours prior to move in.</Typography>
        </Grid>
        <StyledRequestButtonsGrid container item xs={12} md={6} justifyContent="flex-end">
          <Button data-testId="request-change-button" variant="text" onClick={handleRequestChange}>
            Request a change
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirm 05.10.22
          </Button>
        </StyledRequestButtonsGrid>
      </StyledRequestGrid>
    </>
  );
};
