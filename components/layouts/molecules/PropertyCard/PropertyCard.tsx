import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import { useContext, useState } from 'react';

import { UserContext } from '#auth/UserContext';
import Bathroom from '#public/bathroom.svg';
import Bedroom from '#public/bedroom.svg';

import { MobilePropertyCardMap } from './MobilePropertyCardMap';
import {
  StyledAddressLink,
  StyledButton,
  StyledCardBottomContent,
  StyledCardContent,
  StyledCardHeader,
  StyledCardWrapper,
  StyledHeartButton,
  StyledImage,
  StyledLabelStatus,
  StyledPrice,
  StyledRoomNumber,
  StyledRoomNumberContainer,
  StyledRoomNumberDivider,
  StyledStatus,
  StyledStatusesTitles,
} from './PropertyCard.styles';
import type { PropertyCardProps } from './PropertyCard.types';
import { STATUSES_TITLES } from './PropertyCard.types';

export const PropertyCard: React.FC<PropertyCardProps> = ({
  labelStatus,
  favorite,
  image,
  information,
  mapTypeCard,
  propertyId,
}) => {
  const [isFavorite, isSetFavorite] = useState(favorite);
  const { address, bedroom, price, statuses, bathroom } = information;
  const theme = useTheme();
  const mobileBreakPoint = useMediaQuery(theme.breakpoints.only('xs'));
  const portalUser = useContext(UserContext);

  const handleRemoveProperty = async () => {
    await portalUser?.removeSavedHomes(propertyId);
  };

  const handleSaveProperty = async () => {
    await portalUser?.addSavedHomes(propertyId);
  };

  const handleFavorite = () => {
    isSetFavorite(!isFavorite);
    if (isFavorite) {
      void handleRemoveProperty();
    } else {
      void handleSaveProperty();
    }
  };

  return (
    <>
      <StyledCardWrapper variant="outlined" mapTypeCard={mapTypeCard}>
        {mapTypeCard && mobileBreakPoint ? (
          <MobilePropertyCardMap
            information={information}
            image={image}
            favorite={isFavorite}
            propertyId={propertyId}
            favouriteHandler={handleFavorite}
          />
        ) : (
          <>
            <StyledCardHeader>
              <StyledLabelStatus type={labelStatus}>{STATUSES_TITLES[labelStatus]}</StyledLabelStatus>
              <StyledHeartButton onClick={handleFavorite} aria-label="Save" data-testid="handle-favorite">
                {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </StyledHeartButton>
            </StyledCardHeader>
            <StyledImage src={image.src} alt={image.alt} />
            <StyledCardContent container>
              <Grid container>
                <Grid item xs={6}>
                  <Grid container>
                    <StyledPrice variant="h3">
                      ${price} <span>mo</span>
                    </StyledPrice>
                  </Grid>
                  <StyledRoomNumberContainer container>
                    <StyledRoomNumber>
                      <Image src={Bedroom as string} width={33} height={22} alt="Bedroom" /> <span>{bedroom}</span>
                    </StyledRoomNumber>
                    <StyledRoomNumberDivider />
                    <StyledRoomNumber>
                      <Image src={Bathroom as string} width={27} height={22} alt="Bathroom" /> <span>{bathroom}</span>
                    </StyledRoomNumber>
                  </StyledRoomNumberContainer>
                </Grid>

                <StyledStatusesTitles item xs={6}>
                  {statuses.map(item => item && <StyledStatus key={item}>{STATUSES_TITLES[item]}</StyledStatus>)}
                </StyledStatusesTitles>
              </Grid>
              <StyledCardBottomContent container>
                <StyledAddressLink href={address.href}>{address.title}</StyledAddressLink>
                <StyledButton variant="primary" href={`/application/what-to-expect?propertyId=${propertyId}`}>
                  Apply now
                </StyledButton>
              </StyledCardBottomContent>
            </StyledCardContent>
          </>
        )}
      </StyledCardWrapper>
    </>
  );
};
