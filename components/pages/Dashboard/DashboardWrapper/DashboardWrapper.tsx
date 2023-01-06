/* eslint-disable @typescript-eslint/no-magic-numbers */

import React, { useEffect, useState } from 'react';

//import type { IProfile } from '#auth/IProfile';
import { StripePayment } from '#components/forms/molecules/StripePayment/StripePayment';
import { CompleteProfile } from '#components/layouts/molecules/CompleteProfile/CompleteProfile';
import { IncompleteProfile } from '#components/layouts/molecules/IncompleteProfile/IncompleteProfile';
import { WhatsNext } from '#components/layouts/organisms/WhatsNext/WhatsNext';
//import type { IApplication } from '#models/IApplication';
import { useCurrentUserScreen } from '#utils/services/getCurrentUserScreen';

import { SecurityDeposit } from '../SecurityDeposit/SecurityDeposit';
import { LoadingProfile } from './../ProfileComponent/ProfileComponent.styles';
import type { IDashboardWrapperComponent } from './DashboardWrapper.types';

export const DashboardWrapper: React.FC<IDashboardWrapperComponent> = ({ dashboardWrapperTestVal = 0 }) => {
  const [nextValue, setNextValue] = useState(0);
  // const [profile, setProfile] = useState<IProfile | undefined>(undefined);
  // const [application, setApplication] = useState<IApplication | undefined>(undefined);
  const dashboardFlow = useCurrentUserScreen();

  useEffect(() => {
    setNextValue(dashboardFlow.dashboardFlow || dashboardWrapperTestVal);
    // setApplication(dashboardFlow.application);
    // setProfile(dashboardFlow.profile);
  }, [dashboardFlow, dashboardWrapperTestVal]);

  // switch case should be updated according to the service map response
  switch (nextValue) {
    case 0:
      return <IncompleteProfile />;
    // case 1:
    //   return application && profile ? (
    //     // <IncompleteApplication application={application} profile={profile} /> //this will be implemented soon//
    //     <IncompleteProfile />
    //   ) : (
    // <IncompleteProfile />;
    //);
    case 3:
      return <CompleteProfile />;
    case 4:
      return <WhatsNext />;
    case 5:
      return <SecurityDeposit maxRent={3400} />;
    case 6:
      return <StripePayment amount={3400} returnUrl="" />;
    default:
      return <LoadingProfile data-testid="loading-profile" />;
  }
};
