import { createContext } from 'react';

import type { PortalUser } from './PortalUser';

export const UserContext = createContext<PortalUser | undefined>(undefined);
