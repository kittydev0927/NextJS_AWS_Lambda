import type React from 'react';

import type { Nav } from '#components/layouts/organisms/Header/Header.types';

interface DesktopSubMenuProps {
  open?: boolean;
  disabled?: boolean;
  selectedNav?: Nav;
  closeOptions?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default DesktopSubMenuProps;
