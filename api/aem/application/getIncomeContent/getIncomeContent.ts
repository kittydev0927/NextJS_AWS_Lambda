import type { IIncomeContentRawData, IIncomeData } from './getIncomeContent.types';

export const getIncomeContent = async () => {
  const apiUrl = process.env.AEM_CONTENT_FRAGMENTS || '';
  const graphQLQuery = JSON.stringify({
    query: `{
        incomeContent: cPPGenericCFList(
          filter: {cfId: {_expressions: [{value: "appStep1b", _operator: EQUALS}]}}
      ) {
          items {
            _path
            cfId
            cfHeading {
              json
          }
          cfContent {
              json
          }
          contentType
      }
    }
      cPPApplicationTipsList( filter:{
        applicationTipId : {
          _expressions: [{
              value: "apptipstep1a-1e-9b"
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
  const data = (await res.json()) as IIncomeContentRawData;
  const appContent = data.data as IIncomeData;
  return appContent;
};
