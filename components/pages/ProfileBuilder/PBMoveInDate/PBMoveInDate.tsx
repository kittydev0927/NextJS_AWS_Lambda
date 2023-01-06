import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

import type { PortalUser } from '#auth/PortalUser';
import { useProfile } from '#auth/UseProfile';
import type { DatePickerProps } from '#components/forms/atoms/DatePicker/DatePicker.types';
import { ProfileBuilderWrapper } from '#components/forms/molecules/ProfileBuilderWrapper/ProfileBuilderWrapper';
import type { ILoginPageContentQuery } from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';

import { StyledProfileBuilderHeader } from '../PBPages.styles';
import { StyledDatePicker, StyledPBMoveInDateWrapper } from './PBMoveInDate.styles';

export const PBMoveInDate: React.FC<ILoginPageContentQuery> = ({ ...props }) => {
  const [valid, setValid] = useState(false);
  const [value, setValue] = useState<Date>(new Date());
  const router = useRouter();

  useEffect(() => {
    void router.prefetch('/profile/number-of-bedrooms');
  }, [router]);

  const saveData = async (portalUser: PortalUser) => {
    const { moveInDate: existing } = (await portalUser.getProfile()) ?? {};

    // back-end discards milliseconds on dates
    const rounded = new Date(value.valueOf());
    rounded.setMilliseconds(0);

    if (!existing || rounded.valueOf() !== existing.valueOf()) {
      await portalUser.patchProfile({ moveInDate: rounded });
    }
  };

  const prevPage = useCallback(async () => {
    void router.push('/profile/home-location');
  }, [router]);
  const nextPage = useCallback(async () => {
    void router.push('/profile/number-of-bedrooms');
  }, [router]);

  return (
    <ProfileBuilderWrapper
      isNextButtonDisabled={!valid}
      isShowIllustration={false}
      nextPage={nextPage}
      onSave={saveData}
      prevPage={prevPage}
      step={2}
      {...props}
    >
      <Contents setValid={setValid} setValue={setValue} value={value} />
    </ProfileBuilderWrapper>
  );
};

const Contents = ({
  setValid,
  setValue,
  value,
}: {
  setValid: (isValid: boolean) => void;
  setValue: (newValue: Date) => void;
  value?: Date;
}) => {
  const today = new Date();
  const profile = useProfile();
  const [loaded, setLoaded] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    if (profile && !loaded) {
      setLoaded(true);
      setHasValue(Boolean(profile.moveInDate));
      setValid(Boolean(profile.moveInDate));
      setValue(profile.moveInDate ?? new Date());
    }
  }, [profile, loaded, setValid, setValue]);

  const onChange: NonNullable<DatePickerProps['onChange']> = newValue => {
    setHasValue(Boolean(newValue));
    setValid(Boolean(newValue));
    setValue(newValue ?? new Date());
  };

  const onError: NonNullable<DatePickerProps['onError']> = reason => {
    setValid(!reason && hasValue);
  };

  return (
    <StyledPBMoveInDateWrapper data-testid="pb-move-in-date">
      <StyledProfileBuilderHeader variant="h5" align="left">
        When would you like to move in?
      </StyledProfileBuilderHeader>
      <StyledDatePicker onError={onError} onChange={onChange} value={value} minDate={today} label="" />
    </StyledPBMoveInDateWrapper>
  );
};
