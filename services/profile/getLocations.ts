import { isLocationResponse } from './getLocation';

interface LocationResponse {
  readonly locality: string;
  readonly region: string;
}

export const getLocations: () => Promise<LocationResponse[]> = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_PORTAL_API_URL || process.env.STORYBOOK_PORTAL_API_URL;
  if (!apiUrl) {
    throw new Error('Could not resolve API url');
  }

  const apiEndpoint = new URL(apiUrl);

  return fetch(new URL('/locations', apiEndpoint).toString())
    .then(async response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const result = (await response.json()) as unknown;

      if (isLocationResponse(result)) {
        return result;
      }

      throw new Error('Unexpected location response.');
    })
    .then(data => data as []);
};
