export const updateAdditionalInfoData = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_GRAPHQL || '';
  const apiKey = process.env.NEXT_PUBLIC_GRAPHQL_APIKEY || '';
  const graphQLQuery = JSON.stringify({
    query: `mutation updateApplication {
      updateAppliction(applicant:{
        applicationState:"updated",
        updatedBy: "",
        updatedOn: ${new Date()},
      }) {
        type
        applicationState
        updatedBy
        updatedOn
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
