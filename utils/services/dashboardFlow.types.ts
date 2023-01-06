import type { IProfile } from '#auth/IProfile';
import type { IApplication } from '#models/IApplication';

export interface IDashboardScreenFlowResult {
  isShowProfile: boolean;
  dashboardFlow: number;
  application?: IApplication;
  profile?: IProfile;
}
