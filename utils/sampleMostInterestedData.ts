import type { MostInterestedOptionProps } from '#components/forms/molecules/PBSections/MostInterestedComponent/MostInterestedSection.types';

export const sampleMostInterestedData: MostInterestedOptionProps[] = [
  { label: 'I need to move. And fast!' },
  { label: 'I want to know what I can afford' },
  { label: 'I’m just browsing' },
  {
    label: 'I need a short-term rental',
    additionAnswer: {
      selectOptions: [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
      ],
    },
  },
  { label: 'Other', additionAnswer: 'input' },
];
