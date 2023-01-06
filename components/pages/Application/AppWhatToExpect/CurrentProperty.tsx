import type { IHomeDetail } from 'homedetail/IHomeDetail';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

import { UserContext } from '#auth/UserContext';
import SmallPropertyCard from '#components/layouts/molecules/SmallPropertyCard/SmallPropertyCard';

import { StyledPropertyCard } from './AppWhatToExpect.styles';
import type { IAppWhatToExpect } from './AppWhatToExpect.types';

export const CurrentProperty: React.FC<Partial<IAppWhatToExpect>> = ({ testProperty }) => {
  const { query } = useRouter();
  const selectedProperty = query.propertyId;
  const portalUser = useContext(UserContext);

  const [currentProperty, setCurrentProperty] = useState<IHomeDetail>();

  useEffect(() => {
    async function loadCurrentProperty() {
      if (selectedProperty) {
        const property = await portalUser?.getProperty(selectedProperty.toString());
        setCurrentProperty(property);
      }
    }
    void loadCurrentProperty();
  }, [portalUser, selectedProperty]);

  return (
    <StyledPropertyCard className="small-property-card">
      {currentProperty && <SmallPropertyCard property={currentProperty} header="Application:" />}
      {!currentProperty && testProperty && <SmallPropertyCard property={testProperty} header="Application:" />}
    </StyledPropertyCard>
  );
};
