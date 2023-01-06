import type { IApplicationItem } from '../applicationContentFragmentQuery/applicationContentFragmentQuery.types';

export interface IUserAuthRawData {
  data: {
    headerContent: {
      items: IApplicationItem[];
    };
    tcContent: {
      items: IApplicationItem[];
    };
    consentContent: {
      items: IApplicationItem[];
    };
    loginLandingPageContent: {
      items: IApplicationItem[];
    };
  };
}
export interface IUserAuthData {
  headerContent: {
    items: IApplicationItem[];
  };
  tcContent: {
    items: IApplicationItem[];
  };
  consentContent: {
    items: IApplicationItem[];
  };
  loginLandingPageContent: {
    items: IApplicationItem[];
  };
  signInContent?: {
    items: IApplicationItem[];
  };
}

export interface ILoginLandingContent {
  items: IApplicationItem[];
}
