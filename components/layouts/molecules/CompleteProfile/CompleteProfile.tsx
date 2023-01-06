import { Grid, useMediaQuery } from '@mui/material';
import React from 'react';

import { useProfile } from '#auth/UseProfile';
import { Link } from '#components/layouts/atoms/Link/Link';
import { Typography } from '#components/layouts/atoms/Typography/Typography';
import { theme } from '#styles/styles';

import {
  StyledCityCon,
  StyledCityGrid,
  StyledCityTypography,
  StyledCongTypography,
  StyledDiv,
  StyledEditButton,
  StyledHomesButton,
  StyledHomesEditDiv,
  StyledMoreTypography,
  StyledProfileDiv,
  StyledProfilePrintDiv,
} from './CompleteProfile.styles';

export const CompleteProfile: React.FC = () => {
  const largeBreakpoint = useMediaQuery(theme.breakpoints.only('lg'));
  const recommendedHomes = largeBreakpoint ? 'View Recommended Homes' : 'Recommended Homes';
  const profile = useProfile();
  const cities = Array.from(profile?.preferredLocations ?? []);

  // Some cities get special treatment.
  const [firstCity, secondCity, ...otherCities] = cities;
  const numberMore = otherCities.length;

  const availableDt = profile?.moveInDate?.toLocaleDateString();
  const numberOfBedrooms = Array.from(profile?.desiredBedrooms ?? [])
    .map(n => `${n.toLocaleString()}+`)
    .join(', ');

  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  const { maxRent } = profile ?? {};
  const monthlyAmount = maxRent ? currency.format(maxRent) : '';

  return (
    <StyledDiv data-testid="complete-profile">
      <StyledProfileDiv>
        <StyledProfilePrintDiv>
          <Typography variant="h4">Your Profile</Typography>
        </StyledProfilePrintDiv>
        <StyledCongTypography>
          Congratulations&mdash;you&apos;re one step closer to finding your perfect rental home. We will recommend homes
          that match your needs.
        </StyledCongTypography>
      </StyledProfileDiv>
      <StyledCityCon container>
        <Grid item xs={3}>
          <StyledCityTypography>{firstCity}</StyledCityTypography>
        </Grid>
        <StyledCityGrid item xs={1}>
          <StyledCityTypography>|</StyledCityTypography>
        </StyledCityGrid>
        <StyledCityGrid item xs={3}>
          <StyledCityTypography>{secondCity}</StyledCityTypography>
        </StyledCityGrid>
        <StyledCityGrid item xs={1}>
          <StyledCityTypography>|</StyledCityTypography>
        </StyledCityGrid>
        <StyledCityGrid item xs={3}>
          <Link color="primary" underline="none" variant="body1" href="#">
            <StyledMoreTypography>+{numberMore} More</StyledMoreTypography>
          </Link>
        </StyledCityGrid>
        <StyledCityGrid item xs={1}>
          &nbsp;
        </StyledCityGrid>
        <Grid item xs={12}>
          <StyledCityTypography>Available {availableDt}</StyledCityTypography>
        </Grid>
        <Grid item xs={12}>
          <StyledCityTypography>{numberOfBedrooms} Bedrooms</StyledCityTypography>
        </Grid>
        <Grid item xs={12}>
          <StyledCityTypography>Up to {monthlyAmount}/Mo</StyledCityTypography>
        </Grid>
      </StyledCityCon>
      <StyledHomesEditDiv>
        <StyledHomesButton variant="primary" fullWidth LinkComponent="a" href="/recommended">
          {recommendedHomes}
        </StyledHomesButton>
        <StyledEditButton variant="secondary" fullWidth LinkComponent="a" href="/settings">
          Edit Profile
        </StyledEditButton>
      </StyledHomesEditDiv>
    </StyledDiv>
  );
};
