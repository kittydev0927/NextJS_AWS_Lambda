import type { ITipsData } from './tipsSidebarContentQuery.types';

// Function to retrieve the application step content for the Tips Sidebar
export const getStepTip = async (tipId: string) => {
  const apiUrl = process.env.AEM_CONTENT_FRAGMENTS || '';
  const graphQLQuery = JSON.stringify({
    query: `{
        cPPApplicationTipsList( filter:{
          applicationTipId : {
            _expressions: [{
                value: "${tipId}"
                _operator: EQUALS
              }]
          }
        }
        ) {
          items {
            applicationTipId
            applicationTipHeading {json}
            applicationTipContent {json}
        }
      }
    } `,
    variables: {},
  });
  const res = await fetch(apiUrl.toString(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: graphQLQuery,
  });
  const data = (await res.json()) as ITipsData;
  const appTips = data.data.cPPApplicationTipsList.items[0];
  return appTips;
};
