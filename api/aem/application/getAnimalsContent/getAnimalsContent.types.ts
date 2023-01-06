import type { IApplicationItem as ITipsApplicationItem } from '#api/aem/tipsSidebarContentQuery/tipsSidebarContentQuery.types';

export interface IAnimalsRawData {
  data: {
    cPPApplicationTipsList: {
      items: ITipsApplicationItem[];
    };
  };
}

export interface IAnimalsData {
  cPPApplicationTipsList: {
    items: ITipsApplicationItem[];
  };
}
