import type { IApplicationItem as ITipsApplicationItem } from '#api/aem/tipsSidebarContentQuery/tipsSidebarContentQuery.types';

export interface IOccupantsContentRawData {
  data: {
    cPPApplicationTipsList: {
      items: ITipsApplicationItem[];
    };
  };
}

export interface IOccupantsData {
  cPPApplicationTipsList: {
    items: ITipsApplicationItem[];
  };
}

export interface IOccupants {
  pageData: IOccupantsData;
}
