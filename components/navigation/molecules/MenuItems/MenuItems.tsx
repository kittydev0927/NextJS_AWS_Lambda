import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Image from 'next/image';
import React, { useState } from 'react';

import type { Nav } from '#components/layouts/organisms/Header/Header.types';
import PathIcon from '#public/path.svg';
import PathIconTwo from '#public/path-copy-4.svg';
import { navigationButtons } from '#utils/placeholderLinks';

import {
  StyledListIcon,
  StyledListItem,
  StyledListItemOption,
  StyledListItemText,
  StyledListOption,
} from './MenuItems.styles';
import type MenuItemsProps from './MenuItems.types';

export const MenuItems: React.FC<MenuItemsProps> = ({ toggleSearchField }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedNav, setSelectedNav] = useState<Partial<Nav>>({});

  // TODO: Please provide context for this. If this one button needs special
  // treatment, should it have a flag on the `Nav` interface rather than
  // being called out as special here?
  const magicNumber = 4;

  const showNavigationOptions = (nav: Nav) => {
    if (nav.id !== magicNumber) {
      setSelectedNav(nav);
      setShowOptions(true);
      toggleSearchField(false);
    }
  };

  const hideOptions = () => {
    setShowOptions(false);
    toggleSearchField(false);
  };

  return (
    <Box role="presentation" data-testid="MenuItems-Container">
      {!showOptions && (
        <List>
          {navigationButtons.map(nav => (
            <StyledListItem key={nav.id} onClick={() => showNavigationOptions(nav)}>
              <StyledListItemText role="button" primary={nav.text} />{' '}
              {nav.options.length ? (
                <Image src={PathIcon as string} width={10} height={17} alt="Menu item image" />
              ) : null}
            </StyledListItem>
          ))}
        </List>
      )}
      {showOptions && (
        <List>
          <StyledListOption onClick={() => hideOptions()}>
            <StyledListIcon>
              <Image src={PathIconTwo as string} width={10} height={17} alt="backArrow" />
            </StyledListIcon>
            <StyledListItemOption primary={selectedNav?.text} />
          </StyledListOption>
          {selectedNav?.options?.map(option => (
            <StyledListItem key={option.text} onClick={() => hideOptions()}>
              <StyledListItemOption primary={option.text} />
            </StyledListItem>
          ))}
          {selectedNav?.subOptions?.length &&
            selectedNav.subOptions.map(option => (
              <StyledListItem key={option.text} onClick={() => hideOptions()}>
                <StyledListItemOption primary={option.text} />
              </StyledListItem>
            ))}
        </List>
      )}
    </Box>
  );
};

export default MenuItems;
