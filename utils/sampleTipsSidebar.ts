export const appTips = {
  applicationTipId: 'apptipstep2',
  applicationTipHeading: {
    json: [
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: 'Application Tips',
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
        style: 'h3',
        content: [
          {
            nodeType: 'text',
            value: 'Background',
          },
        ],
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: 'All applicants will complete a credit and background screening.',
          },
        ],
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value:
              'A criminal background check is completed for each applicant. An application could be denied for any of the following convictions:',
          },
        ],
      },
      {
        nodeType: 'unordered-list',
        content: [
          {
            nodeType: 'list-item',
            content: [
              {
                nodeType: 'text',
                value:
                  'Felony offenses involving crimes against children, sex-related crimes, homicide, kidnapping, drug sale, manufacturing, distribution, or any felonies within the past ten years.',
              },
            ],
          },
          {
            nodeType: 'list-item',
            content: [
              {
                nodeType: 'text',
                value:
                  'Misdemeanors involving crimes against persons, property, or animals, financial crimes; (e.g., bad check, identity theft, fraud), and other drugs, prostitution, and/or weapons-related offenses within the past three years.',
              },
            ],
          },
        ],
      },
    ],
  },
};
