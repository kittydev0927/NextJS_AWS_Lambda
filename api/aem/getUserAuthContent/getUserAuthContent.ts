import type { IUserAuthRawData } from './getUserAuthContent.types';

export const getUserAuthContent = async () => {
  const apiUrl = process.env.AEM_CONTENT_FRAGMENTS || '';
  const graphQLQuery = JSON.stringify({
    query: `{
      headerContent: cPPGenericCFList(
        filter: {cfId: {_expressions: [{value: "register-main", _operator: EQUALS}]}}
    ) {
        items {
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
      tcContent: cPPGenericCFList(
        filter: {cfId: {_expressions: [{value: "register-privacychkbox", _operator: EQUALS}]}}
    ) {
        items {
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
      consentContent: cPPGenericCFList(
        filter: {cfId: {_expressions: [{value: "register-consentchkbox", _operator: EQUALS}]}}
    ) {
        items {
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
      signInContent: cPPGenericCFList(
        filter: {cfId: {_expressions: [{value: "sign-in", _operator: EQUALS}]}}
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
      loginLandingPageContent: cPPGenericCFList(
        filter: {contentType: {_expressions: [{value: "userauthlanding", _operator: EQUALS}]}}
    ) {
        items {
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

  const data = (await res.json()) as IUserAuthRawData;
  const appContent = data.data;

  return appContent;
};
