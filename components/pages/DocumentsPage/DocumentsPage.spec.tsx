jest.mock('#auth/UseRouteUnauthenticated');
import { useMediaQuery } from '@mui/material';
import userEvent from '@testing-library/user-event';
import React from 'react';

import type { IUserAuthData } from '#api/aem/getUserAuthContent/getUserAuthContent.types';
import { useRouteUnauthenticated } from '#auth/UseRouteUnauthenticated';
import type { DocumentTableProps } from '#components/layouts/organisms/DocumentTable/DocumentTable.types';
import { DocumentsPage } from '#components/pages/DocumentsPage/DocumentsPage';
import { rows } from '#utils/sampleDocTableData';
import { sampleUserAuthContent } from '#utils/sampleUserAuthContentData';
import { render, screen } from '#utils/testing-library';

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn().mockReturnValue(true),
}));

const mockUseRouteUnauthenticated = jest.mocked(useRouteUnauthenticated);
mockUseRouteUnauthenticated.mockReturnValue(true);

describe('DocumentPage', () => {
  const args = {
    rows: rows,
  } as unknown as DocumentTableProps;

  it('Document page component rendering in desktop view', async () => {
    render(<DocumentsPage {...args} userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);

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

    expect(screen.getByTestId('file-upload-icon')).toBeInTheDocument();
    expect(screen.getByTestId('file-explorer-link-Upload Documents')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('file-explorer-link-Upload Documents'));
  });

  it('Document table component rendering in mobile view', async () => {
    (useMediaQuery as unknown as jest.Mock).mockReturnValue(false);
    render(<DocumentsPage {...args} userAuthContent={sampleUserAuthContent as unknown as IUserAuthData} />);

    expect(screen.getByText(args.rows[0].row.document)).toBeDefined();
    expect(screen.getByTestId('file-upload-icon')).toBeInTheDocument();
    expect(screen.getByTestId('file-explorer-link-Upload Documents')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('file-explorer-link-Upload Documents'));
  });
});
