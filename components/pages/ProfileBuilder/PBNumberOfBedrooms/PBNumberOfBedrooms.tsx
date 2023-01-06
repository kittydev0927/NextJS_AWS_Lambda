import { Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

import type { PortalUser } from '#auth/PortalUser';
import { useProfile } from '#auth/UseProfile';
import type { BedroomSelectorProps } from '#components/forms/atoms/BedroomSelector/BedroomSelector.types';
import { BEDROOM_SELECTOR_OPTIONS } from '#components/forms/atoms/BedroomSelector/BedroomSelector.types';
import { ProfileBuilderWrapper } from '#components/forms/molecules/ProfileBuilderWrapper/ProfileBuilderWrapper';
import type { ILoginPageContentQuery } from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';
import { StyledProfileBuilderHeader } from '#components/pages/ProfileBuilder/PBPages.styles';
import { setEquality } from '#utils/setEquality';

import { StyledBedroomSelector, StyledIIcon, StyledTooltip, StyledWrapper } from './PBNumberOfBedrooms.styles';

type BedroomOption = typeof BEDROOM_SELECTOR_OPTIONS[number];

export const PBNumberOfBedrooms: React.FC<ILoginPageContentQuery> = ({ ...props }) => {
  const router = useRouter();
  const [value, setValue] = useState<ReadonlySet<number>>(new Set());
  const valid = value.size > 0;

  useEffect(() => {
    void router.prefetch('/profile/monthly-rent-range');
  }, [router]);

  const saveData = async (portalUser: PortalUser) => {
    const { desiredBedrooms: existing } = (await portalUser.getProfile()) ?? {};

    if (setEquality(value, existing)) {
      return;
    }

    await portalUser.patchProfile({ desiredBedrooms: value });
  };

  const prevPage = useCallback(async () => {
    void router.push('/profile/estimated-move-in-date');
  }, [router]);
  const nextPage = useCallback(async () => {
    void router.push('/profile/monthly-rent-range');
  }, [router]);

  return (
    <ProfileBuilderWrapper
      isNextButtonDisabled={!valid}
      isShowIllustration={false}
      nextPage={nextPage}
      onSave={saveData}
      prevPage={prevPage}
      step={3}
      {...props}
    >
      <Content value={value} setValue={setValue} />
    </ProfileBuilderWrapper>
  );
};

const Content = ({
  setValue,
  value,
}: {
  setValue: (newValue: ReadonlySet<number>) => void;
  value: ReadonlySet<number>;
}) => {
  const profile = useProfile();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (profile && !loaded) {
      setLoaded(true);
      setValue(profile.desiredBedrooms ?? new Set());
    }
  }, [profile, loaded, setValue]);

  const parsedValue = BEDROOM_SELECTOR_OPTIONS.filter(item => value.has(item.value));

  const onSelectedOptions: BedroomSelectorProps['onSelectedOptions'] = selectedOptions => {
    const normalized = Array.isArray(selectedOptions) ? selectedOptions : [selectedOptions];
    const values = normalized.filter((o): o is BedroomOption => Boolean(o) && typeof o === 'object');
    setValue(new Set(values.map(v => v.value)));
  };

  return (
    <StyledWrapper>
      <StyledProfileBuilderHeader variant="h5">
        How many Bedrooms do you need?
        <StyledTooltip
          arrow
          title={
            <>
              <Typography>Tooltip with HTML</Typography>
              <em>And heres</em> <b>some</b> <u>amazing content</u>. Its very engaging. Right?
            </>
          }
        >
          <span>
            <StyledIIcon />
          </span>
        </StyledTooltip>
      </StyledProfileBuilderHeader>
      <StyledBedroomSelector value={parsedValue} onSelectedOptions={onSelectedOptions} />
    </StyledWrapper>
  );
};
