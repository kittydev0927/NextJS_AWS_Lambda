import React from 'react';

import type { SharedComponentProps } from './SharedComponent.types';

export const SharedComponent: React.FC<SharedComponentProps> = ({ data }) => {
  return <div data-testid="shared-component-page" dangerouslySetInnerHTML={{ __html: data.text }}></div>;
};
