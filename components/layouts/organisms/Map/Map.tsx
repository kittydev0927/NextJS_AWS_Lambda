import 'mapbox-gl/dist/mapbox-gl.css';

import { useMediaQuery } from '@mui/material';
import type { ILatLng } from 'homedetail/IHomeDetail';
import { LngLat, LngLatBounds } from 'mapbox-gl';
import Image from 'next/image';
import React, { useCallback, useRef, useState } from 'react';
import MapCon, { Marker, NavigationControl, Popup } from 'react-map-gl';

import { mapboxToken } from '#constants/mapboxToken';
import { theme } from '#styles/styles';

import HomeIcon from './home.svg';
import HomeIconCurrent from './home-current.svg';
import { StyledMap } from './Map.styles';
import type { IMapProps, IPropertyProps } from './Map.types';
import { MapPropertyCard } from './MapPropertyCard';

export const Map: React.FC<IMapProps> = ({ propertiesData }) => {
  const [selectedProperty, setSelectedProperty] = useState<IPropWithLocation | null>(null);
  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  const viewState = useCallback(
    () => calculateInitialViewState(propertiesData.filter(hasLocation).map(p => p.location)),
    [propertiesData],
  );

  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    property: React.SetStateAction<IPropWithLocation | null>,
  ) => {
    e.stopPropagation();
    setSelectedProperty(property);
  };

  const handleOnClose = () => setSelectedProperty(null);

  const height = smallBreakpoint ? '100vh' : '440px';

  return (
    <StyledMap data-testid="map-component" ref={mapContainerRef}>
      <MapCon
        initialViewState={viewState()}
        data-testid="mapbox"
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxAccessToken={mapboxToken}
        ref={mapRef}
        style={{ height }}
      >
        {propertiesData.filter(hasLocation).map(property => (
          <Marker key={property.id} anchor="bottom" latitude={property.location[0]} longitude={property.location[1]}>
            <button
              data-value={`marker-${property.id}`}
              data-testid={`marker-btn-${property.id}`}
              aria-label="Map marker"
              className="marker-btn"
              onClick={e => handleOnClick(e, property)}
            >
              <Image
                src={(selectedProperty === property ? HomeIconCurrent : HomeIcon) as string}
                width={49}
                height={68}
                alt=""
              />
            </button>
          </Marker>
        ))}

        {smallBreakpoint && selectedProperty && (
          <Popup
            closeButton={false}
            latitude={selectedProperty.location[0]}
            longitude={selectedProperty.location[1]}
            maxWidth="411px"
            onClose={handleOnClose}
          >
            <MapPropertyCard {...selectedProperty} />
          </Popup>
        )}
        <NavigationControl showCompass={false} showZoom={false} />
      </MapCon>
      {!smallBreakpoint && selectedProperty && <MapPropertyCard {...selectedProperty} />}
    </StyledMap>
  );
};

type IPropWithLocation = Omit<IPropertyProps, 'location'> & {
  readonly location: NonNullable<IPropertyProps['location']>;
};

const hasLocation = (property: IPropertyProps): property is IPropWithLocation => Boolean(property.location);

const calculateInitialViewState = (points: readonly ILatLng[]) => {
  const bounds = points.reduce<LngLatBounds>((bounds, [lat, lng]) => {
    return bounds.extend(new LngLat(lng, lat));
  }, new LngLatBounds());

  return {
    bounds,
    fitBoundsOptions: {
      padding: {
        bottom: 100,
        left: 100,
        right: 100,
        top: 100,
      },
    },
  };
};
