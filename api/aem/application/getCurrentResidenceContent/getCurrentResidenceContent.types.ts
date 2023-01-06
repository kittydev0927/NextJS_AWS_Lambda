import type { IApplicationItem as ITipsApplicationItem } from '#api/aem/tipsSidebarContentQuery/tipsSidebarContentQuery.types';

export interface ICurrentResidenceRawData {
  data: {
    cPPApplicationTipsList: {
      items: ITipsApplicationItem[];
    };
  };
}

export interface ICurrentResidenceData {
  cPPApplicationTipsList: {
    items: ITipsApplicationItem[];
  };
}
