import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import type { PortalUser } from '#auth/PortalUser';
import { useProfile } from '#auth/UseProfile';
import { Autocomplete } from '#components/forms/atoms/Autocomplete/Autocomplete';
import { StyledChip } from '#components/forms/atoms/Autocomplete/Autocomplete.styles';
import type { AutocompleteProps } from '#components/forms/atoms/Autocomplete/Autocomplete.types';
import { ProfileBuilderWrapper } from '#components/forms/molecules/ProfileBuilderWrapper/ProfileBuilderWrapper';
import type { ILoginPageContentQuery } from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';
import { AuthorizationWrapper } from '#components/layouts/atoms/AuthorizationWrapper/AuthorizationWrapper';
import { HomeNoLongerAvailableModal } from '#components/navigation/organisms/HomeNoLongerAvailableModal/HomeNoLongerAvailableModal';
import { getLocation } from '#services/profile/getLocation';
import { setEquality } from '#utils/setEquality';

import { StyledProfileBuilderHeader, StyledProfileBuilderSubHeader } from '../PBPages.styles';
import { StyledLocationsPage } from './PBLocationsPage.styles';

type AutocompleteHandler = NonNullable<AutocompleteProps<string>['onChange']>;

export const PBLocationsPageComponent: React.FC<ILoginPageContentQuery> = ({ homeNoLongerAvailable, ...props }) => {
  const [value, setValue] = useState<ReadonlySet<string>>(new Set());
  const router = useRouter();
  const valid = value.size > 0;

  useEffect(() => {
    void router.prefetch('/profile/estimated-move-in-date');
  }, [router]);

  const saveData = async (portalUser: PortalUser) => {
    const { preferredLocations: existing } = (await portalUser.getProfile()) ?? {};

    if (setEquality(value, existing)) {
      return;
    }

    await portalUser.patchProfile({ preferredLocations: value });
  };

  const nextPage = useCallback(async () => {
    void router.push('/profile/estimated-move-in-date');
  }, [router]);

  return (
    <AuthorizationWrapper>
      <ProfileBuilderWrapper
        isNextButtonDisabled={!valid}
        isShowIllustration={false}
        nextPage={nextPage}
        onSave={saveData}
        step={1}
        {...props}
      >
        <Content setValue={setValue} value={value} />
        {homeNoLongerAvailable && <HomeNoLongerAvailableModal />}
      </ProfileBuilderWrapper>
    </AuthorizationWrapper>
  );
};

function mapSelectionToLocations(value: Parameters<AutocompleteHandler>[1]) {
  if (Array.isArray(value)) {
    return new Set<string>(value);
  }

  if (typeof value === 'string' && value.length > 0) {
    return new Set<string>([value]);
  }

  return new Set<string>();
}

const Content = ({
  setValue,
  value,
}: {
  setValue: (newValue: ReadonlySet<string>) => void;
  value: ReadonlySet<string>;
}) => {
  const profile = useProfile();
  const [options, setOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(false);

  useEffect(() => {
    if (profile && !initialLoad) {
      setInitialLoad(true);
      setValue(profile.preferredLocations ?? new Set());
    }
  }, [profile, initialLoad, setValue]);

  const DEBOUNCE_DELAY = 500;

  const inputOnChange = useDebouncedCallback(async (onChangeValue: string) => {
    try {
      const data = await getLocation(onChangeValue);
      if (data.length > 0) {
        setLoading(true);
        const parsedData = new Set(data.map(({ locality, region }) => `${locality}, ${region}`));

        for (const item of Array.from(value)) {
          parsedData.add(item);
        }

        setOptions(Array.from(parsedData));
      }
    } finally {
      setLoading(false);
    }
  }, DEBOUNCE_DELAY);

  const onChange: AutocompleteHandler = (_e, updatedValue) => {
    setValue(mapSelectionToLocations(updatedValue));
  };

  return (
    <StyledLocationsPage>
      <StyledProfileBuilderHeader variant="subtitle1" align="left">
        Where would you like to live?
      </StyledProfileBuilderHeader>
      <StyledProfileBuilderSubHeader variant="subtitle2" align="left" fontWeight="bold">
        It&apos;s OK to add more than one location!
      </StyledProfileBuilderSubHeader>

      <Autocomplete
        filterOptions={x => x}
        filterSelectedOptions
        loading={loading}
        onChange={onChange}
        onInputChange={e => void inputOnChange(e.target.value)}
        options={options}
        placeholder="Add city, zip code or community"
        renderTags={(tags, getTagProps) =>
          tags.map((option, index) => (
            <StyledChip deleteIcon={<CloseIcon />} label={option} {...getTagProps({ index })} key={index} />
          ))
        }
        value={Array.from(value)}
      />
    </StyledLocationsPage>
  );
};
