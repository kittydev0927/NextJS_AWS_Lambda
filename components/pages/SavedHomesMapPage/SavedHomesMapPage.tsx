import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { useSavedHomes } from '#auth/UseSavedHomes';
import type { ListMapButtonProps } from '#components/forms/atoms/ListMapButton/ListMapButton.types';
import type { PropertyCardProps } from '#components/layouts/molecules/PropertyCard/PropertyCard.types';
import { PropertyCardPanel } from '#components/layouts/molecules/PropertyCardPanel/PropertyCardPanel';
import { PageLayout } from '#components/layouts/organisms/PageLayout/PageLayout';
import TrashIcon from '#public/trash.svg';
import { propertiesAdapter } from '#utils/propertiesAdapters';

import {
  StyledContentCon,
  StyledEditHomes,
  StyledSavedControlsCon,
  StyledSolidBackground,
  StyledTrashButton,
} from '../SavedHomesPage/SavedHomesPage.styles';
import type { SavedHomesMapPageProps } from './SavedHomesMapPage.types';

export const SavedHomesMapPage: React.FC<SavedHomesMapPageProps> = props => {
  return (
    <PageLayout pageName="savedHomes" data-testid="saved-homes-page" showBackToTop {...props}>
      <StyledSolidBackground>
        <StyledContentCon>
          <StyledSavedControlsCon>
            <StyledEditHomes buttonText="Edit Homes" variant="text" />
            <StyledTrashButton>
              <Image src={TrashIcon as string} width={24} height={29} alt="Trash" />
            </StyledTrashButton>
          </StyledSavedControlsCon>
          <SavedHomesComponent />
        </StyledContentCon>
      </StyledSolidBackground>
    </PageLayout>
  );
};

const SavedHomesComponent: React.FC = () => {
  const router = useRouter();
  const savedHomes = useSavedHomes();
  const [savedProperties, setSavedProperties] = useState<readonly PropertyCardProps[] | undefined>();

  useEffect(() => {
    async function loadHomes() {
      setSavedProperties(propertiesAdapter(savedHomes));
    }
    void loadHomes();
  }, [savedHomes]);

  const changeHomesView: ListMapButtonProps['onChange'] = (e, newDisplay) => {
    if (newDisplay === 'map') {
      void router.push('/saved-map');
    } else {
      void router.push('/saved');
    }
  };

  return (
    <PropertyCardPanel
      homesViewOnChange={changeHomesView}
      title="Saved Homes"
      showFilters
      properties={savedProperties ?? []}
      homesView="map"
      propertyView="map"
    />
  );
};
