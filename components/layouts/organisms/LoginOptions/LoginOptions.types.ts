import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';

export interface ILoginOptions {
  onNewApplicantClick: React.MouseEventHandler;
  userAuthContent: IUserAuthData;
}
