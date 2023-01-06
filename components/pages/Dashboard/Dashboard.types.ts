import type { ILoginPageContentQuery } from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';

export interface DashboardProps extends ILoginPageContentQuery {
  breakpointProp?: 'sm' | 'lg';
  isReserved?: boolean;
  profileTestingVal?: number;
  coapplicantLinkInvalid?: boolean; // placeholder until this info can be pulled from backend
  homeNoLongerAvailable?: boolean; // placeholder until this info can be pulled from backend
}
