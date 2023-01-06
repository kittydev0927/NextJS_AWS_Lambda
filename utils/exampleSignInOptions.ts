export const exampleSignInContent = {
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
};
