import type { IApplicationItem } from '#api/aem/applicationContentFragmentQuery/applicationContentFragmentQuery.types';
import type { IApplicationItem as ITipsApplicationItem } from '#api/aem/tipsSidebarContentQuery/tipsSidebarContentQuery.types';

export interface IBackgroundRawData {
  data: {
    backgroundContent: {
      items: IApplicationItem[];
    };
    cPPApplicationTipsList: {
      items: ITipsApplicationItem[];
    };
  };
}

export interface IBackgroundData {
  backgroundContent: {
    items: IApplicationItem[];
  };
  cPPApplicationTipsList: {
    items: ITipsApplicationItem[];
  };
}
