import { useMediaQuery } from '@mui/material';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { useSavedHomes } from '#auth/UseSavedHomes';
import type { PropertyCardProps } from '#components/layouts/molecules/PropertyCard/PropertyCard.types';
import { PropertyCardPanel } from '#components/layouts/molecules/PropertyCardPanel/PropertyCardPanel';
import { PageLayout } from '#components/layouts/organisms/PageLayout/PageLayout';
import { ProfileInfoCard } from '#components/layouts/organisms/ProfileCard/ProfileInfoCard';
import CoapplicantLinkInvalidModal from '#components/navigation/organisms/CoapplicantLinkInvalidModal/CoapplicantLinkInvalidModal';
import { HomeNoLongerAvailableModal } from '#components/navigation/organisms/HomeNoLongerAvailableModal/HomeNoLongerAvailableModal';
import { theme } from '#styles/styles';
import { footerLinks } from '#utils/placeholderLinks';
import { propertiesAdapter } from '#utils/propertiesAdapters';
import { useCurrentUserScreen } from '#utils/services/getCurrentUserScreen';

import {
  LinksContainer,
  ProfileCardBody,
  ProfileCardContainer,
  StyledContentContainer,
  StyledDashboardContainer,
  StyledLinksList,
  StyledLinksListSmall,
  StyledProfileContainer,
  StyledSolidBackground,
} from './Dashboard.styles';
import type { DashboardProps } from './Dashboard.types';
import { DashboardWrapper } from './DashboardWrapper/DashboardWrapper';
import { ProfileComponent } from './ProfileComponent/ProfileComponent';
import { ReservedComponent } from './ReservedComponent/ReservedComponent';

export const DashboardPage: React.FC<DashboardProps> = ({
  children,
  breakpointProp,
  isReserved,
  profileTestingVal,
  coapplicantLinkInvalid,
  homeNoLongerAvailable,
  ...props
}) => {
  const breakpointQuery = useMediaQuery(theme.breakpoints.up('sm'));
  const breakpoint = () => {
    if (breakpointProp === 'sm') {
      return false;
    }
    if (breakpointProp === 'lg') {
      return true;
    }
    return breakpointQuery;
  };

  return (
    <StyledDashboardContainer>
      <PageLayout pageName="dashboard" showBackToTop {...props} data-testid="dashboard-page">
        <StyledSolidBackground>
          <StyledContentContainer>
            <StyledProfileContainer>
              <ProfileInfoCard>
                <DashboardWrapper />
              </ProfileInfoCard>
              <ProfileCardWrapper isReserved={isReserved} profileTestingVal={profileTestingVal} {...props} />
            </StyledProfileContainer>
            <SavedHomesComponent />
            {children}
            <LinksContainer>
              {breakpoint() ? (
                <StyledLinksList links={footerLinks} data-testid="links-list-large" />
              ) : (
                <StyledLinksListSmall links={footerLinks} text="Quick Links" data-testid="links-list-small" />
              )}
            </LinksContainer>
          </StyledContentContainer>
        </StyledSolidBackground>
      </PageLayout>
      {coapplicantLinkInvalid && <CoapplicantLinkInvalidModal />}
      {homeNoLongerAvailable && <HomeNoLongerAvailableModal />}
    </StyledDashboardContainer>
  );
};

const SavedHomesComponent: React.FC = () => {
  const savedHomes = useSavedHomes();
  const router = useRouter();
  const [savedProperties, setSavedProperties] = useState<readonly PropertyCardProps[] | undefined>();

  useEffect(() => {
    async function loadHomes() {
      setSavedProperties(propertiesAdapter(savedHomes));
    }
    void loadHomes();

    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');

    if (q === 'logout') {
      Cookies.remove('okta-token-storage');
    }
  }, [savedHomes]);

  return (
    <PropertyCardPanel
      title="Saved Homes"
      showFilters={false}
      onClickLink={() => void router.push('/saved')}
      linkText="View All"
      properties={savedProperties ?? []}
    />
  );
};

const ProfileCardWrapper: React.FC<DashboardProps> = ({ isReserved, profileTestingVal }) => {
  const dashboardFlow = useCurrentUserScreen();
  const [isShowProfile, setIsShowProfile] = useState(false);
  useEffect(() => {
    setIsShowProfile(dashboardFlow.isShowProfile);
  }, [dashboardFlow]);
  return (
    <>
      {isShowProfile && (
        <ProfileCardContainer>
          <ProfileCardBody>
            <ProfileComponent profileTestingVal={profileTestingVal} />
            {isReserved && <ReservedComponent />}
          </ProfileCardBody>
        </ProfileCardContainer>
      )}
    </>
  );
};
