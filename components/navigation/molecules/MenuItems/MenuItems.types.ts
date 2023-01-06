import type React from 'react';

interface MenuItemsProps {
  selectedNav?: string;
  toggleSearchField: React.Dispatch<React.SetStateAction<boolean>>;
}

export default MenuItemsProps;
