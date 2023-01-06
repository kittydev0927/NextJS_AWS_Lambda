import type { MultiSelectOptionProps } from '#components/forms/molecules/MultiSelect/MultiSelect.types';

export const sampleMultiSelectData: MultiSelectOptionProps[] = [
  {
    content: [
      {
        nodeType: 'text',
        value: 'Bankruptcy (Pending)',
      },
    ],
  },
  {
    content: [
      {
        nodeType: 'text',
        value: 'Eviction (Prior or Pending)',
      },
    ],
  },
  {
    content: [
      {
        nodeType: 'text',
        value: 'Felony Conviction (in the Last 6 Years)',
      },
    ],
  },
  {
    content: [
      {
        nodeType: 'text',
        value: 'None of the Above',
      },
    ],
  },
];
