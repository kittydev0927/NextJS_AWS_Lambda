export const sampleUserAuthContent = {
  headerContent: {
    items: [
      {
        cfId: 'register-main',
        cfHeading: {
          json: [
            {
              nodeType: 'header',
              style: 'h1',
              content: [
                {
                  nodeType: 'text',
                  value: "We haven't been officially introduced",
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
                  value: "We'd like to get to know you and help you find your perfect rental home. Register below.",
                },
              ],
            },
          ],
        },
        contentType: ['userauth'],
      },
    ],
  },
  tcContent: {
    items: [
      {
        cfId: 'register-privacychkbox',
        cfHeading: {
          json: null,
        },
        cfContent: {
          json: [
            {
              nodeType: 'paragraph',
              content: [
                {
                  nodeType: 'text',
                  value:
                    'By checking here you are agreeing to Progress Residential\'s <a href="https://rentprogress.com/terms-and-privacy/" target="_blank">Terms & Privacy Policy</a>. *',
                },
              ],
            },
          ],
        },
        contentType: ['userauth', 'acctpersonalinfo'],
      },
    ],
  },
  consentContent: {
    items: [
      {
        cfId: 'register-consentchkbox',
        cfHeading: {
          json: null,
        },
        cfContent: {
          json: [
            {
              nodeType: 'paragraph',
              content: [
                {
                  nodeType: 'text',
                  value:
                    'By checking here and clicking the Register button, you agree that we may call you at the number you entered above or email you at the email address you entered above with reminders, offers and other info, including possibly using automated technology, text messages, email, prerecorded messages and artificial voices. Consent is not a condition of purchase. Reply STOP to opt out of text messaging. Standard message and data rates apply.',
                },
              ],
            },
          ],
        },
        contentType: ['userauth', 'acctpersonalinfo'],
      },
    ],
  },
  signInContent: {
    items: [
      {
        _path: '/content/dam/customerportal/us/en/user-auth/sign-in',
        cfId: 'sign-in',
        cfHeading: {
          json: [
            {
              nodeType: 'header',
              style: 'h1',
              content: [
                {
                  nodeType: 'text',
                  value: 'Welcome! Come on in and make yourself at home',
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
                  value:
                    'Current Residents, to make payments or access your account, <a href="https://rentprogress.securecafe.com/residentservices/apartmentsforrent/userlogin.aspx">sign in here</a>',
                },
              ],
            },
          ],
        },
        contentType: ['userauth'],
      },
    ],
  },
  loginLandingPageContent: {
    items: [
      {
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
    ],
  },
};
