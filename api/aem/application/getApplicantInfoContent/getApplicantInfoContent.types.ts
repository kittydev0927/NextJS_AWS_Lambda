import type { IApplicationItem as ITipsApplicationItem } from '#api/aem/tipsSidebarContentQuery/tipsSidebarContentQuery.types';

export interface IApplicantInfoRawData {
  data: {
    cPPApplicationTipsList: {
      items: ITipsApplicationItem[];
    };
  };
}

export interface IApplicantInfoData {
  cPPApplicationTipsList: {
    items: ITipsApplicationItem[];
  };
}
