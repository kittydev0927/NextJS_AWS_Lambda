import { LinearProgress } from '@mui/material';
import { useRouter } from 'next/router';
import type { FormEvent } from 'react';
import React, { useContext, useEffect, useState } from 'react';

import { OktaAuthError } from '#auth/OktaAuthError';
import { useProfile } from '#auth/UseProfile';
import { UserContext } from '#auth/UserContext';
import { ControlledTextField } from '#components/forms/atoms/profile/ControlledTextField';
import type { IControlledTextFieldProps } from '#components/forms/atoms/profile/IControlledTextFieldProps';
import { useControlledCheckbox } from '#components/forms/atoms/profile/useControlledCheckbox';
import { useControlledSelect } from '#components/forms/atoms/profile/useControlledSelect';
import { usePrivacyPolicyCheckbox } from '#components/forms/atoms/profile/usePrivacyPolicyCheckbox';
import { StyledAccountSettingsFormWrapper } from '#components/forms/organisms/AccountSettingsForms/AccountSettingsForms.styles';
import { ButtonGroup } from '#components/forms/organisms/AccountSettingsForms/ButtonGroup/ButtonGroup';
import { StyledInterestHeaderTypography } from '#components/forms/organisms/RegistrationForm/RegistrationForm.styles';

import type { ILoginPageContentQuery } from '../../RegistrationForm/RegistrationForm.types';
import { StyledListOfCheckboxes, StyledValidationError, TextFieldContainer } from './EditPersonalInformationForm.style';

export const EditPersonalInformationForm: React.FC<ILoginPageContentQuery> = ({ userAuthContent }) => {
  const tcText = userAuthContent.tcContent.items[0].cfContent.json[0].content[0].value || '';
  const dataOptInConsent = userAuthContent.consentContent.items[0].cfContent.json[0].content[0].value;

  const portalUser = useContext(UserContext);
  const profile = useProfile();
  const router = useRouter();

  const [firstName, setFirstName] = useState(profile?.firstName ?? '');
  const [lastName, setLastName] = useState(profile?.lastName ?? '');
  const [phone, setPhone] = useState(profile?.phoneNumber ?? '');
  const [email, setEmail] = useState(profile?.emailAddress ?? '');
  const [loading, setIsLoading] = useState<boolean>(Boolean(profile?.emailAddress));
  const [InterestArea, market, setMarket] = useControlledSelect(profile?.market ?? '');
  const [PrivacyPolicy, privacyConsent] = usePrivacyPolicyCheckbox(tcText);
  const [OptInUpdates, optInConsent, setOptInConsent] = useControlledCheckbox();
  const [validationErrors, setValidationErrors] = useState<string | null>(null);

  const reqFields = [firstName, lastName, phone, email];
  const isValid = reqFields.every(f => f.length > 0) && privacyConsent;

  useEffect(() => {
    void router?.prefetch('/settings');
  }, [router]);

  useEffect(() => {
    setFirstName(profile?.firstName ?? '');
    setLastName(profile?.lastName ?? '');
    setPhone(profile?.phoneNumber ?? '');
    setEmail(profile?.emailAddress ?? '');
    setMarket(profile?.market ?? '');
    setOptInConsent(profile?.optInConsent !== '');
    setIsLoading(!profile);
  }, [profile, setFirstName, setLastName, setPhone, setEmail, setOptInConsent, setMarket]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isValid) {
      return;
    }

    setIsLoading(true);

    try {
      await portalUser?.patchProfile({
        emailAddress: email.trim(),
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        optInConsent: optInConsent ? dataOptInConsent : '',
        phoneNumber: phone.trim(),
        market: market,
        privacyConsent,
      });
    } catch (ex: unknown) {
      if (
        ex instanceof OktaAuthError &&
        ex.oktaResponse?.errorCauses?.[0]?.errorSummary ===
          'login: An object with this field already exists in the current organization'
      ) {
        setValidationErrors('There is already an existing user with this email address. Please try again.');
        setIsLoading(false);
        return;
      }
    }
    void router.push('/settings');
  };

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <StyledAccountSettingsFormWrapper
      title="Edit Personal Information"
      rightButton={{ name: 'Account Settings', href: '/settings' }}
      data-testid="edit-personal-information"
    >
      <form onSubmit={e => void handleSubmit(e)}>
        <TextFieldContainer>
          <FullWidthField setValue={setFirstName} value={firstName} label="First Name" />
          <FullWidthField setValue={setLastName} value={lastName} label="Last Name" />
          <FullWidthField setValue={setPhone} value={phone} label="Phone Number" type="tel" />
          <FullWidthField setValue={setEmail} value={email} label="Email Address" type="email" />
          {validationErrors && <StyledValidationError severity="error">{validationErrors}</StyledValidationError>}
          <StyledInterestHeaderTypography textAlign="left" textVariant="body1">
            Select your area of interest
          </StyledInterestHeaderTypography>
          <InterestArea />
        </TextFieldContainer>
        <StyledListOfCheckboxes>
          <PrivacyPolicy />
          <OptInUpdates label={dataOptInConsent} />
        </StyledListOfCheckboxes>
        <ButtonGroup isValid={isValid} />
      </form>
    </StyledAccountSettingsFormWrapper>
  );
};

type IFullWidthFieldProps = Omit<IControlledTextFieldProps, 'fillWidth' | 'InputLabelProps'>;

const FullWidthField = (props: IFullWidthFieldProps) => (
  <ControlledTextField {...props} fullWidth InputLabelProps={{ shrink: Boolean(props.value) }} />
);
