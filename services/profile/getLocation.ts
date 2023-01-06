export interface LocationResponse {
  readonly locality: string;
  readonly region: string;
}

type GetLocationType = (query: string) => Promise<readonly LocationResponse[]>;

export const getLocation: GetLocationType = async query => {
  const minAmountOfLetters = 3;

  if (query.length < minAmountOfLetters) {
    return [];
  }

  const apiUrl = process.env.NEXT_PUBLIC_PORTAL_API_URL || process.env.STORYBOOK_PORTAL_API_URL;
  if (!apiUrl) {
    throw new Error('Could not resolve API url');
  }

  const apiEndpoint = new URL(apiUrl);

  return fetch(new URL(`/locations?${new URLSearchParams({ 'begins-with': query })}`, apiEndpoint).toString())
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
    .then(data => data);
};

const isLocation = (o: unknown): o is LocationResponse => {
  if (o && typeof o === 'object') {
    const r = o as Record<string, unknown>;
    return typeof r.locality === 'string' && typeof r.region === 'string';
  }

  return false;
};

export const isLocationResponse = (o: unknown): o is readonly LocationResponse[] =>
  Array.isArray(o) && o.every(isLocation);
