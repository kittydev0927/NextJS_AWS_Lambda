import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import * as React from 'react';

import { theme } from '#styles/styles';

import { StyledListIcon, StyledMapIcon, StyledSavedHomeDisplay } from './ListMapButton.style';
import type { ListMapButtonProps } from './ListMapButton.types';

export const ListMapButton: React.FC<ListMapButtonProps> = ({ value, disabled, onChange, ...props }) => {
  const [display, setDisplay] = React.useState<string>(value || 'list');
  const [listColor, setListColor] = React.useState<string>(theme.colors.black);
  const [mapPinColor, setMapPinColor] = React.useState<string>(theme.colors.darkGray);

  const handleDisplay = (event: React.MouseEvent<HTMLElement>, newDisplay: string) => {
    if (newDisplay) {
      setDisplay(newDisplay);
      if (onChange) {
        onChange(event, newDisplay);
      }
    }
  };

  const onMouseOverList = () => setListColor(theme.colors.white);
  const onMouseOutList = () => setListColor(theme.colors.black);
  const onMouseOverMapPin = () => setMapPinColor(theme.colors.white);
  const onMouseOutMapPin = () => setMapPinColor(theme.colors.darkGray);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledSavedHomeDisplay data-testid="list-map-button" className="list-map-button">
        <ToggleButtonGroup
          {...props}
          value={display}
          exclusive
          disabled={disabled}
          onChange={handleDisplay}
          aria-label="List Map Button"
        >
          <ToggleButton
            className="list-button"
            value="list"
            data-testid="list-button"
            aria-label="list"
            onMouseOver={onMouseOverList}
            onMouseOut={onMouseOutList}
          >
            <StyledListIcon>
              <svg width="15" height="15" viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg">
                <g stroke={listColor} strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round">
                  <path d="M1.326.75h14.348M1.326 7.568h14.348M1.326 14.387h14.348" />
                </g>
              </svg>
            </StyledListIcon>
          </ToggleButton>
          <ToggleButton
            className="map-button"
            value="map"
            data-testid="map-button"
            aria-label="map"
            onMouseOver={onMouseOverMapPin}
            onMouseOut={onMouseOutMapPin}
          >
            <StyledMapIcon>
              <svg width="17" height="28" viewBox="0 0 17 28" xmlns="http://www.w3.org/2000/svg">
                <g fill={mapPinColor} fillRule="nonzero">
                  <path d="M8.372.364c2.374 0 4.383 1.033 6.026 2.686 6.574 7.231-2.374 17.975-6.026 24.586C4.72 21.025-4.228 10.281 2.346 3.05 3.807 1.397 5.998.364 8.372.364zm4.93 3.925c-1.278-1.446-3.104-2.272-4.93-2.272-2.009 0-3.835.826-5.113 2.272-5.113 5.785 2.009 14.876 5.113 20.248 3.104-5.372 10.226-14.463 4.93-20.248z" />
                  <path d="M8.372 5.116c2.191 0 4.017 1.86 4.017 4.339C12.39 12.14 10.563 14 8.372 14c-2.191 0-4.017-1.86-4.017-4.545 0-2.48 1.826-4.34 4.017-4.34zm0 1.653c-1.46 0-2.556 1.24-2.556 2.686 0 1.652 1.095 2.892 2.556 2.892 1.278 0 2.374-1.24 2.374-2.892 0-1.447-1.096-2.686-2.374-2.686z" />
                </g>
              </svg>
            </StyledMapIcon>
          </ToggleButton>
        </ToggleButtonGroup>
      </StyledSavedHomeDisplay>
    </LocalizationProvider>
  );
};
