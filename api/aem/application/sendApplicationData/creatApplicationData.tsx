export const createApplicationData = async (firstName: unknown) => {
  const apiUrl = process.env.NEXT_PUBLIC_GRAPHQL || '';
  const apiKey = process.env.NEXT_PUBLIC_GRAPHQL_APIKEY || '';
  const graphQLQuery = JSON.stringify({
    query: `mutation createApplication {
      createAppliction(applicant:{
        applicationState:"created",
        portalId: "140",
        createBy:  ${firstName as string}
        createdOn: ${new Date()},
      }) {
        type
        applicationState
        portalId
        createdOn
      }
    }`,
  });
  const res = await fetch(apiUrl.toString(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey },
    body: graphQLQuery,
  });
  const data = (await res.json()) as string;
  console.warn(data);
  return data;
};
