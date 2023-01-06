import { CircularProgress, FormControl, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

import { OktaAuthError } from '#auth/OktaAuthError';
import { UserContext } from '#auth/UserContext';
import { useSuccessRegistration } from '#auth/UseSuccessRegistration';
import { Button } from '#components/forms/atoms/Button/Button';
import { ControlledTextField } from '#components/forms/atoms/profile/ControlledTextField';
import { useControlledCheckbox } from '#components/forms/atoms/profile/useControlledCheckbox';
import { useControlledSelect } from '#components/forms/atoms/profile/useControlledSelect';
import { usePrivacyPolicyCheckbox } from '#components/forms/atoms/profile/usePrivacyPolicyCheckbox';
import { Divider } from '#components/layouts/atoms/Divider/Divider';
import { Illustration } from '#components/layouts/atoms/Illustration/Illustration';
import { Typography } from '#components/layouts/atoms/Typography/Typography';
import { theme } from '#styles/styles';

import {
  StyledCheckbox,
  StyledCheckboxCon,
  StyledDivider,
  StyledInterestAreaContainer,
  StyledInterestHeaderTypography,
  StyledProgress,
  StyledRegistrationFormContainer,
  StyledTextFieldsCon,
  StyledTypography,
  StyledValidationError,
} from './RegistrationForm.styles';
import type { RegistrationFormProps } from './RegistrationForm.types';

export const RegistrationForm: React.FC<Omit<RegistrationFormProps, 'signIn'>> = ({
  onSuccess,
  showIllustration = false,
  setEmailAddress,
  userAuthContent,
}) => {
  const headerTitle = userAuthContent.headerContent.items[0].cfHeading.json[0].content[0].value;
  const headerText = userAuthContent.headerContent.items[0].cfContent.json[0].content[0].value;
  const tcText = userAuthContent.tcContent.items[0].cfContent.json[0].content[0].value || '';
  const dataOptInConsent = userAuthContent.consentContent.items[0].cfContent.json[0].content[0].value;

  const router = useRouter();
  const portalUser = useContext(UserContext);
  const handleSuccess = useSuccessRegistration(onSuccess);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [PrivacyPolicy, privacyConsent] = usePrivacyPolicyCheckbox(tcText);
  const [OptIn, optInConsent, setOptInConsent] = useControlledCheckbox();
  const [InterestArea, market] = useControlledSelect();
  const [validationErrors, setValidationErrors] = useState<string | null>(null);

  const reqFields = [firstName, lastName, phone, email, password, market];
  const invalidForm = reqFields.some(f => f.length === 0) || !privacyConsent;

  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    setOptInConsent(true);
  }, [setOptInConsent]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (invalidForm) {
      return;
    }

    setProcessing(true);

    const propertyOfInterest = router?.query?.propertyId as string;

    const profile = {
      emailAddress: email.trim(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      market: market.trim(),
      optInConsent: optInConsent ? dataOptInConsent : '',
      password: password.trim(),
      phoneNumber: phone.trim(),
      privacyConsent,
      propertyOfInterest: propertyOfInterest ?? '',
    };

    try {
      await portalUser?.register(profile);
      if (setEmailAddress) {
        // updates the state in LoginPage so that SEO component can capture registration event for Adobe Analytics
        setEmailAddress(profile.emailAddress);
      }
    } catch (ex: unknown) {
      setProcessing(false);
      if (ex instanceof OktaAuthError) {
        const { message, statusCode, oktaResponse } = ex;
        console.warn(message, statusCode, oktaResponse);

        if (
          oktaResponse?.errorCauses?.[0]?.errorSummary ===
          'login: An object with this field already exists in the current organization'
        ) {
          setValidationErrors(
            'There is already an existing user with this email address. Please sign in or reset your password.',
          );
          return;
        }

        const { errorCauses } = oktaResponse;

        errorCauses?.forEach(errorCause => {
          const { errorSummary } = errorCause;

          if (errorSummary) {
            setValidationErrors(errorSummary);
          }
        });

        return;
      }

      throw ex;
    }

    await handleSuccess();
  };

  return (
    <StyledRegistrationFormContainer>
      <Grid container direction="row" alignItems="center" spacing={4} sx={{ mb: 10 }}>
        {showIllustration && (
          <Grid
            data-testid="illustration-grid"
            item
            alignItems="self-end"
            sx={{ display: { xs: 'none', sm: 'flex' } }}
            sm={5}
          >
            <Illustration
              src="/image-sign-in.png"
              width="245px"
              height="165px"
              alt="It's great to see you. Please come in and stay awhile."
            />
          </Grid>
        )}
        <Grid container item direction="column" alignItems="self-start" spacing={2} xs={12}>
          <Grid item xs={12}>
            <StyledTypography color={theme.colors.darkGray} textVariant="h6">
              {headerTitle}
            </StyledTypography>
          </Grid>
          <Grid item xs={12}>
            <Typography color={theme.colors.darkGray} textVariant="body1" sx={{ paddingRight: 4 }}>
              {headerText}
            </Typography>
            <br />
          </Grid>
        </Grid>
      </Grid>
      <form onSubmit={e => void handleSubmit(e)}>
        <StyledTextFieldsCon>
          <ControlledTextField setValue={setFirstName} value={firstName} label="First Name *" />
          <ControlledTextField setValue={setLastName} value={lastName} label="Last Name *" />
          <ControlledTextField setValue={setPhone} value={phone} label="Mobile Phone Number *" type="tel" />
          <ControlledTextField setValue={setEmail} value={email} label="Email *" type="email" />
          <ControlledTextField setValue={setPassword} value={password} label="Password *" type="password" />
        </StyledTextFieldsCon>
        {validationErrors && <StyledValidationError severity="error">{validationErrors}</StyledValidationError>}
        <StyledInterestAreaContainer>
          <StyledDivider>
            <Divider />
          </StyledDivider>
          <StyledInterestHeaderTypography textAlign="left" textVariant="body1">
            Select your area of interest
          </StyledInterestHeaderTypography>
          <FormControl required>
            <InterestArea data-testid="interest-area" />
          </FormControl>
          <StyledDivider>
            <Divider />
          </StyledDivider>
        </StyledInterestAreaContainer>
        <StyledCheckboxCon>
          <FormControl required>
            <StyledCheckbox>
              <PrivacyPolicy />
            </StyledCheckbox>
          </FormControl>
          <FormControl>
            <StyledCheckbox>
              <OptIn label={dataOptInConsent} />
            </StyledCheckbox>
          </FormControl>
        </StyledCheckboxCon>
        {!processing && (
          <Button fullWidth disabled={invalidForm} variant="primary" type="submit">
            Register
          </Button>
        )}
        {processing && (
          <StyledProgress>
            <CircularProgress data-testid="registration-form-progress" />
          </StyledProgress>
        )}
      </form>
    </StyledRegistrationFormContainer>
  );
};
