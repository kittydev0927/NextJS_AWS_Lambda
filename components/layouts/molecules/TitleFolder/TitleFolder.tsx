import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Grid, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { theme } from '#styles/styles';

import {
  StyledChildrenContainer,
  StyledDivider,
  StyledGridContainer,
  StyledRightButton,
  StyledRightButtonContainer,
  StyledTitleHeader,
} from './TitleFolder.styles';
import type { TitleFolderProps } from './TitleFolder.types';
import { TitleFolderVariant } from './TitleFolder.types';

export const TitleFolder: React.FC<TitleFolderProps> = ({
  variant = TitleFolderVariant.Primary,
  rightButton,
  className,
  title,
  children,
}) => {
  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
  const backButtonDisplayRoutes = ['/edit-personal-information'];
  const router = useRouter();
  const determineMobileButton = !smallBreakpoint && backButtonDisplayRoutes.includes(router?.route);
  return (
    <div className={className}>
      <StyledGridContainer container type={variant} data-testid="TitleFolder">
        <Grid item xs={8} alignSelf="center">
          <StyledTitleHeader variant="h2" type={variant}>
            {title}
          </StyledTitleHeader>
        </Grid>
        {rightButton && !determineMobileButton && (
          <StyledRightButtonContainer item xs={4} className="TitleFolder_rightButton">
            <Link href={rightButton.href} passHref>
              <StyledRightButton>
                {rightButton.name || 'Edit'}
                <ArrowForwardIcon />
              </StyledRightButton>
            </Link>
          </StyledRightButtonContainer>
        )}
      </StyledGridContainer>
      <StyledDivider type={variant} />
      <StyledChildrenContainer className="TitleFolder_children">{children}</StyledChildrenContainer>
    </div>
  );
};
