import type { IHomeDetail } from 'homedetail/IHomeDetail';
import React, { useEffect, useState } from 'react';

import {
  StyledBox,
  StyledCard,
  StyledCardAddress,
  StyledCardContent,
  StyledCardDetails,
  StyledCardHeader,
  StyledCardMedia,
} from './SmallPropertyCard.styles';
import type { ISmallPropertyCard } from './SmallPropertyCard.types';

export const SmallPropertyCard: React.FC<ISmallPropertyCard> = ({ property, header }) => {
  const [currentProperty, setCurrentProperty] = useState<IHomeDetail>({});

  useEffect(() => {
    setCurrentProperty(property);
  }, [property]);

  const { images, streetAddress, locality, region, postalCode, beds, baths, price } = currentProperty;

  return (
    <StyledCard elevation={0}>
      {currentProperty && (
        <>
          <StyledCardMedia alt="Property Image" component="img" role="img" image={images?.[0].sm} />
          <StyledBox>
            <StyledCardContent>
              <StyledCardHeader>{header}</StyledCardHeader>
              <StyledCardAddress>{`${streetAddress} ${locality}, ${region} ${postalCode}`}</StyledCardAddress>
              <StyledCardDetails>
                {beds} bed | {baths} bath | ${price}/Mo
              </StyledCardDetails>
            </StyledCardContent>
          </StyledBox>
        </>
      )}
    </StyledCard>
  );
};

export default SmallPropertyCard;
