import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';

export interface ILoginPageContentQuery {
  userAuthContent: IUserAuthData;
  homeNoLongerAvailable?: boolean;
}

export interface RegistrationFormProps extends ILoginPageContentQuery {
  onSuccess?: () => unknown | undefined;
  showIllustration?: boolean;
  setEmailAddress?: React.Dispatch<React.SetStateAction<string>>;
}
