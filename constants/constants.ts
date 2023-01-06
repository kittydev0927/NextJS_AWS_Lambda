export enum Countries {
  US = 'US',
}

export const NO_AUTH_PAGES = ['/', '/login'];

export const ACCESSIBLE_PAGES = ['/edit-password', '/edit-personal-information', '/settings'];

export const BASE_URL = process.env.NEXT_PUBLIC_AEM_URL || process.env.STORYBOOK_AEM_URL || '';
