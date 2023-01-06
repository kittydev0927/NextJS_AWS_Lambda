import { BASE_URL } from '#constants/constants';

export const footerLinks = [
  {
    text: 'Qualification Requirements',
    url: `${BASE_URL}/before-you-apply/`,
  },
  {
    text: 'Before You Apply',
    url: `${BASE_URL}/before-you-apply/`,
  },
  {
    text: 'Application Process',
    url: `${BASE_URL}/step-by-step-guide-to-the-lease-application-/`,
  },
  {
    text: 'Beware of Rental Scams',
    url: `${BASE_URL}/watch-out-for-scams/`,
  },
  {
    text: 'Pets',
    url: `${BASE_URL}/progress-residential-pets/`,
  },
  {
    text: 'Coming Soon Homes',
    url: `${BASE_URL}/how-coming-soon-works/`,
  },
  {
    text: 'Services & Amenities',
    url: `${BASE_URL}/available-service-and-amenities/`,
  },
  {
    text: 'Transfer Homes',
    url: `${BASE_URL}/home-to-home-transfers/`,
  },
  {
    text: 'Touring Our Homes',
    url: `${BASE_URL}/touring-progress-homes/`,
  },
  {
    text: 'Moving In',
    url: `${BASE_URL}/orientation.html/`,
  },
  {
    text: 'Renters Insurance',
    url: `${BASE_URL}/guide-to-renters-insurance/`,
  },
  {
    text: 'Setting Up & Managing Utilities',
    url: `${BASE_URL}/managing-utilities/`,
  },
];

export const smallLinkList = [
  {
    heading: 'Contact Us',
    section: 'section1',
    links: [
      { text: 'Progress Residential', url: `${BASE_URL}` },
      {
        text: '7500 N. Dobson Rd Scottsdale, AZ 85256',
        url: 'https://www.google.com/maps/place/Progress+Residential/@33.5457067,-112.4362459,10z/data=!4m5!3m4!1s0x89c258e4900fb92b:0x25b4f2683cd7fd7!8m2!3d33.5457067!4d-111.8759432',
      },
      { text: 'customercare@rentprogress.com', url: 'mailto:CustomerCare@rentprogress.com' },
    ],
  },
  {
    heading: 'Company',
    section: 'section2',
    links: [
      { text: 'About Us', url: `${BASE_URL}/about-us/` },
      { text: 'Contact Us', url: `${BASE_URL}/contact-us/` },
      { text: 'Careers', url: 'https://jobs.rentprogress.com' },
      { text: 'Management Services', url: `${BASE_URL}/prms-management/` },
      { text: 'Terms & Privacy', url: `${BASE_URL}/terms-and-privacy/` },
    ],
  },
  {
    heading: 'Resources',
    section: 'section3',
    links: [
      { text: 'FAQs', url: `${BASE_URL}/faq/` },
      { text: 'Resident Services', url: `${BASE_URL}/residentservices/` },
    ],
  },
];

export const navigationButtons = [
  {
    id: 1,
    text: 'Find Your Home',
    options: [
      {
        text: 'Search Locations',
        url: BASE_URL,
      },
      {
        text: 'Qualifications Requirements',
        url: BASE_URL,
      },
      {
        text: 'Before you Apply',
        url: BASE_URL,
      },
      {
        text: 'Application Process',
        url: BASE_URL,
      },
    ],
  },
  {
    id: 2,
    text: 'Resources',
    options: [
      {
        text: 'FAQs',
        url: BASE_URL,
      },
      {
        text: 'Progress Residential Blog',
        url: BASE_URL,
      },
      {
        text: 'Covid-19',
        url: BASE_URL,
      },
    ],
    subOptions: [
      {
        text: 'Residential Login',
        url: BASE_URL,
      },
      {
        text: 'Residential Services',
        url: BASE_URL,
      },
      {
        text: 'All About Payments',
        url: BASE_URL,
      },
      {
        text: 'Rent Assistance',
        url: BASE_URL,
      },
      {
        text: 'Living in an HOA Community',
        url: BASE_URL,
      },
      {
        text: 'Home Care & Maintenance',
        url: BASE_URL,
      },
      {
        text: 'Resource Videos',
        url: BASE_URL,
      },
      {
        text: 'Renewing Your Lease',
        url: BASE_URL,
      },
      {
        text: 'Ending Your Lease',
        url: BASE_URL,
      },
      {
        text: 'Moving Out',
        url: BASE_URL,
      },
    ],
  },
  {
    id: 3,
    text: 'About',
    options: [
      {
        text: 'Why Progress',
        url: BASE_URL,
      },
      {
        text: 'the Progress Residential Process',
        url: BASE_URL,
      },
      {
        text: 'Progress In The News',
        url: BASE_URL,
      },
      {
        text: 'Careers',
        url: BASE_URL,
      },
      {
        text: 'Pets',
        url: BASE_URL,
      },
      {
        text: 'Smart Homes',
        url: BASE_URL,
      },
      {
        text: 'Property Management',
        url: BASE_URL,
      },
    ],
  },
  {
    id: 4,
    text: 'Contact Us',
    options: [],
  },
];

export const authUserMenu = [
  {
    id: 1,
    text: '',
    options: [
      {
        text: 'Account Settings',
        url: `/settings`,
      },
    ],
  },
];
