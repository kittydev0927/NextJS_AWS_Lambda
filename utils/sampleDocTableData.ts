import type { DocumentRowProps } from '#components/layouts/molecules/DocumentRow/DocumentRow.types';

// test data for Document Table
export const rows: DocumentRowProps[] = [
  {
    row: {
      document: 'Pet information',
      type: 'PDF',
      size: '125 KB',
      category: 'Pets',
      download: '#',
    },
  },
  {
    row: {
      document: "Renter's Insurance Proof of coverage",
      type: 'JPG',
      size: '125 KB',
      category: 'HOA',
      download: '#',
    },
  },
  {
    row: {
      document: 'Vehicle information',
      type: 'JPG',
      size: '125 KB',
      category: 'HOA',
      download: '#',
    },
  },
  {
    row: {
      document: 'Lease Agreement',
      type: 'PDF',
      size: '125 KB',
      category: 'Lease Agreement',
      download: '#',
    },
  },
  {
    row: {
      document: 'HOA Guidelines',
      type: 'PDF',
      size: '127 KB',
      category: 'HOA',
      download: '#',
    },
  },
];
