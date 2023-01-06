export const exampleLoginOptions = [
  {
    _path: '/content/dam/customerportal/us/en/user-auth/sign-landing--page---welcome',
    cfId: 'sign-in-landing-welcome',
    cfHeading: {
      json: [
        {
          nodeType: 'header',
          style: 'h1',
          content: [
            {
              nodeType: 'text',
              value: 'Welcome!',
            },
          ],
        },
      ],
    },
    cfContent: {
      json: [
        {
          nodeType: 'paragraph',
          content: [
            {
              nodeType: 'text',
              value: 'Please select a login option below.',
            },
          ],
        },
      ],
    },
    contentType: ['userauthlanding'],
  },
  {
    _path: '/content/dam/customerportal/us/en/user-auth/sign-landing-page---prospects',
    cfId: 'sign-in-landing-prospects',
    cfHeading: {
      json: [
        {
          nodeType: 'header',
          style: 'h1',
          content: [
            {
              nodeType: 'text',
              value: 'Browse and Save Homes',
            },
          ],
        },
      ],
    },
    cfContent: {
      json: [
        {
          nodeType: 'paragraph',
          content: [
            {
              nodeType: 'text',
              value: 'Log in to find, save, and view your favorite rental homes.',
            },
          ],
        },
      ],
    },
    contentType: ['userauthlanding'],
  },
  {
    _path: '/content/dam/customerportal/us/en/user-auth/sign-landing-page---residents',
    cfId: 'sign-in-landing-residents',
    cfHeading: {
      json: [
        {
          nodeType: 'header',
          style: 'h1',
          content: [
            {
              nodeType: 'text',
              value: 'Current Residents & Applicants',
            },
          ],
        },
      ],
    },
    cfContent: {
      json: [
        {
          nodeType: 'paragraph',
          content: [
            {
              nodeType: 'text',
              value: 'Log in to finish your application, make payments, request service, and more.',
            },
          ],
        },
      ],
    },
    contentType: ['userauthlanding'],
  },
];
