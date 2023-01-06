import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import Bathroom from '#public/bathroom.svg';
import Bedroom from '#public/bedroom.svg';

import {
  StyledAddressLink,
  StyledButton,
  StyledCardHeader,
  StyledCardMapRightContent,
  StyledGrid,
  StyledHeartButton,
  StyledImage,
  StyledPrice,
  StyledRoomNumber,
  StyledRoomNumberContainer,
  StyledRoomNumberDivider,
  StyledStatus,
  StyledStatusesTitles,
} from './PropertyCard.styles';
import type { PropertyCardMapProps } from './PropertyCard.types';
import { STATUSES_TITLES } from './PropertyCard.types';

export const MobilePropertyCardMap: React.FC<PropertyCardMapProps> = ({
  image,
  favorite,
  information,
  favouriteHandler,
}) => {
  const { address, bedroom, price, statuses, bathroom } = information;
  return (
    <StyledGrid container>
      <StyledCardHeader mapTypeCard>
        <StyledHeartButton onClick={favouriteHandler} mapTypeCard>
          {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </StyledHeartButton>
      </StyledCardHeader>
      <Grid item xs={5}>
        <StyledImage src={image.src} alt={image.alt} mapTypeCard />
        <StyledAddressLink href={address.href} mapTypeCard>
          {address.title}
        </StyledAddressLink>
      </Grid>
      <StyledCardMapRightContent item xs={7}>
        <StyledPrice variant="h3" mapTypeCard>
          ${price} <span>mo</span>
        </StyledPrice>
        <StyledRoomNumberContainer container mapTypeCard>
          <StyledRoomNumber>
            <Image src={Bedroom as string} width={33} height={22} alt="Bedroom" /> <span>{bedroom}</span>
          </StyledRoomNumber>
          <StyledRoomNumberDivider />
          <StyledRoomNumber>
            <Image src={Bathroom as string} width={27} height={22} alt="Bathroom" /> <span>{bathroom}</span>
          </StyledRoomNumber>
        </StyledRoomNumberContainer>
        <StyledStatusesTitles item mapTypeCard>
          {statuses.map(item => item && <StyledStatus key={item}>{STATUSES_TITLES[item]}</StyledStatus>)}
        </StyledStatusesTitles>
      </StyledCardMapRightContent>
      <StyledButton variant="primary" mapTypeCard>
        Apply now
      </StyledButton>
    </StyledGrid>
  );
};
