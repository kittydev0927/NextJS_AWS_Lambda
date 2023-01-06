export const getSubmenuItems = (step: string) => [
  {
    active: true,
    color: '#ffffff',
    href: '/dashboard',
    label: 'Dashboard',
    sx: {},
  },
  {
    active: false,
    color: '#ffffff',
    href: '/saved',
    label: 'Saved Homes',
    sx: {},
  },
  {
    active: false,
    color: '#ffffff',
    href: `/profile/${step}`,
    label: 'Profile Builder',
    sx: {},
  },
  {
    active: false,
    color: '#ffffff',
    href: '/tours',
    label: 'My Tours',
    sx: {},
  },
];

export const SUB_MENU_ITEMS = [
  {
    active: true,
    color: '#ffffff',
    href: '/dashboard',
    label: 'Dashboard',
    sx: {},
  },
  {
    active: false,
    color: '#ffffff',
    href: '/saved',
    label: 'Saved Homes',
    sx: {},
  },
  {
    active: false,
    color: '#ffffff',
    href: '/profile/home-location',
    label: 'Profile Builder',
    sx: {},
  },
  {
    active: false,
    color: '#ffffff',
    href: '/tours',
    label: 'My Tours',
    sx: {},
  },
];

export const SUB_MENU_ITEMS_PROFILE_ACTIVE = [
  {
    active: false,
    color: '#ffffff',
    href: '/dashboard',
    label: 'Dashboard',
    sx: {},
  },
  {
    active: false,
    color: '#ffffff',
    href: '/saved',
    label: 'Saved Homes',
    sx: {},
  },
  {
    active: true,
    color: '#ffffff',
    href: '/settings',
    label: 'Profile Builder',
    sx: {},
  },
  {
    active: false,
    color: '#ffffff',
    href: '/tours',
    label: 'My Tours',
    sx: {},
  },
  {
    active: false,
    color: '#ffffff',
    href: '/documents',
    label: 'Documents',
    sx: {},
  },
];

export const RESIDENT_MENU_ITEMS = [];

export const SUB_MENU_ITEMS_SAVED_HOMES_ACTIVE = [
  {
    active: false,
    color: '#ffffff',
    href: '/dashboard',
    label: 'Dashboard',
    sx: {},
  },
  {
    active: true,
    color: '#ffffff',
    href: '/saved',
    label: 'Saved Homes',
    sx: {},
  },
  {
    active: false,
    color: '#ffffff',
    href: '/settings',
    label: 'Profile Builder',
    sx: {},
  },
  {
    active: false,
    color: '#ffffff',
    href: '/tours',
    label: 'My Tours',
    sx: {},
  },
  {
    active: false,
    color: '#ffffff',
    href: '/documents',
    label: 'Documents',
    sx: {},
  },
];
