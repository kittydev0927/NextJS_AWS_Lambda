import type { ILoginLandingContent } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import type { ILoginPageContentQuery } from '#components/forms/organisms/RegistrationForm/RegistrationForm.types';

export interface INodeContentContent {
  nodeType: string;
  value: string;
}

export interface INodeContent {
  content?: INodeContentContent[];
  value?: string;
}

export interface IJSONContent {
  content: INodeContent[];
  nodeType: string;
  style?: string;
}

export interface ILoginLandingItem {
  _path?: string;
  cfContent: {
    json: IJSONContent[];
  };
  cfHeading: {
    json: IJSONContent[];
  };
  cfId: string;
  contentType: string[];
}

export interface IUserAuthContent {
  loginLandingPageContent: ILoginLandingContent[];
}

export interface ILoginLandingPageContent extends ILoginPageContentQuery {
  loginLandingPageContent?: ILoginLandingItem[];
}

export interface ILoginLandingPageData {
  data: {
    cPPGenericCFList: {
      items: ILoginLandingItem[];
    };
  };
}
