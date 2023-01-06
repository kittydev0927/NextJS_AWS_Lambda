import Grid from '@mui/material/Grid';
import parse from 'html-react-parser';
import React from 'react';

import { OktaWidget } from '#components/forms/molecules/OktaWidget/OktaWidget';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

import { StyledFormContainer, StyledTypography } from './SignInForm.styles';
import type SignInFormProps from './SignInForm.types';

export const SignInForm: React.FC<SignInFormProps> = ({
  children,
  onSuccess,
  onError,
  flow,
  userAuthContent,
  ...props
}) => {
  const bodyText = userAuthContent?.signInContent?.items[0].cfContent?.json[0]?.content[0]?.value;
  return (
    <StyledFormContainer {...props} data-testid="form-container">
      {flow === 'login' && (
        <Grid container direction="row" alignItems="center" justifyContent="center">
          <Grid container item direction="column" alignItems="start" spacing={2} xs={12}>
            <Grid item xs={12}>
              <Typography textAlign="left" textVariant="h6">
                {userAuthContent.signInContent?.items[0].cfHeading?.json[0]?.content[0]?.value}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <StyledTypography>{parse(`${bodyText}`)}</StyledTypography>
            </Grid>
          </Grid>
        </Grid>
      )}
      {flow === 'resetPassword' && (
        <Grid container direction="row" alignItems="center" justifyContent="center">
          <Grid container item direction="column" alignItems="center" spacing={2} xs={12}>
            <Grid item xs={12}>
              <Typography textVariant="h6">Reset your password</Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
      <OktaWidget onSuccess={onSuccess} onError={onError} flow={flow} />
      {children}
    </StyledFormContainer>
  );
};
