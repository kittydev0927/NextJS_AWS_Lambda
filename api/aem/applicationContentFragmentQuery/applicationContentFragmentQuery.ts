import type { IAppContentData } from './applicationContentFragmentQuery.types';

// Function to retrieve general content fragments by cfId
export const getContent = async (cfId: string) => {
  const apiUrl = process.env.AEM_CONTENT_FRAGMENTS || '';
  const graphQLQuery = JSON.stringify({
    query: `{
        cPPGenericCFList(
          filter: {cfId: {_expressions: [{value: "${cfId}", _operator: EQUALS}]}}
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
  }`,
    variables: {},
  });
  const res = await fetch(apiUrl.toString(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: graphQLQuery,
  });
  const data = (await res.json()) as IAppContentData;
  const appContent = data.data.cPPGenericCFList.items[0];
  return appContent;
};

// Function to retrieve general content fragments by content type
export const getContentByType = async (cfType: string) => {
  const apiUrl = process.env.AEM_CONTENT_FRAGMENTS || '';
  const graphQLQuery = JSON.stringify({
    query: `{
        cPPGenericCFList(
          filter: {contentType: {_expressions: [{value: "${cfType}", _operator: EQUALS}]}}
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
  }`,
    variables: {},
  });
  const res = await fetch(apiUrl.toString(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: graphQLQuery,
  });
  const data = (await res.json()) as IAppContentData;
  const appContent = data.data.cPPGenericCFList.items;
  return appContent;
};
