import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

import { getOccupantsContent } from '#api/aem/application/getOccupantsContent/getOccupantsContent';
import type { IOccupants } from '#api/aem/application/getOccupantsContent/getOccupantsContent.types';
import { AddSection } from '#components/forms/molecules/AddSection/AddSection';
import { ApplicationPageWrapper } from '#components/forms/molecules/ApplicationPageWrapper/ApplicationPageWrapper';
import { TipsInnerContent } from '#components/layouts/molecules/TipsSideBar/InnerContent/TipsInnerContent';
import { PageLayoutApplication } from '#components/layouts/organisms/PageLayoutApplication/PageLayoutApplication';
import { StyledDirections, StyledHeading, StyledOccupants } from '#styles/application/occupants.styles';
import { theme } from '#styles/styles';

const Occupants: React.FC<IOccupants> = ({ pageData }) => {
  const appTips = pageData.cPPApplicationTipsList.items[0];
  const smallBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));

  const router = useRouter();
  async function prevPage() {
    await router.push('/');
  }
  async function nextPage() {
    await router.push('/application/background');
  }

  return (
    <StyledOccupants>
      <PageLayoutApplication infoText="2022. All Rights Reserved Progress Residential ®">
        <ApplicationPageWrapper
          prevPage={prevPage}
          nextPage={nextPage}
          step={6}
          innerTheme={smallBreakpoint ? 'gradient' : 'plain'}
          outerTheme="plain"
          tipsContent={<TipsInnerContent appTips={appTips} />}
        >
          <div data-testid="occupants-page">
            <StyledHeading variant="h2">Occupant Information</StyledHeading>
            <StyledDirections>
              Please list anyone under the age of 18 who will be living with you in the home.
            </StyledDirections>
            <AddSection
              fieldText="Occupant"
              removeText="Remove Occupant"
              buttonText="Add Additional Occupant"
              options={[
                {
                  label: 'Legal First Name',
                  type: 'textbox',
                },
                {
                  label: 'Middle Name',
                  type: 'textbox',
                },
                {
                  label: 'Last Name',
                  type: 'textbox',
                },
                {
                  label: 'Date of Birth',
                  type: 'date',
                },
              ]}
            />
          </div>
        </ApplicationPageWrapper>
      </PageLayoutApplication>
    </StyledOccupants>
  );
};

export async function getStaticProps() {
  const pageData = await getOccupantsContent();
  return { props: { pageData } };
}

export default Occupants;
