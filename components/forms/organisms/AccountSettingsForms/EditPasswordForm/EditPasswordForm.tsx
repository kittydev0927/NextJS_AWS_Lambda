import { Alert, AlertTitle } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/router';
import type { FormEvent } from 'react';
import React, { useContext, useEffect, useState } from 'react';

import type { IOktaError } from '#auth/IOktaError';
import { OktaAuthError } from '#auth/OktaAuthError';
import { UserContext } from '#auth/UserContext';
import { ControlledTextField } from '#components/forms/atoms/profile/ControlledTextField';
import type { IControlledTextFieldProps } from '#components/forms/atoms/profile/IControlledTextFieldProps';
import { ButtonGroup } from '#components/forms/organisms/AccountSettingsForms/ButtonGroup/ButtonGroup';
import { Typography } from '#components/layouts/atoms/Typography/Typography';
import { theme } from '#styles/styles';

import { StyledAccountSettingsFormWrapper } from '../AccountSettingsForms.styles';
import { StyledButtonGroupContainer, StyledTextFieldContainer } from './EditPasswordForm.styles';

export const EditPasswordForm: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [oktaError, setOktaError] = useState<IOktaError | undefined>();

  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
  const portalUser = useContext(UserContext);
  const router = useRouter();
  const confirmationMatches = newPassword === confirm;
  const isValid = Boolean(currentPassword && newPassword && confirmationMatches);
  const helperText = !confirmationMatches ? { helperText: "passwords don't match" } : {};

  const [oktaSuccess, setOktaSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await portalUser?.changePassword(currentPassword, newPassword);
      setOktaSuccess(true);
      setLoading(false);
      setOktaError(undefined);
    } catch (ex: unknown) {
      if (ex instanceof OktaAuthError) {
        setLoading(false);
        setOktaError(ex.oktaResponse);
        return;
      }

      throw ex;
    }
  };

  useEffect(() => {
    void router.prefetch('/settings');
  }, [router]);

  return (
    <StyledAccountSettingsFormWrapper
      title="Edit Password"
      {...(smallBreakpoint && { rightButton: { name: 'Account Settings', href: '/settings' } })}
    >
      <form onSubmit={e => void handleSubmit(e)}>
        <StyledTextFieldContainer>
          <PasswordField value={currentPassword} setValue={setCurrentPassword} label="Current Password" />
          <PasswordField value={newPassword} setValue={setNewPassword} label="New Password" />
          <PasswordField value={confirm} setValue={setConfirm} label="Confirm New Password" {...helperText} />
        </StyledTextFieldContainer>
        <ShowOktaError oktaError={oktaError} />
        {oktaSuccess && <ShowOktaSuccess />}
        <StyledButtonGroupContainer>
          <ButtonGroup isValid={isValid} loading={isLoading} />
        </StyledButtonGroupContainer>
      </form>
    </StyledAccountSettingsFormWrapper>
  );
};

type IPasswordFieldProps = Omit<IControlledTextFieldProps, 'fillWidth' | 'type'>;

const PasswordField = (props: IPasswordFieldProps) => (
  <ControlledTextField {...props} required fullWidth type="password" />
);

interface IShowOktaErrorProps {
  readonly oktaError?: IOktaError;
}

const ShowOktaError = ({ oktaError }: IShowOktaErrorProps) => {
  if (!oktaError) {
    return null;
  }

  const causes = oktaError.errorCauses
    ?.map(c => c.errorSummary)
    .filter<string>((o?: string): o is string => Boolean(o));

  return (
    <Alert severity="error">
      <AlertTitle>{oktaError.errorSummary}</AlertTitle>
      <ShowOktaCauses causes={causes} />
    </Alert>
  );
};

const ShowOktaCauses = ({ causes }: { readonly causes?: readonly string[] }) => {
  if (!causes) {
    return null;
  }

  if (causes.length === 1) {
    return <p>{causes[0]}</p>;
  }

  return (
    <ul>
      {causes.map((cause, idx) => (
        <li key={idx}>{cause}</li>
      ))}
    </ul>
  );
};

const ShowOktaSuccess = () => (
  <Alert severity="success">
    <AlertTitle>Success</AlertTitle>
    <Typography>Your password has been successfully updated.</Typography>
  </Alert>
);
