import type { ILeaseDetailsContentRawData, ILeaseDetailsData } from './getLeaseDetailsContent.types';

export const getLeaseDetailsContent = async () => {
  const apiUrl = process.env.AEM_CONTENT_FRAGMENTS || '';
  const graphQLQuery = JSON.stringify({
    query: `{
      cPPApplicationTipsList( filter:{
        applicationTipId : {
          _expressions: [{
              value: "apptipstep3a-b-c"
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
  const data = (await res.json()) as ILeaseDetailsContentRawData;
  const appContent = data.data as ILeaseDetailsData;
  return appContent;
};
