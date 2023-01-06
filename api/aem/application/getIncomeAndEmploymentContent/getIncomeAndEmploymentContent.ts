import type { IIncomeAndEmploymentData, IIncomeAndEmploymentRawData } from './getIncomeAndEmploymentContent.types';

export const getIncomeAndEmploymentContent = async () => {
  const apiUrl = process.env.AEM_CONTENT_FRAGMENTS || '';
  const graphQLQuery = JSON.stringify({
    query: `{
      cPPApplicationTipsList( filter:{
        applicationTipId : {
          _expressions: [{
              value: "apptipstep9a"
              _operator: EQUALS
            }]
        }
      }
      ) {
        items {
          applicationTipId
          applicationTipHeading { json }
          applicationTipContent { json }
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
  const data = (await res.json()) as IIncomeAndEmploymentRawData;
  const appContent = data.data as IIncomeAndEmploymentData;
  return appContent;
};
