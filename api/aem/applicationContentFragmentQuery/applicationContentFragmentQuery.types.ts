import type { IApplicantsData } from '../application/getApplicantsContent/getApplicantsContent.types';
export interface INodeContentContent {
  nodeType: string;
  value: string;
}
export interface INodeContent {
  content?: INodeContentContent[];
  format?: {
    variants: string[];
  };
  nodeType: string;
  value?: string;
}
export interface IJSONContent {
  content: INodeContent[];
  nodeType: string;
}
export interface IApplicationContent {
  json: IJSONContent[];
}
export interface IApplicationItem {
  _path?: string;
  cfContent: IApplicationContent;
  cfHeading: IApplicationContent;
  cfId: string;
  contentType: string[];
}
export interface IAppContentData {
  data: {
    cPPGenericCFList: {
      items: IApplicationItem[];
    };
  };
}
export interface IApplicantsPage {
  pageData: IApplicantsData;
}
