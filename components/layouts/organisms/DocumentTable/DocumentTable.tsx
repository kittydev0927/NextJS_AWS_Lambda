import { Grid, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import { DocumentRow } from '#components/layouts/molecules/DocumentRow/DocumentRow';
import type { DocumentRowProps } from '#components/layouts/molecules/DocumentRow/DocumentRow.types';
import sortIcon from '#public/sort-arrow.svg';
import { theme } from '#styles/styles';

import { StyledHeader, StyledRowHeader, StyledRowWrapper } from './DocumentTable.styles';
import type { DocumentTableProps } from './DocumentTable.types';

export const DocumentTable: React.FC<DocumentTableProps> = ({ rows, ...props }) => {
  enum SortField {
    document = 0,
    type = 1,
    size = 2,
    category = 3,
  }

  const breakpoint = useMediaQuery(theme.breakpoints.up('sm'));
  const [displayRows, setDisplayRows] = React.useState<DocumentRowProps[]>(rows);
  const [sortOrder, setSortOrder] = React.useState<boolean[]>([true, true, true, true]);

  const sortBySize = (a: DocumentRowProps, b: DocumentRowProps, sortField: SortField) => {
    return sortOrder[sortField]
      ? parseFloat(a.row.size || '') - parseFloat(b.row.size || '')
      : parseFloat(b.row.size || '') - parseFloat(a.row.size || '');
  };

  const defaultSort = (a: DocumentRowProps, b: DocumentRowProps, sortField: SortField) => {
    return sortOrder[sortField]
      ? (a.row[SortField[sortField]] || '').toString().localeCompare((b.row[SortField[sortField]] || '').toString())
      : (b.row[SortField[sortField]] || '').toString().localeCompare((a.row[SortField[sortField]] || '').toString());
  };

  const handleSortClick = (sortField: SortField): void => {
    let sortedRows: DocumentRowProps[];
    if (sortField === SortField.size) {
      sortedRows = [...rows].sort((a, b) => sortBySize(a, b, sortField));
    } else {
      sortedRows = [...rows].sort((a, b) => defaultSort(a, b, sortField));
    }
    const newSortOrder = sortOrder;
    newSortOrder[sortField] = !newSortOrder[sortField];
    setDisplayRows([...sortedRows]);
    setSortOrder([...newSortOrder]);
  };

  return (
    <>
      <StyledHeader {...props}>All Documents</StyledHeader>
      {breakpoint && (
        <StyledRowHeader container>
          <Grid item className="header-cell1" onClick={() => handleSortClick(SortField.document)}>
            Document&nbsp;
            <Image
              src={sortIcon as string}
              width={8}
              height={13}
              alt=""
              className="sort-icon"
              data-testid="doc-sort-icon"
            />
          </Grid>
          <Grid item className="header-cell2" onClick={() => handleSortClick(SortField.type)}>
            Type&nbsp;
            <Image
              src={sortIcon as string}
              width={8}
              height={13}
              alt=""
              className="sort-icon"
              data-testid="type-sort-icon"
            />
          </Grid>
          <Grid item className="header-cell3" onClick={() => handleSortClick(SortField.size)}>
            Size&nbsp;
            <Image
              src={sortIcon as string}
              width={8}
              height={13}
              alt=""
              className="sort-icon"
              data-testid="size-sort-icon"
            />
          </Grid>
          <Grid item className="header-cell4" onClick={() => handleSortClick(SortField.category)}>
            Category&nbsp;
            <Image
              src={sortIcon as string}
              width={8}
              height={13}
              alt=""
              className="sort-icon"
              data-testid="cate-sort-icon"
            />
          </Grid>
          <Grid item className="header-cell5">
            Download
          </Grid>
        </StyledRowHeader>
      )}
      <StyledRowWrapper>
        {displayRows.map((r, index) => {
          return <DocumentRow key={`document_${index}`} row={r.row} />;
        })}
      </StyledRowWrapper>
    </>
  );
};
