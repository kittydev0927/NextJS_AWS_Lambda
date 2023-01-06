import React from 'react';

import { useProfile } from '#auth/UseProfile';
import { TitleFolderVariant } from '#components/layouts/molecules/TitleFolder/TitleFolder.types';
import { Paper } from '#components/layouts/organisms/Paper/Paper';

import {
  AccountSettingsItemsWrapper,
  AccountSettingsWrapper,
  PropertiesListWrapper,
  PropertyItemWrapper,
} from './AccountSettings.styles';
import { PropertyItem } from './PropertyItem/PropertyItem';

export const AccountSettings: React.FC = () => {
  const profile = useProfile();

  const name = [profile?.firstName, profile?.lastName].filter(Boolean).join(' ');

  return (
    <Paper innerElevation={0} innerSquare innerTheme="gradient" outerElevation={20} showOuterPaper>
      <AccountSettingsWrapper title="Account Settings">
        <AccountSettingsItemsWrapper
          title="Personal Information"
          variant={TitleFolderVariant.Secondary}
          rightButton={{ href: '/edit-personal-information' }}
        >
          <PropertiesListWrapper container>
            <PropertyItemWrapper container>
              <PropertyItem name="Name" value={name} />
            </PropertyItemWrapper>
            <PropertyItemWrapper container>
              <PropertyItem name="Email" value={profile?.emailAddress} />
            </PropertyItemWrapper>
            <PropertyItemWrapper container>
              <PropertyItem name="Phone" value={profile?.phoneNumber} />
            </PropertyItemWrapper>
            <PropertyItemWrapper container>
              <PropertyItem name="Select your area of interest" value={profile?.market} />
            </PropertyItemWrapper>
          </PropertiesListWrapper>
        </AccountSettingsItemsWrapper>

        <AccountSettingsItemsWrapper
          title="Security"
          variant={TitleFolderVariant.Secondary}
          rightButton={{ href: '/edit-password' }}
        >
          <PropertiesListWrapper container>
            <PropertyItemWrapper container>
              <PropertyItem name="Password" value="*********" />
            </PropertyItemWrapper>
          </PropertiesListWrapper>
        </AccountSettingsItemsWrapper>
      </AccountSettingsWrapper>
    </Paper>
  );
};
