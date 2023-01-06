import Grid from '@mui/material/Grid';
import React from 'react';

import { Link } from '../../atoms/Link/Link';
import { Typography } from '../../atoms/Typography/Typography';
import type { LinksListProps } from './LinksList.types';

// To be reusable, these props will be needed:
// [] grid spacing for container
// - grid item widths at different breakpoints
// [x] array of links to map over
export const LinksList: React.FC<LinksListProps> = ({
  children,
  underline,
  textStyles,
  links,
  textAlign,
  textVariant,
  gridSpacing = 2,
  gridItemXs = 6,
  gridItemSm = 6,
  gridItemMd = 3,
  gridItemLg,
  gridItemXl,
  linksColor,
  ...props
}) => {
  return (
    <div {...props}>
      <Typography sx={textStyles} textAlign={textAlign} textVariant={textVariant}>
        Quick Links
      </Typography>
      <Grid container spacing={gridSpacing}>
        {links?.map(link => (
          <Grid
            item
            xs={gridItemXs}
            sm={gridItemSm}
            md={gridItemMd}
            lg={gridItemLg}
            xl={gridItemXl}
            key={link.url + link.text}
          >
            <Link underline={underline} color={linksColor} href={link.url} data-testid={`links-${link.text}`}>
              {link.text}
            </Link>
          </Grid>
        ))}
      </Grid>
      {children}
    </div>
  );
};

export default LinksList;
