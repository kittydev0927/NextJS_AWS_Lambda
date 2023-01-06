import type { IApplicationItem as ITipsApplicationItem } from '#api/aem/tipsSidebarContentQuery/tipsSidebarContentQuery.types';

export interface IPaymentContentRawData {
  data: {
    cPPApplicationTipsList: {
      items: ITipsApplicationItem[];
    };
  };
}

export interface IPaymentData {
  cPPApplicationTipsList: {
    items: ITipsApplicationItem[];
  };
}

export interface IPayment {
  pageData: IPaymentData;
}
