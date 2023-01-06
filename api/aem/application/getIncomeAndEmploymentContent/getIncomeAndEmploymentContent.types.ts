import type { IApplicationItem as ITipsApplicationItem } from '#api/aem/tipsSidebarContentQuery/tipsSidebarContentQuery.types';

export interface IIncomeAndEmploymentRawData {
  data: {
    cPPApplicationTipsList: {
      items: ITipsApplicationItem[];
    };
  };
}

export interface IIncomeAndEmploymentData {
  cPPApplicationTipsList: {
    items: ITipsApplicationItem[];
  };
}
