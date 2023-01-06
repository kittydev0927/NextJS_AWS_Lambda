import mediaQuery from 'css-mediaquery';

const defaultMobileWidth = 320;

export const createMatchMedia =
  (width: number = defaultMobileWidth) =>
  (query: string): MediaQueryList => ({
    matches: mediaQuery.match(query, { width }),
    media: query,
    onchange: null,
    addListener: () => jest.fn(),
    removeListener: () => jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  });
