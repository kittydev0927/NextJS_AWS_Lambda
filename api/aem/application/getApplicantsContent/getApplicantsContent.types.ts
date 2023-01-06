import type { IApplicationItem } from '#api/aem/applicationContentFragmentQuery/applicationContentFragmentQuery.types';
import type { IApplicationItem as ITipsApplicationItem } from '#api/aem/tipsSidebarContentQuery/tipsSidebarContentQuery.types';

export interface IApplicantsContentRawData {
  data: {
    applicantsContent: {
      items: IApplicationItem[];
    };
    inviteModalContent: {
      items: IApplicationItem[];
    };
    subContent: {
      items: IApplicationItem[];
    };
    cPPApplicationTipsList: {
      items: ITipsApplicationItem[];
    };
  };
}

export interface IApplicantsData {
  applicantsContent: {
    items: IApplicationItem[];
  };
  inviteModalContent: {
    items: IApplicationItem[];
  };
  subContent: {
    items: IApplicationItem[];
  };
  cPPApplicationTipsList: {
    items: ITipsApplicationItem[];
  };
}
