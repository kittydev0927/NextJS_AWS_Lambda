import type { IApplicantsContentRawData, IApplicantsData } from './getApplicantsContent.types';

export const getApplicantsContent = async () => {
  const apiUrl = process.env.AEM_CONTENT_FRAGMENTS || '';
  const graphQLQuery = JSON.stringify({
    query: `{
        applicantsContent: cPPGenericCFList(
          filter: {cfId: {_expressions: [{value: "appStep1Aor1E", _operator: EQUALS}]}}
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
        inviteModalContent: cPPGenericCFList(
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
      subContent: cPPGenericCFList(
        filter: {cfId: {_expressions: [{value: "invite-applicants-subtext", _operator: EQUALS}]}}
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
  const data = (await res.json()) as IApplicantsContentRawData;
  const appContent = data.data as IApplicantsData;
  return appContent;
};
