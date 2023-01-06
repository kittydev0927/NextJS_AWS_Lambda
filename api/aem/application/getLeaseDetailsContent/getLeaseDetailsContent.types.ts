import type { IApplicationItem as ITipsApplicationItem } from '#api/aem/tipsSidebarContentQuery/tipsSidebarContentQuery.types';

export interface ILeaseDetailsContentRawData {
  data: {
    cPPApplicationTipsList: {
      items: ITipsApplicationItem[];
    };
  };
}

export interface ILeaseDetailsData {
  cPPApplicationTipsList: {
    items: ITipsApplicationItem[];
  };
}
