import {
  StyledCard,
  StyledCardAddress,
  StyledCardContainer,
  StyledCardContent,
  StyledCardDetails,
  StyledCardHeader,
  StyledCardLineItem,
  StyledCardMedia,
} from './PropertyCardSummary.styles';
import type { IPropertyCardSummaryProps } from './PropertyCardSummary.types';

export const PropertyCardSummary: React.FC<IPropertyCardSummaryProps> = ({ header, image, information }) => {
  if (!information) return <></>;

  const { address, bedroom, bathroom, price } = information;
  return (
    <StyledCard elevation={0}>
      {image && <StyledCardMedia alt={image.alt || 'Property Image'} component="img" role="img" image={image.src} />}
      <StyledCardContainer>
        <StyledCardContent>
          {header && <StyledCardHeader>{header}</StyledCardHeader>}
          <StyledCardAddress>
            {address?.street && (
              <>
                <StyledCardLineItem>{address.street}</StyledCardLineItem>
                <br />
              </>
            )}
            {(address?.locality || address?.region || address?.postalCode) && (
              <StyledCardLineItem>
                {(address.locality && `${address.locality}`) || ''}
                {(address.region || address.postalCode) && ', '}
                {(address.region && `${address.region} `) || ''}
                {address.postalCode || ''}
              </StyledCardLineItem>
            )}
          </StyledCardAddress>
          <StyledCardDetails>
            <StyledCardLineItem>{bedroom || 'N/A'} bed</StyledCardLineItem>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <StyledCardLineItem>{bathroom || 'N/A'} bath</StyledCardLineItem>
            {price && (
              <>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <StyledCardLineItem>${price}/Mo</StyledCardLineItem>
              </>
            )}
          </StyledCardDetails>
        </StyledCardContent>
      </StyledCardContainer>
    </StyledCard>
  );
};

export default PropertyCardSummary;
