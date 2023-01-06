import type { IApplicationItem as ITipsApplicationItem } from '#api/aem/tipsSidebarContentQuery/tipsSidebarContentQuery.types';

export interface IAdditionalInformationRawData {
  data: {
    cPPApplicationTipsList: {
      items: ITipsApplicationItem[];
    };
  };
}

export interface IAdditionalInformationData {
  cPPApplicationTipsList: {
    items: ITipsApplicationItem[];
  };
}
