import Grid from '@mui/material/Grid';
import React from 'react';

import { StyledGridItemFlex, StyledHeading, StyledLink } from './LinksListSmall.styles';
import type { LinksListSmallProps } from './LinksListSmall.types';

export const LinksListSmall: React.FC<LinksListSmallProps> = ({
  children,
  text,
  links,
  linkColor,
  textStyles,
  textVariant,
  textAlign,
  gridSpacing,
  gridItemXs = 12,
  gridItemSm = 12,
  gridItemMd = 12,
  gridItemLg,
  gridItemXl,
  ...props
}) => {
  return (
    <div {...props}>
      <StyledHeading component="h3" sx={textStyles} textVariant={textVariant} textAlign={textAlign}>
        {text}
      </StyledHeading>
      <Grid container spacing={gridSpacing}>
        {links?.map(link => (
          <Grid
            item
            key={link.url + link.text}
            xs={gridItemXs}
            sm={gridItemSm}
            md={gridItemMd}
            lg={gridItemLg}
            xl={gridItemXl}
          >
            <StyledGridItemFlex>
              {link.url.includes('rentprogress.com') ? (
                <StyledLink color={linkColor} href={link.url}>
                  {link.text}
                </StyledLink>
              ) : (
                <StyledLink color={linkColor} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.text}
                </StyledLink>
              )}
            </StyledGridItemFlex>
          </Grid>
        ))}
      </Grid>
      {children}
    </div>
  );
};
