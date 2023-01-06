import type React from 'react';

export interface PaginationControlProps {
  pageCount?: number;
  onClickNext: (event: React.MouseEvent) => void;
  onClickPrev: (event: React.MouseEvent) => void;
}

export interface StyledPaginationCenterProps {
  count: number;
}

export interface StyledPageIconProps {
  currentpage: number;
  index: number;
}
