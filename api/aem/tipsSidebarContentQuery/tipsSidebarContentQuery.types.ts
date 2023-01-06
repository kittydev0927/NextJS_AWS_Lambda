export interface INodeContentContent {
  nodeType: string;
  value: string;
}
export interface INodeContent {
  content: INodeContentContent[];
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
export interface IApplicationTip {
  json: IJSONContent[];
}
export interface IApplicationItem {
  _path?: string;
  applicationTipContent: IApplicationTip;
  applicationTipHeading: IApplicationTip;
  applicationTipId: string;
}

export interface ITipsData {
  data: {
    cPPApplicationTipsList: {
      items: IApplicationItem[];
    };
  };
}

export interface ITips {
  appTips: IApplicationItem;
}
