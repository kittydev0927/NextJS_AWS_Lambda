import { Grid } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';

import { Button } from '#components/forms/atoms/Button/Button';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

import {
  StyledActionGrid,
  StyledButtons,
  StyledGridInfo,
  StyledImg,
  StyledUpcomingTourImg,
  StyledUpcomingTourWrapper,
} from './UpcomingTour.styles';
import type { UpcomingTourProps } from './UpcomingTour.types';

export const UpcomingTour: React.FC<UpcomingTourProps> = ({ date, address, image }) => (
  <StyledUpcomingTourWrapper variant="outlined">
    <Grid container spacing={2} padding={1}>
      <StyledGridInfo item xs={12} sm={8} container className="center">
        <Grid item>
          <StyledUpcomingTourImg>
            <StyledImg>
              <Image alt={image.alt} src={image.src} layout="fill" objectFit="cover" />
            </StyledImg>
          </StyledUpcomingTourImg>
        </Grid>
        <Grid item xs container>
          <Grid item sm={6} xs={12} className="info-date">
            <Typography>
              <strong>When:</strong> {date.date}
            </Typography>
            <Typography>{date.time}</Typography>
          </Grid>
          <Grid item sm={6} xs={12} className="info-location">
            <Typography className="address">
              <strong>Where:</strong> {address.city}
            </Typography>
            <Typography className="address">{address.state}</Typography>
          </Grid>
        </Grid>
      </StyledGridInfo>
      <Grid item xs={12} sm={4} container className="center action-con">
        <StyledActionGrid item xs>
          <StyledButtons className="action">
            <Button href="" className="action-item">
              Cancel
            </Button>
            <strong className="action-item">| </strong>
            <Button href="" className="action-item">
              Modify
            </Button>
            <strong className="action-item">| </strong>
            <Button href="" className="action-item">
              View Home Details
            </Button>
          </StyledButtons>
        </StyledActionGrid>
      </Grid>
    </Grid>
  </StyledUpcomingTourWrapper>
);
