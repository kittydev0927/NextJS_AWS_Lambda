import type { IApplicationItem } from '#api/aem/applicationContentFragmentQuery/applicationContentFragmentQuery.types';
import type { IApplicationItem as ITipsApplicationItem } from '#api/aem/tipsSidebarContentQuery/tipsSidebarContentQuery.types';

export interface ISampleData {
  applicantsContent: {
    items: IApplicationItem[];
  };
  backgroundContent: {
    items: IApplicationItem[];
  };
  incomeContent: {
    items: IApplicationItem[];
  };
  inviteModalContent: {
    items: IApplicationItem[];
  };
  subContent: {
    items: IApplicationItem[];
  };
  cPPApplicationTipsList: {
    items: ITipsApplicationItem[];
  };
}

export const sampleApplicationPageData = {
  applicantsContent: {
    items: [
      {
        _path: '/content/dam/customerportal/us/en/application-steps/application-step-1a-or-1e',
        cfId: 'appStep1Aor1E',
        cfHeading: {
          json: [
            {
              nodeType: 'header',
              style: 'h1',
              content: [
                {
                  nodeType: 'text',
                  value: 'Sample Header',
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
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
              ],
            },
          ],
        },
        contentType: ['appsteps'],
      },
    ],
  },
  incomeContent: {
    items: [
      {
        _path: '/content/dam/customerportal/us/en/application-steps/application-step-1b',
        cfId: 'appStep1b',
        cfHeading: {
          json: [
            {
              nodeType: 'paragraph',
              content: [
                {
                  nodeType: 'text',
                  value: 'Send an Invitation by Email',
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
                    'Just let us know the name and email of the person you’d like to apply for this home with you, and we’ll send them an invitation to complete the application.',
                },
              ],
            },
          ],
        },
        contentType: ['appsteps'],
      },
    ],
  },
  inviteModalContent: {
    items: [
      {
        _path: '/content/dam/customerportal/us/en/application-steps/application-step-1b',
        cfId: 'appStep1b',
        cfHeading: {
          json: [
            {
              nodeType: 'paragraph',
              content: [
                {
                  nodeType: 'text',
                  value: 'Sed ut perspiciatis unde omnis',
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
                    'Iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
                },
              ],
            },
          ],
        },
        contentType: ['appsteps'],
      },
    ],
  },
  subContent: {
    items: [
      {
        _path: '/content/dam/customerportal/us/en/leasing-app-cfs/invite-applicants---subtext',
        cfId: 'invite-applicants-subtext',
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
                  value: 'Sed ut perspiciatis unde omnis',
                },
              ],
            },
          ],
        },
        contentType: ['inviteapplicantsmodal'],
      },
    ],
  },
  cPPApplicationTipsList: {
    items: [
      {
        applicationTipId: 'apptipstep1a-1e-9b',
        applicationTipHeading: {
          json: [
            {
              nodeType: 'header',
              style: 'h1',
              content: [
                {
                  nodeType: 'text',
                  value: 'adipisci velit',
                  format: {
                    variants: ['bold'],
                  },
                },
              ],
            },
          ],
        },
        applicationTipContent: {
          json: [
            {
              nodeType: 'header',
              style: 'h2',
              content: [
                {
                  nodeType: 'text',
                  value: 'Applicants',
                  format: {
                    variants: ['bold'],
                  },
                },
              ],
            },
            {
              nodeType: 'paragraph',
              content: [
                {
                  nodeType: 'text',
                  value:
                    ' sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam',
                },
              ],
            },
            {
              nodeType: 'header',
              style: 'h2',
              content: [
                {
                  nodeType: 'text',
                  value: 'Other Qualification Criteria',
                  format: {
                    variants: ['bold'],
                  },
                },
              ],
            },
            {
              nodeType: 'paragraph',
              content: [
                {
                  nodeType: 'text',
                  value:
                    'sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam',
                },
              ],
            },
            {
              nodeType: 'paragraph',
              content: [
                {
                  nodeType: 'text',
                  value:
                    'Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam <a href="https://rentprogress.com">here</a>',
                },
              ],
            },
          ],
        },
      },
    ],
  },
  backgroundContent: {
    items: [
      {
        _path: '/content/dam/customerportal/us/en/application-steps/application-step-2',
        cfId: 'appstep2',
        cfHeading: {
          json: [
            {
              nodeType: 'header',
              style: 'h1',
              content: [
                {
                  nodeType: 'text',
                  value: 'Please select any that apply to you.',
                },
              ],
            },
          ],
        },
        cfContent: {
          json: [
            {
              nodeType: 'unordered-list',
              content: [
                {
                  nodeType: 'list-item',
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Bankruptcy (Pending)',
                    },
                  ],
                },
                {
                  nodeType: 'list-item',
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Eviction (Prior or Pending)',
                    },
                  ],
                },
                {
                  nodeType: 'list-item',
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Felony Conviction (in the Last 6 Years)',
                    },
                  ],
                },
                {
                  nodeType: 'list-item',
                  content: [
                    {
                      nodeType: 'text',
                      value: 'None of the Above',
                    },
                  ],
                },
              ],
            },
          ],
        },
        contentType: ['appsteps'],
      },
    ],
  },
};
