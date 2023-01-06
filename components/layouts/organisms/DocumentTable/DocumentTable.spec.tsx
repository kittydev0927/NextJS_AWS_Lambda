import { useMediaQuery } from '@mui/material';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { rows } from '#utils/sampleDocTableData';
import { render, screen } from '#utils/testing-library';

import { DocumentTable } from './DocumentTable';
import type { DocumentTableProps } from './DocumentTable.types';

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn().mockReturnValue(true),
}));

describe('DocumentTable', () => {
  const args = {
    rows: rows,
  } as unknown as DocumentTableProps;
  it('Document table component rendering in desktop view', async () => {
    render(<DocumentTable {...args} />);

    expect(screen.getByTestId('doc-sort-icon')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('doc-sort-icon'));
    expect(screen.getByText(args.rows[0].row.document)).toBeDefined();
    userEvent.click(screen.getByTestId('doc-sort-icon'));

    expect(screen.getByTestId('type-sort-icon')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('type-sort-icon'));

    expect(screen.getByTestId('size-sort-icon')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('size-sort-icon'));
    userEvent.click(screen.getByTestId('size-sort-icon'));

    expect(screen.getByTestId('cate-sort-icon')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('cate-sort-icon'));
  });

  it('Document table component rendering in mobile view', async () => {
    render(<DocumentTable {...args} />);

    (useMediaQuery as unknown as jest.Mock).mockReturnValue(false);

    expect(screen.getByText(args.rows[0].row.document)).toBeDefined();
  });
});
