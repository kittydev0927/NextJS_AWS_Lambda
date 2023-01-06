import { FormControl, FormGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { useProfile } from '#auth/UseProfile';
import { Checkbox } from '#components/forms/atoms/Checkbox/Checkbox';
import { Typography } from '#components/layouts/atoms/Typography/Typography';

export const useProgressResident = () => {
  const profile = useProfile();
  const [resident, setResident] = useState(profile?.currentProgressResident ?? false);
  const setResidentTrue = () => setResident(true);
  const setResidentFalse = () => setResident(false);

  useEffect(() => setResident(profile?.currentProgressResident ?? false), [profile, setResident]);

  const ProgressResident = () => (
    <FormControl>
      <Typography textVariant="h6">Are you a current Progress resident?</Typography>
      <FormGroup>
        <Checkbox label="Yes" checked={resident} onClick={setResidentTrue} />
        <Checkbox label="No" checked={!resident} onClick={setResidentFalse} />
      </FormGroup>
    </FormControl>
  );

  return [ProgressResident, resident] as const;
};
