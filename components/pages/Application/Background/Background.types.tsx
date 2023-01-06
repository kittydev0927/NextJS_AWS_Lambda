import type { IBackgroundData } from '#api/aem/application/getBackgroundContent/getBackgroundContent.types';

export interface BackgroundProps {
  pageData: IBackgroundData;
  primaryApplicant?: boolean;
}
