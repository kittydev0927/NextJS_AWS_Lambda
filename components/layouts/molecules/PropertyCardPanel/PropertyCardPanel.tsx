import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SwiperCore, { A11y, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ListMapButton } from '#components/forms/atoms/ListMapButton/ListMapButton';
import { SortFilterOption } from '#components/forms/atoms/SortFilterOption/SortFilterOption';
import { Divider } from '#components/layouts/atoms/Divider/Divider';
import { Map } from '#components/layouts/organisms/Map/Map';
import type { IMapProps } from '#components/layouts/organisms/Map/Map.types';
import { mapPropertiesAdapter } from '#utils/propertiesAdapters';

import { PropertyCard } from '../PropertyCard/PropertyCard';
import {
  StyledConDiv,
  StyledCopyTypography,
  StyledDescBottomDiv,
  StyledDescDiv,
  StyledDividerCon,
  StyledLink,
  StyledMapContainer,
  StyledPagCon,
  StyledPropCardsDiv,
  StyledPropertyCount,
  StyledPropertyFiltersCon,
  StyledSwiperCon,
  StyledTitleDiv,
  StyledTitleTypography,
} from './PropertyCardPanel.styles';
import type { PropertyCardPanelProps } from './PropertyCardPanel.types';

export const PropertyCardPanel: React.FC<PropertyCardPanelProps> = ({
  title,
  description = null,
  linkText = null,
  showFilters = false,
  onClickLink,
  properties,
  homesView = 'list',
  homesViewOnChange,
  propertyView = 'card',
}) => {
  SwiperCore.use([A11y, Navigation, Pagination]);

  const [mapProperties, setMapProperties] = useState<IMapProps['propertiesData'] | undefined>();

  useEffect(() => {
    setMapProperties(mapPropertiesAdapter(properties));
  }, [properties]);

  return (
    <StyledConDiv>
      <StyledTitleDiv showFilters={showFilters}>
        <StyledTitleTypography variant="h5" title={title}>
          {title} {showFilters && <StyledPropertyCount>({properties.length})</StyledPropertyCount>}
        </StyledTitleTypography>
        {description && (
          <>
            <StyledDividerCon>
              <Divider orientation="vertical" />
            </StyledDividerCon>
            <StyledDescDiv>{description}</StyledDescDiv>
          </>
        )}
        {!showFilters && linkText && (
          <StyledLink textVariant="body1" onClick={onClickLink}>
            {linkText}
          </StyledLink>
        )}
        {showFilters && (
          <StyledPropertyFiltersCon>
            <SortFilterOption
              defaultFilterValue="showAll"
              defaultSortValue="moveInDate"
              filterOptions={[
                {
                  label: 'All',
                  value: 'showAll',
                },
                {
                  label: 'For Rent',
                  value: 'forRent',
                },
                {
                  label: 'Unavailable',
                  value: 'unavailable',
                },
              ]}
              sortOptions={[
                {
                  label: 'Move-In Date',
                  value: 'moveInDate',
                },
                {
                  label: 'Price',
                  value: 'price',
                },
                {
                  label: 'Distance',
                  value: 'distance',
                },
                {
                  label: 'Bedrooms',
                  value: 'bedrooms',
                },
                {
                  label: 'Bathrooms',
                  value: 'bathrooms',
                },
              ]}
            />
            <ListMapButton value={homesView} onChange={homesViewOnChange} />
          </StyledPropertyFiltersCon>
        )}
      </StyledTitleDiv>
      <StyledDescBottomDiv margin={title === 'Recommended For You' ? 'large' : 'small'}>
        {description}
      </StyledDescBottomDiv>
      {propertyView === 'card' && showFilters && properties && properties.length > 0 && (
        <StyledPropCardsDiv>
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </StyledPropCardsDiv>
      )}
      {propertyView === 'card' && !showFilters && properties && properties.length > 0 && (
        <StyledSwiperCon>
          <Swiper
            navigation
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
            pagination={properties.length > 3}
            spaceBetween={50}
            slidesPerView={1}
            scrollbar={false}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1087: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {properties.map((property, index) => (
              <SwiperSlide key={index}>
                <PropertyCard {...property} />
              </SwiperSlide>
            ))}
          </Swiper>
          <StyledPagCon container>
            <Grid item xs={3} sm={4}>
              &nbsp;
            </Grid>
            <Grid item xs={3} sm={4}>
              &nbsp;
            </Grid>
          </StyledPagCon>
        </StyledSwiperCon>
      )}
      {propertyView === 'map' && mapProperties && mapProperties.length > 0 && (
        <StyledMapContainer>
          <Map propertiesData={mapProperties} />
        </StyledMapContainer>
      )}
      {!properties || (properties.length === 0 && NoDataCopy(title))}
    </StyledConDiv>
  );
};

const NoDataCopy = (title: string) => (
  <StyledCopyTypography>
    {title === 'Saved Homes' ? 'You currently have no saved homes.' : 'You currently have no recommended homes.'}
  </StyledCopyTypography>
);
