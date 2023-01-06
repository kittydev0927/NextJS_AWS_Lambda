import React from 'react';

import type { IApplicationItem } from '#api/aem/tipsSidebarContentQuery/tipsSidebarContentQuery.types';
import { TipsInnerContent } from '#components/layouts/molecules/TipsSideBar/InnerContent/TipsInnerContent';
import { appTips } from '#utils/sampleTipsSidebar';
import { render, screen } from '#utils/testing-library';

describe('TipsInnerContent', () => {
  it('the component renders with tips content', () => {
    render(<TipsInnerContent appTips={appTips as IApplicationItem} />);
    expect(screen.getByText(/All applicants will complete a credit and background screening./i)).toBeVisible();
  });
});
