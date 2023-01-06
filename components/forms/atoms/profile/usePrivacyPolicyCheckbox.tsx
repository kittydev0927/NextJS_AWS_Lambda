import { FormHelperText } from '@mui/material';
import type { SyntheticEvent } from 'react';
import { useEffect, useState } from 'react';

import { useProfile } from '#auth/UseProfile';
import { Checkbox } from '#components/forms/atoms/Checkbox/Checkbox';
import { theme } from '#styles/styles';

import { StyledText } from './usePrivacyPolicyCheckbox.styles';

export const usePrivacyPolicyCheckbox = (labelText: string) => {
  const profile = useProfile();
  const [privacyPolicy, internalSetPrivacyPolicy] = useState(false);
  const [privacyPolicyError, setPrivacyPolicyError] = useState(false);

  const setPrivacyPolicy = (newValue: boolean) => {
    internalSetPrivacyPolicy(newValue);
    setPrivacyPolicyError(!newValue);
  };

  const onChangePrivacyPolicy = (e: SyntheticEvent) => {
    const el = e.target as HTMLInputElement;
    setPrivacyPolicy(el.checked);
  };

  const component = () => (
    <Checkbox
      checked={privacyPolicy}
      onChange={onChangePrivacyPolicy}
      name="privacy-policy"
      label={
        <>
          <StyledText className="content" dangerouslySetInnerHTML={{ __html: labelText }} />
          {privacyPolicyError && <FormHelperText error>* Required field</FormHelperText>}
        </>
      }
      labelColor={theme.colors.darkGray}
    />
  );

  useEffect(() => {
    const consent = profile?.privacyConsent ?? false;
    internalSetPrivacyPolicy(consent);
    setPrivacyPolicyError(!consent);
  }, [profile, internalSetPrivacyPolicy, setPrivacyPolicyError]);

  return [component, privacyPolicy] as const;
};
