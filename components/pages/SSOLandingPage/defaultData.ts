import { theme } from '#styles/styles';

export const defaultData = (windowPath: string) => [
  {
    mediaImg: '/icon-browse.svg',
    mediaImgColor: theme.colors.persianGreen,
    heading: 'Browse and Tour Homes',
    body: 'Tell us about your dream home and get matched with “the one.” ',
    url: `${windowPath}/login`,
    id: 0,
    mediaImgIconHeight: 77,
    mediaImgIconWidth: 93,
  },
  {
    mediaImg: '/icon-current-residents.svg',
    mediaImgColor: theme.colors.darkTangerine,
    heading: 'Current Residents',
    body: 'Log in to pay rent, make a service request and more.',
    url: 'https://rentprogress.com/residentservices/',
    id: 1,
    mediaImgIconHeight: 88,
    mediaImgIconWidth: 80,
  },
  {
    mediaImg: '/icon-continue-application.svg',
    mediaImgColor: theme.colors.coral,
    heading: 'Continue Your Application',
    body: 'Don’t let your perfect home slip through your fingers—take the next steps.',
    url: `${windowPath}/login`,
    id: 2,
    mediaImgIconHeight: 67,
    mediaImgIconWidth: 108,
  },
];
