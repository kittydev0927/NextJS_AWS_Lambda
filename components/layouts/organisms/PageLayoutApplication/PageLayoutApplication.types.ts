import type { Theme } from '@mui/material';

export interface IPageLayoutApplication {
  theme?: Theme;
  showBackToTop?: boolean;
  pageName?: string;
  infoText: string;
}
