import type { IApplicationItem } from '#api/aem/applicationContentFragmentQuery/applicationContentFragmentQuery.types';
import type { IApplicationItem as ITipsApplicationItem } from '#api/aem/tipsSidebarContentQuery/tipsSidebarContentQuery.types';

export interface IIncomeContentRawData {
  data: {
    incomeContent: {
      items: IApplicationItem[];
    };
    cPPApplicationTipsList: {
      items: ITipsApplicationItem[];
    };
  };
}

export interface IIncomeData {
  incomeContent: {
    items: IApplicationItem[];
  };
  cPPApplicationTipsList: {
    items: ITipsApplicationItem[];
  };
}
