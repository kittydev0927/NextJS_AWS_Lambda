import { Grid, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';

import downloadIcon from '#public/noun-download-copy.png';
import { theme } from '#styles/styles';

import { StyledGridMobileWrapper, StyledGridWrapper } from './DocumentRow.styles';
import type { DocumentRowProps } from './DocumentRow.types';
export const DocumentRow: React.FC<DocumentRowProps> = ({ row }) => {
  const breakpoint = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
      {breakpoint ? (
        <StyledGridWrapper container>
          <Grid item className="cell1">
            {row.document}
          </Grid>
          <Grid item className="cell3">
            {row.type}
          </Grid>
          <Grid item className="cell4">
            {row.size}
          </Grid>
          <Grid item className="cell6">
            <div className="chip">
              <span>{row.category}</span>
            </div>
          </Grid>
          <Grid item className="cell7">
            <Image src={downloadIcon} width={19} height={20} alt="" />
          </Grid>
        </StyledGridWrapper>
      ) : (
        <StyledGridMobileWrapper container>
          <Grid item className="cell1">
            <Grid container className="doc-container">
              <Grid item className="document">
                {row.document}
              </Grid>
              <Grid item className="detail">
                ({row.type}, {row.size})
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <div className="chip">
                  <span>{row.category}</span>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className="cell2">
            <Image src={downloadIcon} width={14.8} height={15} alt="" />
          </Grid>
        </StyledGridMobileWrapper>
      )}
    </>
  );
};
