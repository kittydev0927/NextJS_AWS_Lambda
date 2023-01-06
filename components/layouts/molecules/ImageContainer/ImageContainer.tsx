import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import BeingPrepared from '#public/being-prepared-placeholder.png';
import MovingTips from '#public/moving-tips-placeholder.png';

import {
  StyledCardDescText,
  StyledCardTitle,
  StyledImageCard,
  StyledImageContainer,
  StyledLink,
} from './ImageContainer.styles';

export const ImageContainer: React.FC = () => (
  <StyledImageContainer container data-testid="image-container">
    <StyledImageCard className="being-prepared" item xs={12} sm={3} md={3.5}>
      <div className="secondary-bg">
        <div className="text-con">
          <StyledCardTitle variant="h3">Being Prepared</StyledCardTitle>
          <StyledCardDescText variant="body1">Morbi leo risus, porta ac</StyledCardDescText>
        </div>
      </div>
      <div className="being-prepared-img">
        <Image src={BeingPrepared} width={500} height={300} alt="Happy couple signing contract with realtor" />
      </div>
    </StyledImageCard>
    <StyledImageCard className="moving-tips" item xs={12} sm={8} md={8}>
      <Grid container className="secondary-bg">
        <Grid item xs={12} sm={12} md={4} className="text-con">
          <StyledCardTitle className="moving-tips-title" variant="h3">
            Moving Tips
          </StyledCardTitle>
          <StyledCardDescText className="moving-tips-desc-text" variant="body1">
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere.
          </StyledCardDescText>
          <StyledLink showArrow href="/" variant="body2">
            View Moving Tips &nbsp;
          </StyledLink>
        </Grid>
        <Grid item xs={12} sm={12} md={8} className="moving-tips-img">
          <Image
            src={MovingTips}
            width={1000}
            height={518}
            alt="Happy couple sitting next to moving boxes and house plants"
          />
        </Grid>
      </Grid>
    </StyledImageCard>
  </StyledImageContainer>
);
