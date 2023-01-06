import type { IBackgroundData, IBackgroundRawData } from './getBackgroundContent.types';

export const getBackgroundContent = async () => {
  const apiUrl = process.env.AEM_CONTENT_FRAGMENTS || '';
  const graphQLQuery = JSON.stringify({
    query: `{
      backgroundContent: cPPGenericCFList(
        filter: {cfId: {_expressions: [{value: "appstep2", _operator: EQUALS}]}}
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
              value: "apptipstep2"
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
  const data = (await res.json()) as IBackgroundRawData;
  const appContent = data.data as IBackgroundData;
  return appContent;
};
