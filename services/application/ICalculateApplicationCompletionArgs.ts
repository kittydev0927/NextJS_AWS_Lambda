import type { IProfile } from '#auth/IProfile';
import type { IApplication } from '#models/IApplication';

export interface ICalculateApplicationCompletionArgs {
  application?: IApplication;
  profile: IProfile;
}
