import '@testing-library/jest-dom/extend-expect';

import * as NextImage from 'next/image';

// Justification: False positive; the value is used.
const OriginalNextImage = NextImage.default;

// Justification: Patching an import.
// eslint-disable-next-line no-import-assign
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginalNextImage {...props} unoptimized />,
});
