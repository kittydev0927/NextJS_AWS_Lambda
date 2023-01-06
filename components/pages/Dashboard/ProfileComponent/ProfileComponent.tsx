/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { useEffect, useState } from 'react';

import { useProfile } from '#auth/UseProfile';
import { CompleteProfile } from '#components/layouts/molecules/CompleteProfile/CompleteProfile';
import { IncompleteProfile } from '#components/layouts/molecules/IncompleteProfile/IncompleteProfile';
import { CalculateProfileCompletion } from '#services/profile/CalculateProfileCompletion';

import { LoadingProfile } from './ProfileComponent.styles';
import type { IProfileComponent } from './ProfileComponent.types';

export const ProfileComponent: React.FC<IProfileComponent> = ({ profileTestingVal = 0 }) => {
  const profile = useProfile();
  const { next } = CalculateProfileCompletion(profile);
  const [nextValue, setNextValue] = useState(-2);

  useEffect(() => {
    if (next) {
      setNextValue(next);
    } else {
      setNextValue(profileTestingVal);
    }
  }, [next, profileTestingVal]);

  if (nextValue === -2) return <LoadingProfile data-testid="loading-profile" />;
  if (nextValue >= 0) return <IncompleteProfile />;
  if (nextValue === -1) return <CompleteProfile />;
  return <LoadingProfile data-testid="loading-profile" />;
};
