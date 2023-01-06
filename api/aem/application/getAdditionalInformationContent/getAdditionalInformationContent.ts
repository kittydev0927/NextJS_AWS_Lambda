import type {
  IAdditionalInformationData,
  IAdditionalInformationRawData,
} from './getAdditionalInformationContent.types';

export const getAdditionalInformationContent = async () => {
  const apiUrl = process.env.AEM_CONTENT_FRAGMENTS || '';
  const graphQLQuery = JSON.stringify({
    query: `{
      cPPApplicationTipsList( filter:{
        applicationTipId : {
          _expressions: [{
              value: "apptipstep8"
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
  const data = (await res.json()) as IAdditionalInformationRawData;
  const appContent = data.data as IAdditionalInformationData;
  return appContent;
};
