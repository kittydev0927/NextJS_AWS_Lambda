import type { IOccupantsContentRawData, IOccupantsData } from './getOccupantsContent.types';

export const getOccupantsContent = async () => {
  const apiUrl = process.env.AEM_CONTENT_FRAGMENTS || '';
  const graphQLQuery = JSON.stringify({
    query: `{
      cPPApplicationTipsList( filter:{
        applicationTipId : {
          _expressions: [{
              value: "apptipstep6a"
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
  }`,
    variables: {},
  });
  const res = await fetch(apiUrl.toString(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: graphQLQuery,
  });
  const data = (await res.json()) as IOccupantsContentRawData;
  const appContent = data.data as IOccupantsData;
  return appContent;
};
