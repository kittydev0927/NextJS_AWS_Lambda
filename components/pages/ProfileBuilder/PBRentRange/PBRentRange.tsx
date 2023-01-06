import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

import type { PortalUser } from '#auth/PortalUser';
import { useProfile } from '#auth/UseProfile';
import { Slider } from '#components/forms/atoms/Slider/Slider';
import type { SliderProps } from '#components/forms/atoms/Slider/Slider.types';
import { ProfileBuilderWrapper } from '#components/forms/molecules/ProfileBuilderWrapper/ProfileBuilderWrapper';
import type { ILoginPageContentQuery } from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';
import { Divider } from '#components/layouts/atoms/Divider/Divider';
import { StyledProfileBuilderHeader } from '#components/pages/ProfileBuilder/PBPages.styles';
import { incomeCalculation } from '#utils/helperFunctions';

import {
  StyledDescText,
  StyledDividerCon,
  StyledFinePrint,
  StyledMonthlyText,
  StyledMonthlyTextCon,
  StyledPBRentRangeWrapper,
  StyledPerMonthText,
  StyledRangeSliderContainer,
  StyledRentRangeText,
} from './PBRentRange.styles';

export const PBRentRange: React.FC<ILoginPageContentQuery> = ({ ...props }) => {
  const [minRent, setMinRent] = useState<number | undefined>();
  const [maxRent, setMaxRent] = useState<number | undefined>();
  const router = useRouter();

  useEffect(() => {
    void router.prefetch('/profile/complete');
  }, [router]);

  const saveData = async (portalUser: PortalUser) => {
    const { maxRent: existingMax, minRent: existingMin } = (await portalUser.getProfile()) ?? {};

    if (minRent === existingMin && maxRent === existingMax) {
      return;
    }

    await portalUser.patchProfile({ maxRent: maxRent ?? null, minRent: minRent ?? null });
  };

  const prevPage = useCallback(async () => {
    void router.push('/profile/number-of-bedrooms');
  }, [router]);
  const nextPage = useCallback(async () => {
    void router.push('/profile/complete');
  }, [router]);

  return (
    <ProfileBuilderWrapper
      isShowIllustration={false}
      nextPage={nextPage}
      onSave={saveData}
      prevPage={prevPage}
      step={4}
      {...props}
    >
      <Content setMaxRent={setMaxRent} setMinRent={setMinRent} maxRent={maxRent} minRent={minRent} />
    </ProfileBuilderWrapper>
  );
};

const Content = ({
  setMaxRent,
  setMinRent,
  maxRent,
  minRent,
}: {
  setMaxRent: (newValue: number) => void;
  setMinRent: (newValue: number) => void;
  maxRent?: number;
  minRent?: number;
}) => {
  const defaultMin = 800;
  const defaultMax = 5000;
  const profile = useProfile();
  const [rentLoaded, setRentLoaded] = useState(false);

  const dollarUSLocale = Intl.NumberFormat('en-US'); // formatting for US Dollar
  const incomeValue = dollarUSLocale.format(incomeCalculation(maxRent ?? 0));

  useEffect(() => {
    if (profile && !rentLoaded) {
      setRentLoaded(true);
      setMinRent(profile.minRent ?? defaultMin);
      setMaxRent(profile.maxRent ?? defaultMax);
    }
  }, [profile, rentLoaded, setMinRent, setMaxRent]);

  const handleSliderChange: NonNullable<SliderProps['onChange']> = newValue => {
    setMinRent(Math.min(...newValue));
    setMaxRent(Math.max(...newValue));
  };

  return (
    <StyledPBRentRangeWrapper data-testid="pb-rent-range">
      <StyledProfileBuilderHeader variant="h5" align="left">
        Use the slider below to select your desired monthly rent price range:
      </StyledProfileBuilderHeader>
      <StyledRangeSliderContainer>
        <Slider
          min={defaultMin}
          max={defaultMax}
          value={[minRent ?? defaultMin, maxRent ?? defaultMax]}
          onChange={handleSliderChange}
        />
      </StyledRangeSliderContainer>
      <StyledRentRangeText>
        <StyledDescText>
          To comfortably afford a home in this monthly price range, Progress Residential requires a gross* monthly
          HOUSEHOLD income of:
        </StyledDescText>
        <StyledDividerCon>
          <Divider orientation="vertical" />
        </StyledDividerCon>
        <StyledMonthlyTextCon>
          <StyledMonthlyText>${incomeValue}</StyledMonthlyText>
          <StyledPerMonthText>/Mo</StyledPerMonthText>
        </StyledMonthlyTextCon>
      </StyledRentRangeText>
      <StyledFinePrint>
        *Your gross monthly household income is the combined monthly income of all members of the household over the age
        of 18.
      </StyledFinePrint>
    </StyledPBRentRangeWrapper>
  );
};
