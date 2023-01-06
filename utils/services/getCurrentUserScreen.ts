import { useCallback, useContext, useEffect, useState } from 'react';

import { useProfile } from '#auth/UseProfile';
import { UserContext } from '#auth/UserContext';
import type { IApplication } from '#models/IApplication';
import { CalculateProfileCompletion } from '#services/profile/CalculateProfileCompletion';

import type { IDashboardScreenFlowResult } from './dashboardFlow.types';

export const useCurrentUserScreen = (): IDashboardScreenFlowResult => {
  const portalUser = useContext(UserContext);
  const profile = useProfile();

  const { next } = CalculateProfileCompletion(profile);

  const [isShowProfile, setIsShowProfile] = useState(true);

  const [dashboardFlow, setDashboardFlow] = useState(-1);

  const [application, setApplication] = useState<IApplication | undefined>(undefined);

  const [applications, setApplications] = useState<IApplication[] | undefined>(undefined);

  const isApplicationStarted = useCallback(() => {
    if (application) {
      setIsShowProfile(true);

      setDashboardFlow(1); // application started
    } else {
      setDashboardFlow(0); // application is not started yet

      setIsShowProfile(false);
    }
  }, [application]);

  useEffect(() => {
    if (next >= 0) {
      isApplicationStarted(); // incomplete profile
    }

    if (next === -1) {
      setIsShowProfile(true);

      isApplicationStarted(); // complete profile
    }
  }, [next, isApplicationStarted]);

  useEffect(() => {
    if (applications) {
      const tempApplication = applications.filter(app => app.state === 'draft');

      setApplication(tempApplication.length ? tempApplication[0] : undefined);

      if (tempApplication.length) {
        setIsShowProfile(true);

        setDashboardFlow(1);
      }
    }
  }, [applications]);

  const updateApplications = useCallback(() => {
    void (async () => setApplications((await portalUser?.getApplication()) || undefined))();
  }, [portalUser]);

  useEffect(() => {
    updateApplications();
  }, [portalUser, updateApplications]);

  return { isShowProfile, dashboardFlow, application, profile };
};
