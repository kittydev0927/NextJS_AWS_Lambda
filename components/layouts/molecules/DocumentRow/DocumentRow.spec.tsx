import { useMediaQuery } from '@mui/material';
import React from 'react';

import { render, screen } from '#utils/testing-library';

import { DocumentRow } from './DocumentRow';
import type { DocumentRowProps } from './DocumentRow.types';

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn().mockReturnValue(true),
}));

describe('DocumentRow', () => {
  const args = {
    row: {
      document: 'Pet information',
      type: 'PDF',
      size: '125 KB',
      category: 'Pets',
      download: '#',
    },
  } as unknown as DocumentRowProps;
  it('RowComponent was rendered correct in desktop size', () => {
    render(<DocumentRow {...args} />);
    expect(screen.getByText(args.row.document)).toBeDefined();
    expect(screen.getByText(args.row.type)).toBeDefined();
    expect(screen.getByText(args.row.size)).toBeDefined();
    expect(screen.getByText(args.row.category)).toBeDefined();
  });
  it('RowComponent was rendered correct in mobile size', () => {
    render(<DocumentRow {...args} />);

    (useMediaQuery as unknown as jest.Mock).mockReturnValue(false);

    expect(screen.getByText(args.row.document)).toBeDefined();
    expect(screen.getByText(args.row.category)).toBeDefined();
  });
});
