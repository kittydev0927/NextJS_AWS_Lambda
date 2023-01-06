import { customAlphabet } from 'nanoid/non-secure';
import { useState } from 'react';

const size = 10;
const nanoid = customAlphabet('1234567890abcdef', size);

export const useUniqueID = (): string => {
  const [id] = useState(nanoid());

  return id;
};
