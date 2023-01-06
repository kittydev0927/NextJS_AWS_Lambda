import type { ILoginLandingPageData } from './loginLandingPageContentQuery.types';

export const getLoginLandingPageContent = async () => {
  const apiUrl = process.env.AEM_CONTENT_FRAGMENTS || '';
  const graphQLQuery = JSON.stringify({
    query: `{
  cPPGenericCFList(
    filter: {contentType: {_expressions: [{value: "userauthlanding", _operator: EQUALS}]}}
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
  const data = (await res.json()) as ILoginLandingPageData;
  return data.data.cPPGenericCFList.items;
};
